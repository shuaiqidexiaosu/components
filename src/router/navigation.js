export default [
    {
        path: '',
        name: 'home',
        component: () => import('../views/home/Home.vue'),
        meta: {
            title: '主页',
            requireAuth: true
        },
    }, {
        path: 'tools',
        name: 'tools',
        component: () => import('../views/tools/Tools.vue'),
        meta: {
            title: '工具',
            requireAuth: true
        },
    },
    {
        path: 'setting',
        name: 'setting',
        component: () => import('../views/setting/Setting.vue'),
        meta: {
            title: '设置',
            requireAuth: true
        },
    },
    {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/mine/Mine.vue'),
        meta: {
            title: '我的',
            requireAuth: true
        },
    },
]