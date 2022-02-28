import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Index from '@/pages/index/index.vue'
import Game from '@/pages/game/index.vue'
import Note from '@/pages/note/index.vue'
import Works from '@/pages/works/index.vue'

const routes: RouteRecordRaw[] = [
  { name: 'index', path: '/', component: Index },
  { name: 'game', path: '/game', component: Game },
  { name: 'note', path: '/note', component: Note },
  { name: 'works', path: '/works', component: Works },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
