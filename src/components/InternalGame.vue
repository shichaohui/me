<template>
  <div class="relative w-full h-full">
    <div ref="road" class="game-road" :style="{ marginLeft: `${roadMarginLeft}px` }" />
    <div ref="obstacleContainer" class="absolute w-full h-full overflow-hidden">
      <img
        class="absolute bottom-0"
        src="@/assets/images/game/internal/obstacle.gif"
        v-for="obstacle in obstacleList"
        :key="obstacle.id"
        :style="{
          height: `${obstacle.height}px`,
          marginLeft: `${obstacle.marginLeft}px`,
        }"
      />
    </div>
    <div ref="foodContainer" class="absolute bottom-0 w-full h-full overflow-hidden">
      <IconFood
        class="absolute"
        v-for="food in foodList"
        :key="food.id"
        :style="{
          width: `${food.size}px`,
          height: `${food.size}px`,
          marginLeft: `${food.marginLeft}px`,
          bottom: `${food.bottom}px`,
        }"
      />
    </div>
    <img
      ref="player"
      class="absolute bottom-0 left-[18%] w-12 h-12 -scale-x-[1]"
      src="@/assets/images/game/internal/player.gif"
      :style="{ bottom: `${playerBottom}px` }"
    />
    <p v-if="isShowScore" class="tips bottom-8 left-[18%] -translate-x-full text-lg">
      得分：{{ currentScore }}
    </p>
    <p v-if="isShowTips" class="tips bottom-4 left-[50%] translate-x-[-50%] text-base">
      按空格键开始游戏
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import IconFood from '@/assets/images/game/internal/food.svg?component'

const road = ref<HTMLElement>()
const obstacleContainer = ref<HTMLElement>()
const foodContainer = ref<HTMLElement>()
const player = ref<HTMLElement>()

const isPlaying = ref(false)
const isShowScore = ref(false)
const isShowTips = ref(true)

const currentScore = ref(0)

const jumpHeight = ref(0)

const isJumping = ref(false)

// 移动速度
const speed = 5

// 计时器 id
let gameIntervalId: NodeJS.Timeout | null = null
let generateObstacleIntervalId: NodeJS.Timeout | null = null
let generateFoodIntervalId: NodeJS.Timeout | null = null

// 玩家的位置
const playerBottom = ref(0)
// 路面的位置
const roadMarginLeft = ref(0)

// 障碍物列表
const obstacleList = ref<
  {
    id: string
    height: number
    marginLeft: number
    isScored: boolean
  }[]
>([])
// 食物列表
const foodList = ref<
  {
    id: string
    size: number
    marginLeft: number
    bottom: number
    isScored: boolean
  }[]
>([])

onMounted(() => {
  jumpHeight.value = player.value!.clientHeight * 2.5

  document.onkeydown = (event) => {
    const keyNum = window.event ? event.keyCode : event.which
    // 空格
    if (keyNum == 32) {
      !isPlaying.value ? start() : jump()
    }
  }
})

// 开始游戏
function start() {
  isPlaying.value = true

  gameIntervalId = setInterval(gameInterval, 16)
  generateObstacleIntervalId = setTimeout(generateObstacle, 0)
  generateFoodIntervalId = setTimeout(generateFood, 5000)

  isShowScore.value = true
  isShowTips.value = false
}

// 游戏间隔刷新函数
function gameInterval() {
  moveRoad()
  moveObstacle()
  moveFood()
  checkGameState()
}

// 对路执行移动
function moveRoad() {
  let newMarginLeft = parseInt(road.value!.style.marginLeft) - speed
  if (Math.abs(newMarginLeft) > road.value!.clientWidth / 2) {
    newMarginLeft = 0
  }
  roadMarginLeft.value = newMarginLeft
}

// 对障碍物执行移动
function moveObstacle() {
  for (let i = 0; i < obstacleList.value.length; i++) {
    obstacleList.value[i].marginLeft -= speed
  }
}

// 对食物执行移动
function moveFood() {
  for (let i = 0; i < foodList.value.length; i++) {
    foodList.value[i].marginLeft -= speed
  }
}

