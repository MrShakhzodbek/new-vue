import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateForm.vue')
    },
    {
      path: '/update',
      name: 'update',
      component: () => import('../views/UpdateForm.vue')
    }
  ]
})

export default router
