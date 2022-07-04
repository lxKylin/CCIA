import { createApp } from 'vue'
import App from './App.vue'

// css初始化
import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import 'element-plus/dist/index.css'
// 注册element-plus所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import store from './store'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(store)
app.mount('#app')
