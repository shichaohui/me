import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import Index from '@/pages/index/Index.vue'
import GameList from '@/pages/game/GameList.vue'
import NoteList from '@/pages/note/NoteList.vue'

const routes: RouteRecordRaw[] = [
  { name: 'index', path: '/', component: Index },
  { name: 'gameList', path: '/game', component: GameList },
  { name: 'noteList', path: '/note', component: NoteList }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
