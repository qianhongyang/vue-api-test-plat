import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

const router = new Router({
        mode:"history",
        routes: [
            {
                path: '/',
                name: 'login',
                component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
            },
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: "about" */ '@/views/layout/layout.vue')
            },
        ]
    }
)
export default router;