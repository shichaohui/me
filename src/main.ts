import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from './components'

import './style'

const app = createApp(App)

app.use(components).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
