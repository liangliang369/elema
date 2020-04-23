import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'amfe-flexible'
import './plugins/vant.config'
import './assets/css/reset.css'
import './assets/css/border.css'
import './static/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
