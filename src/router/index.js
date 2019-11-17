import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import mainRouter from '../views/mainpage/router'

if (!window.VueRouter) Vue.use(VueRouter)
// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/admin',
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  
  ...mainRouter,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/components/layout/Test.vue')
  // },
]

const router = new VueRouter({
  routes
})

// 判断是否需要登录权限 以及登录状态
router.beforeEach((to, from, next) => {
  // let user = Vue.tools.getStorage("user");
  // if (Vue.tools.getStorage('token') && user) {
  //   store.state.user = user;
  //   store.state.isLogin = true;
  // }

  // if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
  //   if (store.getters.getisLogin) {
  //     next();
  //   } else {
  //     Vue.toast("请登录后操作");
  //     next({
  //       path: '/user',
  //       query: {
  //         redirect: to.fullPath
  //       }
  //     })
  //   }
  // } else {
  //   next()
  // }

  next()
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
})

export default router
