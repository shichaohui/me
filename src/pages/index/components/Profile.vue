<template>
  <div class="row itemCenter">
    <img class="avatar" :src="avatar" />
    <div class="column">
      <div>
        <h1 class="fullName">{{ fullName }}</h1>
        <h2 class="nickname">（{{ nickname }}）</h2>
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
import { defineComponent } from 'vue'
import avatarImg from '@/assets/images/avatar.png'

export default defineComponent({
  setup() {
    return {
      fullName: '石朝辉',
      nickname: 'StoneHui',
      email: '464206200@qq.com',
      wechat: 'StoneHui_',
      city: '广东广州',
      avatar: avatarImg
    }
  }
})
</script>

<style scoped lang="scss">
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid silver;
  margin-right: 15px;
  box-shadow: 0 0 5px silver inset;
}

.fullName {
  display: inline;
  font-size: 22px;
  font-weight: 500;
  color: #ffffff;
  font-weight: normal;
}

.nickname {
  display: inline;
  font-size: 18px;
  color: #e6e6e6;
  font-weight: normal;
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
