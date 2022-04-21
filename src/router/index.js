import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login.vue'
import regist from '@/components/regist'

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
import orderForm from '@/components/admin/orderForm'

import user from '@/components/user'
import userInfo from '@/components/userInfo'
import userOrder from '@/components/userOrder'

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
            },
            {
                path: '/regist',
                name: 'regist',
                component: regist
            },
            {
                path: '/login',
                component: login
            },
            {
                path: '/user',
                component: user,
                redirect: '/userinfo',
                children: [{
                    path: '/userinfo',
                    component: userInfo
                }, {
                    path: '/userOrder',
                    component: userOrder
                }]
            }
        ]
    },
    {
        path: '/admin',
        component: admin,
        children: [{
                path: '',
                component: welcome
            },
            {
                path: '/welcome',
                component: welcome
            },
            {
                path: '/carousel',
                component: carousel
            },
            {
                path: '/beiefinfo',
                component: briefInfo
            },
            {
                path: '/productAdmin',
                component: productAdmin
            },
            {
                path: '/productEdit/:id',
                name: 'productEdit',
                component: productEdit
            },
            {
                path: '/storeAdmin',
                component: storeAdmin
            },
            {
                path: '/info',
                component: info
            },
            {
                path: '/infoEdit/:id',
                name: 'infoEdit',
                component: infoEdit
            },
            {
                path: '/orderForm',
                name: 'orderForm',
                component: orderForm
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

// 路由导航守卫
router.beforeEach((to, form, next) => {
    if (to.path === '/admin' && window.localStorage.getItem("Role") !== "Admin") {
        next({ path: "/home" })
    } else {
        next()
    }
})

export default router