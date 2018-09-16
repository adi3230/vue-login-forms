import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/Login.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/components/SignUp.vue')
    },
    {
        path: '/helloWorld',
        name: 'helloworld',
        component: () => import('@/components/HelloWorld.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/communication',
        name: 'communication',
        component: () => import('@/components/NumberComponent.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: () => import('@/components/ShoppingComponent.vue'),
        meta: { requiresAuth: true }
    }
]

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('helloWorld')
    else next()
  })

export default router