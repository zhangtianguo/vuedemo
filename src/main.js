// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/rem'
import './api/all'
import './styles/index.css'
import 'mint-ui/lib/style.css'; 
import Mint from 'mint-ui'
import './utils/api'
import './utils/mock'
import store from './store'
import global from './utils/const'
Vue.use(global)
Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
