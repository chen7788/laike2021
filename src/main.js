import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/index.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Button, Icon, Tabs, Progress, Pagination, Modal, Breadcrumb } from 'ant-design-vue'
Vue.use(Icon)
Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)
Vue.use(Button)
Vue.use(Progress)
Vue.use(Pagination)
Vue.use(Modal)
Vue.use(Breadcrumb)
Vue.config.productionTip = false
// Vue.prototype.HOST = '/api'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
