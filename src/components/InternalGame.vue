<template>
  <div class="internalGame">
    <div ref="road" class="road" :style="{ marginLeft: `${roadMarginLeft}px` }" />
    <div ref="cloudContainer" class="cloudContainer">
      <img
        class="cloud"
        src="@/assets/images/game/internal/cloud.svg"
        v-for="cloud in cloudList"
        :key="cloud"
        :style="{
          height: `${cloud.height}px`,
          marginTop: `${cloud.marginTop}px`,
          marginLeft: `${cloud.marginLeft}px`
        }"
      />
    </div>
    <div ref="obstacleContainer" class="obstacleContainer">
      <img
        class="obstacle"
        src="@/assets/images/game/internal/obstacle.gif"
        v-for="obstacle in obstacleList"
        :key="obstacle"
        :style="{
          height: `${obstacle.height}px`,
          marginLeft: `${obstacle.marginLeft}px`
        }"
      />
    </div>
    <div ref="foodContainer" class="foodContainer">
      <img
        class="food"
        src="@/assets/images/game/internal/food.svg"
        v-for="food in foodList"
        :key="food"
        :style="{
          height: `${food.height}px`,
          marginLeft: `${food.marginLeft}px`,
          bottom: `${food.bottom}px`
        }"
      />
    </div>
    <img
      ref="player"
      class="player flipX"
      src="@/assets/images/game/internal/player.gif"
      :style="{ bottom: `${playerBottom}px` }"
    />
    <p v-if="isShowScore" class="score">得分：{{ currentScore }}</p>
    <p v-if="isShowTips" class="tips">按空格键开始游戏</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class InternalGame extends Vue {
  $refs!: {
    road: HTMLElement
    cloudContainer: HTMLElement
    obstacleContainer: HTMLElement
    foodContainer: HTMLElement
    player: HTMLElement
  }

  isPlaying = false
  isShowScore = false
  isShowTips = true

  currentScore = 0

  jumpHeight = 0

  isJumping = false

  // 移动速度
  speed = 5
  cloudMinSpeed = 1
  cloudMaxSpeed = 3

  // 计时器 id
  gameIntervalId = 0
  generateCloudIntervalId = 0
  generateObstacleIntervalId = 0
  generateFoodIntervalId = 0

  // 玩家的位置
  playerBottom = 0
  // 路面的位置
  roadMarginLeft = 0

  // 云朵列表
  cloudList: {
    height: number
    marginLeft: number
    marginTop: number
    speed: number
  }[] = []
  // 障碍物列表
  obstacleList: {
    height: number
    marginLeft: number
    isScored: boolean
  }[] = []
  // 食物列表
  foodList: {
    height: number
    marginLeft: number
    bottom: number
    isScored: boolean
  }[] = []

  mounted() {
    this.jumpHeight = this.$refs.player.clientHeight * 2.5

    document.onkeydown = event => {
      const keyNum = window.event ? event.keyCode : event.which
      if (keyNum == 32) {
        // 空格
        if (!this.isPlaying) {
          this.start()
        }
        this.jump()
      }
    }
  }

  // 开始游戏
  start() {
    this.isPlaying = true

    this.gameIntervalId = setInterval(this.gameInterval, 16)
    // this.generateCloudIntervalId = setTimeout(this.generateCloud, 0)
    this.generateObstacleIntervalId = setTimeout(this.generateObstacle, 0)
    this.generateFoodIntervalId = setTimeout(this.generateFood, 5000)

    this.isShowScore = true
    this.isShowTips = false
  }

  // 游戏间隔刷新函数
  gameInterval() {
    this.moveRoad()
    // this.moveCloud()
    this.moveObstacle()
    this.moveFood()
    this.checkGameState()
  }

  // 对路执行移动
  moveRoad() {
    const { road } = this.$refs
    let newMarginLeft = parseInt(road.style.marginLeft) - this.speed
    if (Math.abs(newMarginLeft) > road.clientWidth / 2) {
      newMarginLeft = 0
    }
    this.roadMarginLeft = newMarginLeft
  }

  // 对障碍物执行移动
  moveCloud() {
    for (let i = 0; i < this.cloudList.length; i++) {
      this.cloudList[i].marginLeft -= this.cloudList[i].speed
    }
  }

  // 对障碍物执行移动
  moveObstacle() {
    for (let i = 0; i < this.obstacleList.length; i++) {
      this.obstacleList[i].marginLeft -= this.speed
    }
  }

  // 对食物执行移动
  moveFood() {
    for (let i = 0; i < this.foodList.length; i++) {
      this.foodList[i].marginLeft -= this.speed
    }
  }

  // 生成云朵
  generateCloud() {
    const { cloudContainer, player } = this.$refs
    this.cloudList.push({
      height: (Math.random() + 0.5) * player.clientHeight,
      marginTop: Math.random() * (cloudContainer.clientHeight - player.clientHeight),
      marginLeft: cloudContainer.clientWidth,
      speed: Math.random() * (this.cloudMaxSpeed - this.cloudMinSpeed) + this.cloudMinSpeed
    })
    // 最少 2500ms 最多 (1500+2500)ms 生成一个障碍物
    this.generateCloudIntervalId = setTimeout(this.generateCloud, Math.random() * 1500 + 2500)
  }

  // 生成障碍物
  generateObstacle() {
    const { obstacleContainer, player } = this.$refs
    const factor = ((Math.random() * this.currentScore) / 10) * 0.1 + 1
    this.obstacleList.push({
      height: factor * player.clientHeight,
      marginLeft: obstacleContainer.clientWidth,
      isScored: false
    })
    // 最少 2000ms 最多 (1000+2000)ms 生成一个障碍物
    this.generateObstacleIntervalId = setTimeout(this.generateObstacle, Math.random() * 1000 + 2000)
  }

  // 生成食物
  generateFood() {
    this.foodList.push({
      height: (this.$refs.player.clientHeight / 3) * 2,
      marginLeft: this.$refs.foodContainer.clientWidth,
      bottom: Math.random() * this.jumpHeight,
      isScored: false
    })
    // 最少 5000ms 最多 (5000+5000)ms 生成一个食物
    this.generateFoodIntervalId = setTimeout(this.generateFood, Math.random() * 5000 + 5000)
  }

  // 跳跃
  jump() {
    if (this.isJumping) {
      return
    }
    this.isJumping = true
    const { player } = this.$refs
    const originBottom = parseInt(player.style.bottom)
    let time = 0
    const jumpIntervalId = setInterval(() => {
      const newBottom = Math.sin((time += 0.06)) * this.jumpHeight
      if (newBottom > originBottom) {
        this.playerBottom = newBottom
      } else {
        this.playerBottom = originBottom
        clearInterval(jumpIntervalId)
        this.isJumping = false
      }
    }, 16)
  }

  // 检查游戏状态
  checkGameState() {
    const destroyBoundary = -200

    // 回收云朵
    for (let i = this.cloudList.length - 1; i >= 0; i--) {
      if (this.cloudList[i].marginLeft < destroyBoundary) {
        this.cloudList.splice(i, 1)
      }
    }

    const { player } = this.$refs
    const playerRect = this.zoomOutBound(player.getBoundingClientRect())

    const { obstacleContainer } = this.$refs

    for (let i = this.obstacleList.length - 1; i >= 0; i--) {
      const obstacle = this.obstacleList[i]
      // 判断游戏是否结束
      const obstacleRect = this.zoomOutBound(obstacleContainer.children[i].getBoundingClientRect())
      const isIntersect = !(
        playerRect.right < obstacleRect.left ||
        playerRect.left > obstacleRect.right ||
        playerRect.top > obstacleRect.bottom ||
        playerRect.bottom < obstacleRect.top
      )
      if (isIntersect) {
        this.over()
        return
      }
      // 判断是否得分
      if (playerRect.left > obstacleRect.right && !obstacle.isScored) {
        obstacle.isScored = true
        this.scoring()
      }
      // 回收障碍物
      if (obstacle.marginLeft < destroyBoundary) {
        this.obstacleList.splice(i, 1)
      }
    }

    const { foodContainer } = this.$refs
    for (let i = this.foodList.length - 1; i >= 0; i--) {
      const food = this.foodList[i]
      // 判断是否得分
      const foodRect = this.zoomOutBound(foodContainer.children[i].getBoundingClientRect())
      const isIntersect = !(
        playerRect.right < foodRect.left ||
        playerRect.left > foodRect.right ||
        playerRect.top > foodRect.bottom ||
        playerRect.bottom < foodRect.top
      )
      if (isIntersect && !food.isScored) {
        food.isScored = true
        this.scoring()
        // 回收食物
        this.foodList.splice(i, 1)
      }
    }
  }

  // 缩小范围
  zoomOutBound(rect: DOMRect) {
    // 由于图片边缘有透明像素，所以缩小一下检测范围
    return {
      top: rect.top + rect.height * 0.1,
      right: rect.right - rect.width * 0.1,
      bottom: rect.bottom - rect.height * 0.1,
      left: rect.left + rect.width * 0.1
    }
  }

  // 计分
  scoring() {
    this.currentScore += 1
  }

  // 游戏结束
  over() {
    this.isPlaying = false
    this.currentScore = 0

    clearInterval(this.gameIntervalId)
    clearInterval(this.generateCloudIntervalId)
    clearInterval(this.generateObstacleIntervalId)
    clearInterval(this.generateFoodIntervalId)

    this.cloudList.splice(0)
    this.obstacleList.splice(0)
    this.foodList.splice(0)

    this.isShowScore = false
    this.isShowTips = true
  }
}
</script>

<style lang="scss" scoped>
.internalGame {
  position: relative;
}

.road {
  width: 200%;
  height: 6px;
  position: absolute;
  bottom: 0px;
  background-image: url('~@/assets/images/game/internal/road.png');
  background-size: 109px;
  background-repeat: repeat-x;
}

.player {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 18%;
  bottom: 0px;
}

.cloudContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;

  .cloud {
    position: absolute;
  }
}

.obstacleContainer {
  width: 100%;
  height: 100%;
  bottom: 0px;
  position: absolute;
  overflow: hidden;

  .obstacle {
    position: absolute;
    bottom: 0px;
  }
}

.foodContainer {
  width: 100%;
  height: 100%;
  bottom: 0px;
  position: absolute;
  overflow: hidden;

  .food {
    position: absolute;
  }
}

.score {
  position: absolute;
  bottom: 30px;
  left: 18%;
  padding: 5px 10px;
  font-size: 18px;
  transform: translateX(-100%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
}

.tips {
  position: absolute;
  bottom: 10px;
  left: 50%;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  transform: translateX(-50%);
}
</style>
