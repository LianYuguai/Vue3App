import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // 我们先定义一个最基本的 message 数据
  state: () => ({
    name: '',
    age: '',
    sex: ''
  }),
  getters: {
    getUserName (state) {
      return state.name
    }
  },
  actions: {
    getUserInfoAPI: () => {
      console.log('getUserInfoAPI')
    }
  }
})

export const useStoreOut = function () {
  return useStore
}
