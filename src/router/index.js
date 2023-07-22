import { createRouter, createWebHistory } from 'vue-router'
import SwipeView from '@/views/SwipeView.vue'
import RecapView from '@/views/RecapView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'swipe-page',
      component: SwipeView
    },
    {
      path: '/recap',
      name: 'recap-page',
      component: RecapView
    },
    {
      path: '/auth/login',
      name: 'login-page',
      component: LoginView
    }
  ]
})

export default router
