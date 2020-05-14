import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

const router = new Router({
        mode: "history",
        routes: [
            {
                path: '/',
                name: 'login',
                meta: {
                    title: '登录',
                },
                component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
            },
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页',
                },
                component: () => import(/* webpackChunkName: "about" */ '@/views/layout/layout.vue')
            },
            {
                path: '/test',
                name: 'test',
                meta: {
                    title: 'test',
                },
                component: () => import(/* webpackChunkName: "about" */ '@/views/test')
            },
            {
                path: '/401',
                name: 'error_401',
                meta: {
                    hideInMenu: true
                },
                component: () => import('@/views/error-page/401.vue')
            },
            {
                path: '/500',
                name: 'error_500',
                meta: {
                    hideInMenu: true
                },
                component: () => import('@/views/error-page/500.vue')
            },
            {
                path: '*',
                name: 'error_404',
                meta: {
                    hideInMenu: true,
                    title:"您访问的网页出错啦！- 404",
                    icon:"@/assets/images/error-page/cute_girl.ico"
                },
                component: () => import('@/views/error-page/404/404_cute.vue')
            },
        ]
    }
)

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router;