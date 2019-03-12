import Vue from  'vue'
import Vuex from 'vuex'
import state from './state' // 数据状态树  相当于view 视图  对应的 各种状态， 显隐 ，true/false , 布尔运算.... 状态进行记录 
import mutations from './mutaions'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
console.log(store)
export default store