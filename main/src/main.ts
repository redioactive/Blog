
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Wujie from 'wujie-vue3'
import '../../common/styles/reset.css'

import SvgIcon from '@/components/SvgIcon/index.vue'

//引入字体
import "../../common/assets/iconfonts/iconfont.js"
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("SvgIcon",SvgIcon)

app.use(Wujie)

app.mount('#app')


