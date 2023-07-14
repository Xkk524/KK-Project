import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 映射关系  path --> compnent
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import("../views/home/Home.vue"),
    },
    {
      path: '/collect',
      component: () => import("../views/collect/Collect.vue"),
    },
    {
      path: '/order',
      component: () => import("../views/order/Order.vue"),
    },
    {
      path: '/message',
      component: () => import("../views/message/Message.vue"),
    },
    {
      path: '/city',
      component: () => import("../views/city/City.vue"),
      meta:{
        hideTabbar:true
      }
    },
    {
      path: '/search',
      component: () => import("../views/search/Search.vue"),
      meta:{
        hideTabbar:true
      }
    },
    {
      path: '/detail/:id',
      component: () => import("../views/detail/Detail.vue"),
      meta:{
        hideTabbar:true
      }
    }
  ]
})

export default router
