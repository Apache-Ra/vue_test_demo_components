import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/**
 *  配置滚动条的位置
 *  通过这个这个属性（是个函数），可以让应用像浏览器的原生表现那样，在按下 后退/前进 按钮时，简单地让页面滚动到顶部或原来的位置。
 */
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}
/**
 *  路由配置
 *  @mode: 配置路由模式（"hash" | "history" | "abstract"）
 *  @base: 如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
 *  @linkActiveClass: 点击触发的class
 *  @scrollBehavior: 配置滚动条的位置
 */
const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  likActiveClass: 'link-active',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require.ensure([], () => resolve(require('@/view/home')), 'home'),
      meta: {title: '主页', requireAuth: false}
    }, {
      path: '/about',
      name: 'about',
      component: resolve => require.ensure([], () => resolve(require('@/view/about')), 'home'),
      meta: {title: '我的', requireAuth: false}
    }, {
      path: '/check',
      name: 'check',
      component: resolve => require.ensure([], () => resolve(require('@/view/check')), 'home'),
      meta: {title: '我的', requireAuth: false}
    }, {
      path: '/upload',
      name: 'upload',
      component: resolve => require.ensure([], () => resolve(require('@/view/upload')), 'home'),
      meta: {title: 'upload', requireAuth: false}
    }, {
      path: '/table',
      name: 'table',
      component: resolve => require.ensure([], () => resolve(require('@/view/table')), 'home'),
      meta: {title: 'table', requireAuth: false}
    }, {
      path: '/purview',
      name: 'purview',
      component: resolve => require.ensure([], () => resolve(require('@/view/purview')), 'home'),
      meta: {title: '权限', requireAuth: false}
    }, {
      path: '/swiper',
      name: 'swiper',
      component: resolve => require.ensure([], () => resolve(require('@/view/swiper/index')), 'home'),
      meta: {title: 'table', requireAuth: false}
    }, {
      path: '/index',
      name: 'index',
      component: resolve => require.ensure([], () => resolve(require('@/view/index')), 'home'),
      meta: {title: 'index', requireAuth: false}
    }, {
      path: '/unlock',
      name: 'unlock',
      component: resolve => require.ensure([], () => resolve(require('@/view/unlock/index')), 'home'),
      meta: {title: 'index', requireAuth: false}
    }, {
      path: '/rtsp',
      name: 'rtsp',
      component: resolve => require.ensure([], () => resolve(require('@/view/video/rtsp')), 'home'),
      meta: {title: 'rtsp', requireAuth: false}
    }, {
      path: '/line',
      name: 'line',
      component: resolve => require.ensure([], () => resolve(require('@/view/chart/lineChart')), 'home'),
      meta: {title: 'line', requireAuth: false}
    }, {
      path: '/pie',
      name: 'pie',
      component: resolve => require.ensure([], () => resolve(require('@/view/chart/pieChart')), 'home'),
      meta: {title: 'pie', requireAuth: false}
    }, {
      path: '/scatter',
      name: 'scatter',
      component: resolve => require.ensure([], () => resolve(require('@/view/scatter/index')), 'home'),
      meta: {title: 'scatter', requireAuth: false}
    }, {
      path: '/tag',
      name: 'tag',
      component: resolve => require.ensure([], () => resolve(require('@/view/tagCloud/index')), 'home'),
      meta: {title: 'tag', requireAuth: false}
    }, {
      path: '/answer',
      name: 'answer',
      component: resolve => require.ensure([], () => resolve(require('@/view/answer/index')), 'home'),
      meta: {title: '答题卡', requireAuth: false}
    }
  ]
})
/**
 *  修改网站title的值
 */
router.afterEach((transition) => {
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})
/**
 * 路由拦截器
 * 1.判断该路由是否需要登录权限
 * 2.通过vuex state获取当前的token是否存在
 * 3.将跳转的路由path作为参数，登录成功后跳转到该路由
 */
router.beforeEach((to, from, next) => {
  next()
})
/**
 * 路由输出
 */
export default router
