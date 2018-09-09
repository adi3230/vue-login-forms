import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/Login.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('@/components/SignUp.vue')
    },
    {
        path: '/helloWorld',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: '*',
        redirect: '/login'
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router