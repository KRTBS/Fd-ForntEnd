import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login.vue'
import home from '@/views/home'
import about from '@/views/about'
import store from '@/views/store'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: login },
  { path: '/home', component: home, },
  { path: '/about', component: about },
  { path: '/store', component: store }
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
