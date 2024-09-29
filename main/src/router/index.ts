import { createRouter, createWebHistory } from 'vue-router'

import Layouts from '@/Layouts/index.vue'

/**
 * 常驻路由
 * 除了redirect/403/404等隐藏页面，其他页面建议设置 Name属性
 * */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/redirect',
      component:Layouts,
      meta:{
        hidden:true
      },
      children:[
        {
          path:":path(.*)",
          component:()=>import("@/views/redirect/index.vue")
        }
      ]
    },
    {
      path: "/403",
      component: () => import("@/views/error-page/403.vue"),
      meta: {
        hidden: true
      }
    },
    {
      path: "/404",
      component: () => import("@/views/error-page/404.vue"),
      meta: {
        hidden: true
      },
      alias: "/:pathMatch(.*)*"
    },
    {
      path:"/",
      component:Layouts,
      redirect:"/dashboard",
      children:[
        {
          path:"dashboard",
          component:()=>import("@/views/dashboard/index.vue"),
          name:"Dashboard",
          meta:{
            title:"首页",
            affix:true
          }
        }
      ]
    }
  ]
})

export default router
