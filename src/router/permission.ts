import { Router, RouteRecordRaw } from 'vue-router'
import { usePermissionStoreOut } from '@/store'

export const dynamicRouters: RouteRecordRaw[] = [
  {
    path: '/home/trend',
    component: () => import('@/views/trend/index.vue'),
    meta: {
      title: '业务面板',
      icon: 'home',
      role: [0, 1]
    }
  },
  {
    path: '/home/log',
    component: () => import('@/views/log/index.vue'),
    meta: {
      title: '日志面板',
      icon: 'clock-circle',
      role: [1]
    }
  },
  {
    path: '/home/manage',
    component: () => import('@/views/manage/index.vue'),
    meta: {
      title: '用户面板',
      icon: 'desktop',
      role: [1]
    }
  }
]
export function initDynamicRoutes (router: Router) {
  const permissionStoreOut = usePermissionStoreOut()
  // 根据二级权限，对路由规则进行动态的添加，
  const currentRoutes = router.getRoutes()
  const rightList = (JSON.parse(permissionStoreOut.getRightList)) as {path: string}[]
  const dynamicRoutersActual = [] as RouteRecordRaw[]
  rightList.forEach(item => {
    dynamicRouters.forEach(element => {
      if (item.path === element.path) {
        dynamicRoutersActual.push(element)
      }
    })
  })
  const homeRouter = currentRoutes.filter(item => {
    return item.path === '/home'
  })[0]
  if (permissionStoreOut.hasDynamicRouter) {
    return false
  }
  homeRouter.children.length = 0
  for (const item of dynamicRoutersActual) {
    homeRouter.children?.push(item)
  }
  router.addRoute(homeRouter)
  permissionStoreOut.setHasDynamicRouter(true)
  return true
}
