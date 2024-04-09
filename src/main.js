import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './csses/basecss.css'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
//将饿了么组件英文改成中文  
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import Http from './service/http'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//把Http挂载到vue的实例上
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.config.globalProperties.$Http = Http;
app.use(store).use(router).use(ElementPlus,{locale}).mount('#app')

