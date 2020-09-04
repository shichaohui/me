import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import SvgIcon from './components/SvgIcon.vue'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.use(router)

app.mount('#app')
