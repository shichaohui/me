import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

export default router
