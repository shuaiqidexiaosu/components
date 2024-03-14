import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Login.vue'),
      meta: {
        title: '登陆'
      },
    }, {
      path: '/',
      component: () => import('../views/layout/Index.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/home/Home.vue'),
          meta: {
            title: '主页'
          },
        }, {
          path: 'tools',
          name: 'tools',
          component: () => import('../views/tools/Tools.vue'),
          meta: {
            title: '工具'
          },
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('../views/setting/Setting.vue'),
          meta: {
            title: '设置'
          },
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('../views/mine/Mine.vue'),
          meta: {
            title: '我的'
          },
        },
      ]
    }, {
      path: '/404',
      component: () => import('@/components/error-pages/404.vue'),
      meta: {
        title: '404页面'
      },
    }, {
      path: '*',
      redirect: '/404',
    }
  ]
})

router.beforeEach((to, from, next) => {
  // to 和 from 是将要进入和离开的路由对象  
  // 根据 to.meta.title 来动态改变页面的标题  
  document.title = to.meta.title || '默认标题';
  // 确保调用 next() 来继续路由导航  
  next();
});
export default router;
