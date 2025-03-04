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
    },
    {
      path:"/link",
      meta:{
        title:"外链",
        svgIcon:"link"
      },
      children:[
        {
          path:"https://github.com/redioactive",
          component:()=>{},
          name:"github",
          meta:{
            svgIcon:"icon-github"
          }
        },
        {
          path:"",
          component:()=>{},
          name:"Rss",
          meta:{
            svgIcon:"icon-rss"
          }
        },
        {
          path:"",
          component:() => {},
          name:"SiteMap",
          meta:{
            svgIcon:"icon-sitemap"
          }
        },
        {
          path:"",
          component:() => {},
          name:"Email",
          meta:{
            svgIcon:"icon-email2"
          }
        },
        {
          path:"",
          component:() => {},
          name:"BiliBili",
          meta:{
            svgIcon: "icon-Bilibili"
          }
        },
        {
          path:"",
          component:() => {},
          name:"NetEaseCloud",
          meta:{
            svgIcon:"icon-netease-cloud"
          }
        },
        {
          path:"",
          component:() => {},
          name:"知识星球",
          meta:{
            svgIcon:"icon-tubiaozhizuomoban"
          }
        },
        {
          path:"",
          component:() => {},
          name:"ZhiHu",
          meta:{
            svgIcon:"icon-zhihu"
          }
        },
        {
          path:"",
          component:() => {},
          name:"Wechat",
          meta:{
            svgIcon: "icon-wechat-"
          }
        },
      ]
    }
  ]
})

export default router
