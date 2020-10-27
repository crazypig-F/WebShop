import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../components/index'
import AllProduct from '../components/allproducts'
import Personal from '../components/personal'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/all',
    component: AllProduct
  },
  {
    path: '/personal',
    component: Personal
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
