import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/home.vue'
import GamesPage from '@/pages/games.vue'
import NotesPage from '@/pages/notes.vue'

const routes = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'games', path: '/games', component: GamesPage },
  { name: 'notes', path: '/notes', component: NotesPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: '/'
})

export default router
