import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/pages/home.vue'
import GamesPage from '@/pages/games.vue'
import NotesPage from '@/pages/notes.vue'

const routes: RouteRecordRaw[] = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'games', path: '/games', component: GamesPage },
  { name: 'notes', path: '/notes', component: NotesPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
