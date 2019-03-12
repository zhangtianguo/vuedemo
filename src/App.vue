<template>
  <div id="app">
    <section>
    <router-view/>
    </section>
    <footer v-show="isShowFooter==true">
      <router-link to="/Home" >首页</router-link>
      <router-link to="/Mine">我的</router-link>
      <router-link to="/Share">分享</router-link>
      <router-link to="/Ship">购物</router-link>
      <router-link to="/father">父亲</router-link>
      <router-link to="/Fathe">父亲1</router-link>
      <router-link to="/Chil">儿子</router-link>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    provide: {
      xhfVal: '睁大你的眼睛张天国在这里'
    },
    data(){
      return{
        isShowFooter: true, //默认显示脚步
      }
    },
    created(){
      //以防 用户刷新页面的时候vuex的状态还原
      // this.$store.commit('init')
    },
    watch:{
      '$route'(val){
        if (val.path === '/Detail') {
          this.isShowFooter = false
        } else {
          this.isShowFooter = true
        }
      }
    }
  }
</script>

<style>
  #app {
    text-align: center;
    color: #2c3e50;
    font-size: .5rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
  }
  footer{
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    text-align: center;
    bottom: 0;
    width: 100%;
    line-height: 1rem;
    border-top: 1px solid #c9c9c9;
    background: #fff;
  }
  footer>a{
    flex: 1;
    font-size: 0.3rem;
    color: #333;
  }
  .router-link-active{
    background: red;
    color: #fff!important;
  }
  button{
    font-size: .5rem;
    margin: 0 .3rem .3rem 0;
  }
</style>
