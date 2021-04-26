import Vue from 'vue'
import VueRouter from 'vue-router'
import _import from './lazyRouter'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  }, {
    path: '/home',
    name: 'home',
    meta: { title: '首页', keepAlive: true, isBack: false, isBottom: true },
    component: _import('home/index')
  }, {
    path: '/find',
    name: 'find',
    meta: { title: '发现', keepAlive: true, isBack: false, isBottom: true },
    component: _import('find/index')
  }, {
    path: '/today',
    name: 'today',
    meta: { title: '今日', keepAlive: true, isBack: false, isBottom: true },
    component: _import('today/index')
  }, {
    path: '/mine',
    name: 'mine',
    meta: { title: '我的', keepAlive: true, isBack: false, isBottom: true },
    component: _import('mine/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
