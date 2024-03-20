import Vue from 'vue'
import VueRouter from 'vue-router'
import navigation from './navigation'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Login.vue'),
      meta: {
        title: '登陆',

      },
    },
    {
      path: '/',
      component: () => import('../views/layout/Index.vue'),
      meta: {
        title: '主页 ',
      },
      children: [...navigation],
    },
    {
      path: '/404',
      component: () => import('@/components/error-pages/404.vue'),
      meta: {
        title: '404页面',
      },
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuth = sessionStorage.getItem('isAuth')
  if (isAuth !== 'true') {
    console.log('test')
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    if (to.path === '/login') {
      next('/')
    } else {
      document.title = to.meta.title || '默认标题'
      next()
    }
    
  }
})

export default router
