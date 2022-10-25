import { createApp } from 'vue'
import App from './App.vue'
import Idux from './idux'
import { createPinia } from 'pinia'
import router from './router'
import '@/common/style/idux.less'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(Idux)
app.use(router)
app.mount('#app')
