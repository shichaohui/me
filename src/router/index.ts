import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Index from '@/pages/index/index.vue'
import Games from '@/pages/game/index.vue'
import Notes from '@/pages/note/index.vue'

const routes: RouteRecordRaw[] = [
  { name: 'index', path: '/', component: Index },
  { name: 'games', path: '/games', component: Games },
  { name: 'notes', path: '/notes', component: Notes },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
