<template>
  <div class="row itemCenter">
    <img class="avatar" :src="avatar" />
    <div class="column">
      <div>
        <span class="fullName">{{ fullName }}</span>
        <span class="nickname">（{{ nickname }}）</span>
      </div>
      <div class="item">
        <svg-icon class="icon" name="email" />
        <span class="text">{{ email }}</span>
      </div>
      <div class="item">
        <svg-icon class="icon" name="wechat" />
        <span class="text">{{ wechat }}</span>
      </div>
      <div class="item">
        <svg-icon class="icon" name="location" />
        <span class="text">{{ city }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import avatarImg from '@/assets/images/avatar.jpg'

@Options({})
export default class Index extends Vue {
  fullName = '石朝辉'
  nickname = 'StoneHui'
  email = '464206200@qq.com'
  wechat = 'StoneHui_'
  city = '广东广州'
  avatar = avatarImg
}
</script>

<style scoped lang="scss">
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid silver;
  margin-right: 15px;
}

.fullName {
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
}

.nickname {
  font-size: 18px;
  color: #e6e6e6;
}

.item {
  color: #ffffff;
  font-size: 14px;

  .icon {
    width: 12px;
    height: 12px;
  }

  .text {
    margin-left: 5px;
  }
}
</style>
