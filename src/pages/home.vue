<template>
  <div class="content">
    <div class="profileBox">
      <img class="avatar" :src="profile.avatar" />
      <div class="profile">
        <div>
          <div class="name">
            {{ profile.name }}
          </div>
          <div>{{ profile.slogan }}</div>
        </div>
        <div>
          <div>
            <svg-icon name="email" />
            {{ profile.email }}
          </div>
          <div>
            <svg-icon name="wechat" />
            {{ profile.wechat }}
          </div>
          <div>
            <svg-icon name="location" />
            {{ profile.city }}
          </div>
        </div>
      </div>
    </div>
    <div class="labelBox">
      <span v-for="label in labelList" :key="label" class="label">
        {{ label }}
      </span>
    </div>
    <div class="projectBox">
      <div
        v-for="project in projectList"
        :key="project.name"
        class="project"
        @click="showProject(project.url)"
      >
        <img :src="project.image" :style="{ background: project.imageBg }" />
        <div class="overlay">{{ project.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarImg from '@/assets/images/avatar.jpg'
import githubImg from '@/assets/images/github.svg'
import gameImg from '@/assets/images/game.svg'
import brvahImg from '@/assets/images/brvah.png'
import jianShuImg from '@/assets/images/jianshu.svg'
import jueJinImg from '@/assets/images/juejin.svg'

export default {
  name: 'HomePage',
  props: {},
  data() {
    return {
      profile: {
        name: '石朝辉（StoneHui）',
        email: '464206200@qq.com',
        wechat: 'StoneHui_',
        city: '广东广州',
        avatar: avatarImg,
        slogan: '做程序员，而不是 Android 程序员！'
      },
      labelList: [
        'Android',
        'Kotlin',
        'Flutter',
        'Cocos Creator',
        '微信小游戏',
        '微信小程序',
        'Taro',
        'Vue.js'
      ],
      projectList: [
        {
          name: 'GitHub',
          image: githubImg,
          imageBg: 'transparent',
          url: 'https://github.com/shichaohui'
        },
        {
          name: '游戏',
          image: gameImg,
          imageBg: 'transparent',
          url: '/games'
        },
        {
          name: 'BRVAH',
          image: brvahImg,
          imageBg: 'transparent',
          url: 'https://github.com/CymChad/BaseRecyclerViewAdapterHelper'
        },
        {
          name: '简书',
          image: jianShuImg,
          imageBg: 'transparent',
          url: 'https://www.jianshu.com/u/2cbd13c2ceb8'
        },
        {
          name: '掘金',
          image: jueJinImg,
          imageBg: '#0061ff',
          url: 'https://juejin.im/user/57df619f5bbb50005e6c072a'
        }
      ]
    }
  },
  methods: {
    showProject(url) {
      if (/^https?:\/\/.+/.test(url)) {
        window.location.href = url
      } else {
        this.$router.push({ path: url })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  position: absolute;
  top: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profileBox {
  display: flex;
  justify-content: center;

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .profile {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    font-size: 14px;
    margin-left: 15px;

    .icon {
      width: 12px;
      height: 12px;
    }

    .name {
      font-size: 20px;
      font-weight: 500;
    }
  }
}

.labelBox {
  margin-top: 30px;

  .label {
    font-size: 14px;
    background-color: #f2f4f4;
    border: 1px solid currentColor;
    border-radius: 10px;
    box-shadow: 0px 1px 1px 1px currentColor;
    padding: 0px 8px;
    margin: 0 5px;
  }
}

.projectBox {
  margin-top: 30px;
  display: flex;
  cursor: pointer;

  .project {
    width: 66px;
    height: 66px;
    margin: 0 10px;
    padding: 3px;
    text-decoration: none;
    position: relative;
    background-color: white;
    border-radius: 50%;
    box-shadow: 2px 2px 5px 0px currentColor;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    .overlay {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      top: 3px;
      left: 3px;
      font-weight: 500;
      color: white;
      background-color: rgba($color: black, $alpha: 0.6);
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.3s ease;
    }

    &:hover .overlay {
      transform: scale(1);
      transition: transform 0.3s ease;
    }
  }
}
</style>
