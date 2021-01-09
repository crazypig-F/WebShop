import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../components/index'
import AllProduct from '../components/allproducts'
import Personal from '../components/personal'
import Cart from '../components/cart'
import Login from '../components/login'
import Register from '../components/register'
import Detail from '../components/detail'
import Paycheck from '../components/paycheck'
import MyOlder from '../components/myolder'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/all/:category',
    component: AllProduct,
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
    path: '/detail/:itemId',
    component: Detail
  },
  {
    path: '/paycheck/:orderId',
    component: Paycheck
  },
  {
    path: '/myolder',
    component: MyOlder
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});

// 全局前置导航钩子 beforeEach
// 会在路由即将改变前触发
router.beforeEach((to, from, next) => {
  let isLogin = window.localStorage.getItem('userid')
  if (isLogin) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      alert('没有访问权限或登录已过期，请重新登录！')
      next('/login')
    }
  }
})
export default router
