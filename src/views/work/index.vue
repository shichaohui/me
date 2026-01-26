<template>
  <el-container>
    <el-aside :width="isMobile ? '64px' : '200px'">
      <el-menu
        class="h-full"
        :default-active="activeWork.id"
        :collapse="isMobile"
        @select="handleSelectMenuItem"
      >
        <el-menu-item v-for="work in workListWithOthers" :index="work.id">
          <img class="w-6 h-6 rounded-full border border-(--el-border-color)" :src="work.logo" />
          <span class="ml-2">{{ work.name }}</span>
        </el-menu-item>
      </el-menu>
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

// 是否移动端
const isMobile = device.isMobile()

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
