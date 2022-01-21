import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login.vue'
import register from '@/components/register'

import home from '@/views/home'
import about from '@/components/about'
import main from '@/components/main'
import store from '@/components/store'
import information from '@/components/information'
import product from '@/components/product'
import item from '@/components/item'
import article from '@/components/article'
import cart from '@/components/cart'

import admin from '@/views/admin'
import welcome from '@/components/admin/welcome'
import carousel from '@/components/admin/carousel'
import briefInfo from '@/components/admin/briefInfo'
import productAdmin from '@/components/admin/product'
import productEdit from '@/components/admin/productEdit'
import storeAdmin from '@/components/admin/storeAdmin'
import info from '@/components/admin/info'
import infoEdit from '@/components/admin/infoEdit'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        children: [{
                path: '',
                component: main
            },
            {
                path: '/about',
                component: about
            },
            {
                path: '/information',
                component: information
            },
            {
                path: '/store',
                component: store
            },
            {
                path: '/product',
                component: product
            },
            {
                path: '/item/:id',
                name: 'item',
                component: item
            },
            {
                path: '/article/:id',
                name: 'article',
                component: article
            },
            {
                path: '/cart',
                component: cart
            }
        ]
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register,
    },
    {
        path: '/admin',
        component: admin,
        children: [{
                path: '',
                component: welcome,
            },
            {
                path: '/welcome',
                component: welcome,
            },
            {
                path: '/carousel',
                component: carousel,
            },
            {
                path: '/beiefinfo',
                component: briefInfo,
            },
            {
                path: '/productAdmin',
                component: productAdmin,
            },
            {
                path: '/productEdit/:id',
                name: 'productEdit',
                component: productEdit,
            },
            {
                path: '/storeAdmin',
                component: storeAdmin,
            },
            {
                path: '/info',
                component: info,
            },
            {
                path: '/infoEdit/:id',
                name: 'infoEdit',
                component: infoEdit,
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

//路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     return next();
//   }
//   const tokenStr = window.sessionStorage.getItem('token');
//   if(!tokenStr){
//     return next('/login')
//   }
//   next()
// })

export default router