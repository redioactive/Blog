//core
import {createApp} from 'vue'
import store from '@/stores';
import App from './App.vue'
import router from './router';
import Wujie from 'wujie-vue3'
import SvgIcon from '@/components/SvgIcon/index.vue'
import {loadDirectives} from "@/directives";
//css
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "@/styles/index.scss"
//引入字体
import "../../common/assets/iconfonts/iconfont.js"

const app = createApp(App)

app.use(router).use(store).use(Wujie)

app.component("SvgIcon", SvgIcon)

/**
 * 加载自定义指令
 * 使用webstorm的情况下会提示Unrecognized Vue directive并不影响功能
 * */
loadDirectives(app)

app.mount('#app')


