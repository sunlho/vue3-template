import { createRouter, createWebHashHistory } from "vue-router"
import type { RouterOptions } from "vue-router"

const publicRoutes = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
  },
]

const router = createRouter(<RouterOptions>{
  history: createWebHashHistory(),
  routes: [...publicRoutes],
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || ""
  next()
})

export default router
