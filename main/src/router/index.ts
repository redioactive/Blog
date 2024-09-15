import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:()=>import("@/views/dashboard/index.vue")
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
    }
  ]
})

export default router
