import { Router, RouteRecordRaw } from 'vue-router'
import { usePermissionStoreOut } from '@/store'
import { cloneDeep } from 'lodash'

export const homeRouter: RouteRecordRaw = {
  path: '/home',
  name: 'home',
  redirect: '/home/trend',
  component: () => import('@/views/home/index.vue'),
  children: [
    {
      path: '/home/trend',
      component: () => import('@/views/trend/index.vue'),
      meta: {
        title: '业务面板',
        icon: 'home',
        role: [0, 1],
        isMenu: true
      }
    },
    {
      path: '/home/log',
      component: () => import('@/views/log/index.vue'),
      meta: {
        title: '日志面板',
        icon: 'clock-circle',
        role: [1],
        isMenu: true
      }
    },
    {
      path: '/home/manage',
      component: () => import('@/views/manage/index.vue'),
      meta: {
        title: '用户面板',
        icon: 'desktop',
        role: [1],
        isMenu: true
      }
    },
    {
      path: '/home/test',
      component: () => import('@/views/test/index.vue'),
      meta: {
        role: [0, 1]
      }
    }
  ]
}
export function initDynamicRoutes (router: Router) {
  const permissionStoreOut = usePermissionStoreOut()
  // 根据二级权限，对路由规则进行动态的添加，
  if (permissionStoreOut.hasDynamicRouter) {
    return false
  }
  const role = parseInt(permissionStoreOut.getRole, 10)
  const dynamicRouter = cloneDeep(homeRouter)
  dynamicRouter.children = homeRouter.children?.filter(item => {
    return (item.meta?.role as number[]).includes(role)
  })
  router.addRoute(dynamicRouter)
  permissionStoreOut.setHasDynamicRouter(true)
  return true
}
