import { createRouter, createWebHistory } from 'vue-router'

import Layouts from '@/components/Layouts/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:Layouts,
      meta:{
        path:"dashboard",
        component:() => import("@/views/dashboard/index.vue"),
        title:"首页",
        affix:true
      }
    },
    {
      path:"/403",
      component:() =>import("@/views/error-page/403.vue"),
      meta:{
        hidden:true
      }
    },
    {
      path:"/404",
      component:()=>import("@/views/error-page/404.vue"),
      meta:{
        hidden:true
      }
    },
  ]
})

export default router
