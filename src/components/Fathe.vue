<template>
  <div>
    <button @click="global()">全局变量传值</button>
    <button @click="fatherToChild()">父子通信传值1 props</button>
    <button @click="vModel()">父子通信传值2 v-model</button>
    <button @click="localCache()">本地缓存传值</button>
    <button @click="vuexTo()">利用vuex传值</button>
    <button @click="skip()">页面跳转传值</button>
    <button @click="provideInject()">提供/注入传值</button>
    <!--这个是子组件-->
    <!--<children ref="children" v-model="vModalVal" :content="childrenVal"> </children>-->

    <div>
      {{this.injectVal}}
    </div>
  </div>
</template>

<script>
export default {
  // 注入的值
  inject: ['xhfVal'], 
  data(){
    return {
      // 这些都是希望传给其他页面
      // 或者目标组件需要传入的变量, 等等一切数据格式的值
      // 全局变量的值
      globalVal: '', 
      // 父子通信变量1的值 
      childrenVal: '',
      // 父子通信变量2的值 
      vModalVal: '',
      // 本地缓存的值
      localCacheVal: '', 
      // vuex的值
      vuexToVal: '',
      // 跳转的值
      skipVal: '',
      // 注入的值
      injectVal: ''
    }
  },
  methods: {
    // 全局变量传值
    global(){
      // 使用前提/场景：提前在vue的原型上添加$global全局变量
      this.globalVal = 'test1 需要传的内容'
      this.$global.test1 = this.globalVal
    },
    // 父子通信传值1 借助props
    fatherToChild(){
      // 使用前提/场景：构成父子关系的组件
      this.childrenVal = '网络异常'
      this.$refs.children.show()
    },
    // 父子通信传值2 借助v-model
    vModel(){
      // 使用前提/场景：构成父子关系的组件
      this.vModalVal = '没有了'
      this.$refs.children.show()
    },
    // 本地缓存传值
    localCache(){
      // 使用前提/场景： 无限制
      localStorage.test4 = 'test4 需要传的内容'
    },
    // 利用vuex传值
    vuexTo(){
      // 使用前提/场景： 正确实例化new vuex.Store()
      this.$store.commit('updateUserInfo2', 'test4')
      // 或者
      // this.$store.dispatch('UPDATEUSERINFO2', 'test4')
    },
    // 页面跳转传值
    skip(){
      // 使用前提/场景：列表跳转详情
      this.$router.push({path:'/Chil',query:{ id: '5', name: 'xxx', sex: 'man'}})
    },
    // 提供/注入传值
    provideInject(){
      // 使用前提/场景： 根组件事先提供变量或者方法, 然后其他页面才可以进行注入
      this.injectVal = this.xhfVal 
    }
  },
}
  
</script>




<style scoped>

</style>
