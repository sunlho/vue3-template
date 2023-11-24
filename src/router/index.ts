import { createRouter, createWebHashHistory } from "vue-router"
import type { RouterOptions } from "vue-router"

const publicRoutes = [
  {
    path: "/",
    redirect: "/decorators",
    children: [
      {
        path: "music",
        name: "music",
        component: () => import("@/views/music/index.vue"),
        meta: {
          title: "音乐播放",
        },
      },
      {
        path: "prizeDraw",
        name: "prizeDraw",
        component: () => import("@/views/prizeDraw"),
        meta: {
          title: "抽奖",
        },
      },
      {
        path: "wx",
        name: "wx",
        component: () => import("@/views/wx/index.vue"),
        meta: {
          title: "微信接口",
        },
      },
      {
        path: "icon",
        name: "icon",
        component: () => import("@/views/icon/index.vue"),
        meta: {
          title: "图标",
        },
      },
    ],
  },
]

const router = createRouter(<RouterOptions>{
  history: createWebHashHistory(),
  routes: [...publicRoutes],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
