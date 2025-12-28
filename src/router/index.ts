import { createRouter, createWebHashHistory } from "vue-router"
import type { RouterOptions } from "vue-router"

const publicRoutes = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/animate",
    component: () => import("@/views/animate/index.vue"),
  },
]

const router = createRouter(<RouterOptions>{
  history: createWebHashHistory(),
  routes: [...publicRoutes],
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
