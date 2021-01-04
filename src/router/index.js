import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../components/index'
import AllProduct from '../components/allproducts'
import Personal from '../components/personal'
import Cart from '../components/cart'
import Login from '../components/login'
import Register from '../components/register'
import Detail from '../components/detail'

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
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
