import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/article',
    children: [
      {
        path: 'article',
        component: () => import('@/views/article')
      },
      {
        path: 'collect',
        component: () => import('@/views/collect')
      },
      {
        path: 'like',
        component: () => import('@/views/like')
      },
      {
        path: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/detail',
    component: () => import('@/views/detail')
  }
]

const router = new VueRouter({
  routes
})

export default router
