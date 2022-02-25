import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
