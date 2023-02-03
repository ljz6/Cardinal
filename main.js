import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
if (process.env.NODE_ENV === 'development') {
	//开发环境
	// #ifdef H5
	// 如需跨域参照以下h5跨域配置
	Vue.prototype.$baseUrl = "/api"
	// #endif
	// #ifdef APP-PLUS ||MP
	Vue.prototype.$baseUrl = "http://112.74.58.254:8080"
	// #endif
} else {
	Vue.prototype.$baseUrl = "http://112.74.58.254:8080"
}
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif