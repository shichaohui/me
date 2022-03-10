import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import 'virtual:svg-icons-register'
import '@/styles/base.scss'
import '@/styles/element-plus.scss'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
