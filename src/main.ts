import { createApp } from 'vue'
import App from './App.vue'
import Idux from './idux'
import router from './router'
const app = createApp(App)
app.use(Idux)
app.use(router)
app.mount('#app')
