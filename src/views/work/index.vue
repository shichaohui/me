<template>
  <el-container>
    <el-aside class="relative w-auto overflow-visible">
      <el-menu
        class="h-full"
        :default-active="activeWork.id"
        :collapse="isMenuCollapse"
        @select="handleSelectMenuItem"
      >
        <el-menu-item v-for="work in workListWithOthers" :index="work.id">
          <img class="w-6 h-6 rounded-full border border-(--el-border-color)" :src="work.logo" />
          <span class="ml-2">{{ work.name }}</span>
        </el-menu-item>
      </el-menu>
      <div
        class="absolute top-5 right-0 translate-x-[40%] bg-(--el-bg-color) border rounded-full flex px-0.5 py-1 cursor-pointer"
        @click="isMenuCollapse = !isMenuCollapse"
      >
        <el-icon v-if="isMenuCollapse"><IconEpArrowRight /></el-icon>
        <el-icon v-else><IconEpArrowLeft /></el-icon>
      </div>
    </el-aside>
    <el-main ref="workContent">
      <OthersWork v-if="activeWork.id === othersId" />
      <WorkDetail v-else :work="activeWork" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { uniqueId } from 'lodash'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoOthers from '@/assets/images/work/others.png'
import { workList } from '@/datas/work'
import device from '@/utils/device'
import OthersWork from './OthersWork.vue'
import WorkDetail from './WorkDetail.vue'

// 解析路由参数
const router = useRouter()
const { id } = router.currentRoute.value.query

// 是否折叠菜单
const isMenuCollapse = ref(device.isMobile())

// 其他作品 id
const othersId = uniqueId()

// 作品列表，添加“其他”分类
const workListWithOthers = ref([
  ...workList,
  {
    id: othersId,
    name: '其他',
    logo: logoOthers,
    desc: '',
    features: [],
    technologyList: [],
    screenshotList: [],
    types: [],
    codeUrl: '',
    url: '',
  },
])

// 选择的菜单
const activeWork = ref(
  workListWithOthers.value.find((i) => i.id === id) || workListWithOthers.value[0],
)

// 作品内容节点
const workContent = ref()

// 更新选中的菜单项
function handleSelectMenuItem(id: string) {
  const item = workListWithOthers.value.find((item) => item.id === id)
  if (!item) {
    return
  }
  activeWork.value = item
  workContent.value.$el.scrollTop = 0
}
</script>

<style scoped></style>
