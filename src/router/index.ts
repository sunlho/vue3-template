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
