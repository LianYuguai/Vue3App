import { createApp } from 'vue'
import App from './App.vue'
import Idux from './idux'
import { createPinia } from 'pinia'
import router from './router'
import commonComponents from '@/components'
import 'virtual:svg-icons-register'
import '@/common/styles/index.less'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(Idux)
app.use(router)
app.use(commonComponents)
app.mount('#app')
