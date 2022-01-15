import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login.vue'
import home from '@/views/home'
import about from '@/components/about'
import main from '@/components/main'
import store from '@/components/store'
import information from '@/components/information'
import product from '@/components/product'
import item from '@/components/item'
import article from '@/components/article'
import cart from '@/components/cart'

import manage from '@/views/manage'
import mwelcome from '@/components/manage/mwelcome'
import mcarousel from '@/components/manage/mcarousel'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/home', component: home,
    children: [
      {
        path: '', component: main
      },
      {
        path: '/about', component: about
      },
      {
        path: '/information', component: information
      },
      {
        path: '/store', component: store
      },
      {
        path: '/product', component: product
      },
      {
        path: '/item/:id', name: 'item', component: item
      },
      {
        path: '/article/:id', name: 'article', component: article
      },
      {
        path: '/cart', component: cart
      }
    ]
  },
  {
    path: '/login', component: login
  },
  {
    path: '/manage', component: manage,
    children: [
      {
        path: '', component: mwelcome,
      },
      {
        path: '/welcome', component: mwelcome,
      },
      {
        path: '/carousel', component: mcarousel,
      },
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
