import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Index from '@/pages/index/Index.vue'
import Games from '@/pages/game/Games.vue'
import Notes from '@/pages/note/Notes.vue'

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
