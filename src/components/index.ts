import type { App } from 'vue'
import IconSvg from './common/IconSvg/index.vue'
import SysTipInput from './common/SysTipInput/index.vue'
const install = (app: App): void => {
  app.component('IconSvg', IconSvg)
  app.component('SysTipInput', SysTipInput)
}

export default { install }
