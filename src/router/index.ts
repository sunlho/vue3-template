import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouterOptions } from 'vue-router'
import config from '@/config/index'
import Layout from '@/layout/index.vue'

const publicRoutes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/demo',
    children: [
      {
        path: 'demo',
        name: 'demo',
        redirect: '/demo/dog',
        children: [
          {
            path: 'dog',
            name: 'dog',
            component: () => import('@/pages/demo/dog/index.vue'),
            meta: {
              title: '获得一只狗狗'
            }
          },
          {
            path: 'music',
            name: 'music',
            component: () => import('@/pages/demo/music/index.vue'),
            meta: {
              title: '自动播放音乐'
            }
          }
        ]
      },
      {
        path: 'index',
        name: 'index',
        component: () => import('@/pages/index/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/login/index.vue'),
        meta: {
          title: '登陆'
        }
      }
    ]
  }
]

const router = createRouter(<RouterOptions>{
  history: createWebHashHistory(),
  routes: [...publicRoutes]
})

router.beforeEach((to, from, next) => {
  document.title = <string>to?.meta?.title || config.title
  next()
})

export default router
