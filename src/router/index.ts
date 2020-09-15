import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/home/home.vue'
import GamePage from '@/pages/game/game.vue'
import NotePage from '@/pages/note/note.vue'

const routes: RouteRecordRaw[] = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'game', path: '/game', component: GamePage },
  { name: 'note', path: '/note', component: NotePage }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
