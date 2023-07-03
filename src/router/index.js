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
    }
  ]
})

export default router
