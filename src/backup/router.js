import Vue from 'vue'
import Router from 'vue-router'
import NProgress from "nprogress"
import "nprogress/nprogress.css"


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
                //redirect:"/test",
                meta: {
                    title: '首页',

                },
                component: () => import(/* webpackChunkName: "about" */ '@/views/layout/home.vue'),
                // children:[{
                //     path:'/about',
                //     name:'about',
                //     component: () => import(/* webpackChunkName: "about" */ '@/views/About')
                // }]
            },
            {
                path: '/about',
                name: 'about',
                component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
                meta: {
                    title: 'about',
                },
                children: [
                    {
                        path: "/test",
                        name: "test",
                        component: () => import(/* webpackChunkName: "about" */ '@/views/test')
                    },
                    {
                        path: "/about/2",
                        name: "about2",
                        component: () => import(/* webpackChunkName: "about" */ '@/views/About2')
                    },
                    {
                        path: "/about/3",
                        name: "about3",
                        component: () => import(/* webpackChunkName: "about" */ '@/views/About3')
                    },
                ]
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
                    title: "您访问的网页出错啦！- 404",
                    icon: "@/assets/images/error-page/cute_girl.ico"
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
    NProgress.star()
    next()
})

router.afterEach(() => {
    NProgress.done()
})
export default router;