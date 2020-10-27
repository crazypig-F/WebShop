import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../components/index'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
