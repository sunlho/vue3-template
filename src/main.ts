import { createApp } from 'vue'
import App from './App.vue'

import Router from './router/index'
import pinia from './store/index'

import './style.scss'
import 'vant/es/toast/style'

const app = createApp(App)
app.use(Router).use(pinia).mount('#app')
