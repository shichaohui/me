import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('@/views/index/index.vue'),
    },
    {
      name: 'game',
      path: '/game',
      component: () => import('@/views/game/index.vue'),
    },
    {
      name: 'note',
      path: '/note',
      component: () => import('@/views/note/index.vue'),
    },
    {
      name: 'works',
      path: '/works',
      component: () => import('@/views/works/index.vue'),
    },
  ],
})

export default router