// 生成障碍物
function generateObstacle() {
  const factor = ((Math.random() * currentScore.value) / 10) * 0.1 + 1
  obstacleList.value.push({
    id: Math.random().toString(),
    height: factor * player.value!.clientHeight,
    marginLeft: obstacleContainer.value!.clientWidth,
    isScored: false,
  })
  // 最少 2000ms 最多 (1000+2000)ms 生成一个障碍物
  generateObstacleIntervalId = setTimeout(generateObstacle, Math.random() * 1000 + 2000)
}

// 生成食物
function generateFood() {
  foodList.value.push({
    id: Math.random().toString(),
    size: (player.value!.clientHeight / 3) * 2,
    marginLeft: foodContainer.value!.clientWidth,
    bottom: Math.random() * jumpHeight.value,
    isScored: false,
  })
  // 最少 5000ms 最多 (5000+5000)ms 生成一个食物
  generateFoodIntervalId = setTimeout(generateFood, Math.random() * 5000 + 5000)
}

// 跳跃
function jump() {
  if (isJumping.value) {
    return
  }
  isJumping.value = true
  const originBottom = parseInt(player.value!.style.bottom)
  let time = 0
  const jumpIntervalId = setInterval(() => {
    const newBottom = Math.sin((time += 0.06)) * jumpHeight.value
    if (newBottom > originBottom) {
      playerBottom.value = newBottom
    } else {
      playerBottom.value = originBottom
      clearInterval(jumpIntervalId)
      isJumping.value = false
    }
  }, 16)
}

// 检查游戏状态
function checkGameState() {
  const destroyBoundary = -200

  const playerRect = zoomOutBound(player.value!.getBoundingClientRect())

  for (let i = obstacleList.value.length - 1; i >= 0; i--) {
    const obstacle = obstacleList.value[i]
    // 判断游戏是否结束
    const obstacleRect = zoomOutBound(obstacleContainer.value!.children[i].getBoundingClientRect())
    const isIntersect = !(
      playerRect.right < obstacleRect.left ||
      playerRect.left > obstacleRect.right ||
      playerRect.top > obstacleRect.bottom ||
      playerRect.bottom < obstacleRect.top
    )
    if (isIntersect) {
      over()
      return
    }
    // 判断是否得分
    if (playerRect.left > obstacleRect.right && !obstacle.isScored) {
      obstacle.isScored = true
      scoring()
    }
    // 回收障碍物
    if (obstacle.marginLeft < destroyBoundary) {
      obstacleList.value.splice(i, 1)
    }
  }

  for (let i = foodList.value.length - 1; i >= 0; i--) {
    const food = foodList.value[i]
    // 判断是否得分
    const foodRect = zoomOutBound(foodContainer.value!.children[i].getBoundingClientRect())
    const isIntersect = !(
      playerRect.right < foodRect.left ||
      playerRect.left > foodRect.right ||
      playerRect.top > foodRect.bottom ||
      playerRect.bottom < foodRect.top
    )
    if (isIntersect && !food.isScored) {
      food.isScored = true
      scoring()
      // 回收食物
      foodList.value.splice(i, 1)
    }
  }
}

// 缩小范围
function zoomOutBound(rect: DOMRect) {
  // 由于图片边缘有透明像素，所以缩小一下检测范围
  return {
    top: rect.top + rect.height * 0.1,
    right: rect.right - rect.width * 0.1,
    bottom: rect.bottom - rect.height * 0.1,
    left: rect.left + rect.width * 0.1,
  }
}

// 计分
function scoring() {
  currentScore.value += 1
}

// 游戏结束
function over() {
  isPlaying.value = false
  currentScore.value = 0

  gameIntervalId && clearInterval(gameIntervalId)
  generateObstacleIntervalId && clearInterval(generateObstacleIntervalId)
  generateFoodIntervalId && clearInterval(generateFoodIntervalId)

  obstacleList.value.splice(0)
  foodList.value.splice(0)

  isShowScore.value = false
  isShowTips.value = true
}
</script>

<style scoped>
.game-road {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 6px;
  background-image: url('@/assets/images/game/internal/road.png');
  background-repeat: repeat-x;
  background-size: 109px;
}

.tips {
  position: absolute;
  padding: 5px 10px;
  background-color: rgb(255 255 255 / 50%);
  border-radius: 5px;
}
</style>
