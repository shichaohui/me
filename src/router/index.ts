import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Game from '@/pages/game/Game.vue'
import Note from '@/pages/note/Note.vue'

const routes: RouteRecordRaw[] = [
  { name: 'home', path: '/', component: Home },
  { name: 'game', path: '/game', component: Game },
  { name: 'note', path: '/note', component: Note }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
