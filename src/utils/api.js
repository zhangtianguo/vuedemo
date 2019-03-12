import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$axiosPost = axios.post
Vue.prototype.$axiosGet = axios.get
