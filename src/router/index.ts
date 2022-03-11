import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/pages/index/index.vue'),
  },
  {
    name: 'game',
    path: '/game',
    component: () => import('@/pages/game/index.vue'),
  },
  {
    name: 'note',
    path: '/note',
    component: () => import('@/pages/note/index.vue'),
  },
  {
    name: 'works',
    path: '/works',
    component: () => import('@/pages/works/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
