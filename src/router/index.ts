import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { initDynamicRoutes } from './permission'
// import { usePermissionStoreOut } from '@/store/permission'
const routes: RouteRecordRaw[] = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/register',
  component: () => import('@/views/register/index.vue')
},
{
  path: '/404',
  name: '404',
  component: () => import('@/views/common/404.vue')
},
{
  path: '/:pathMatch(.*)',
  redirect: '/404'
}
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      next('/login')
    } else {
      const isDynamic = initDynamicRoutes(router)
      if (isDynamic) {
        next({
          path: to.path, // 动态添加一个新的路由
          replace: true // 重定向,为了让刚刚添加的路由规则生效
        })
        return
      }
      if (to.path === '/404' && to.redirectedFrom) {
        next({
          path: to.redirectedFrom?.fullPath,
          replace: true
        })
        return
      }
      next()
    }
  }
})
export default router
