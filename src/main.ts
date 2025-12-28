import { createApp } from "vue"
import App from "./App.vue"

import router from "./router/index"
import pinia from "./store/index"

import "./style/index.scss"
import "virtual:uno.css"
import "animate.css/animate.min.css"

const app = createApp(App)
app.use(router).use(pinia).mount("#app")
