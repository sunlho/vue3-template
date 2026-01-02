import { createRouter, createWebHashHistory } from "vue-router"
import type { RouterOptions } from "vue-router"

const publicRoutes = [
  {
    path: "/",
    redirect: "/animate",
  },
  {
    path: "/animate",
    component: () => import("@/views/animate/index.vue"),
  },
  {
    path: "/description",
    component: () => import("@/views/description/index.vue"),
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
