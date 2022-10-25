import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permission', {
  // 我们先定义一个最基本的 message 数据
  state: () => ({
    role: localStorage.getItem('role'),
    // role是当前的角色
    // 这里用sessionStorage储存到本地是防止网页刷新后菜单不显示的问题
    rightList: localStorage.getItem('rightList') || '[]',
    hasDynamicRouter: false
  }),
  getters: {
    getRole (state) {
      return state.role || ''
    },
    getRightList (state) {
      return state.rightList || ''
    }
  },
  actions: {
    setRole (data: string) {
      this.role = data
      localStorage.setItem('role', data)
    },
    setRightList (data: any) {
      this.rightList = data
      localStorage.setItem('rightList', data)
    },
    setHasDynamicRouter (data: boolean) {
      this.hasDynamicRouter = data
    },
    clear () {
      localStorage.removeItem('rightList')
      localStorage.removeItem('role')
      localStorage.removeItem('token')
      this.hasDynamicRouter = false
    }
  }
})

export const usePermissionStoreOut = function () {
  return usePermissionStore()
}
