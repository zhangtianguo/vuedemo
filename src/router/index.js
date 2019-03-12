import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '@/components/Home'
// 我的个人中心
import Mine from '@/components/Mine'
// 商品详情
import Detail from '@/components/Detail'
// 购物
import Ship from '@/components/Ship'
// 分享
import Share from '@/components/Share'
//父亲传值
import Fathe from '@/components/Fathe'
//儿子传值
import Chil from '@/components/Chil'


// 模拟父子通讯 传值
import father from '@/components/father'

import children from '@/components/child'
//全局注册组件 这样好处是每一个组件都可以引入到该组件
Vue.component(children.name, children)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Share',
      name: 'Share',
      component: Share
    },
    {
      path: '/Ship',
      name: 'Ship',
      component: Ship
    },
    {
      path: '/father',
      name: 'father',
      component: father
    },
    {
      path: '/Fathe',
      name: 'Fathe',
      component: Fathe
    },
    {
      path: '/Chil',
      name: 'Chil',
      component: Chil
    },
  ]
})
