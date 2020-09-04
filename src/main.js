import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerComponents } from './components'

import './style'

const app = createApp(App)

registerComponents(app)

app.use(router)

app.mount('#app')
