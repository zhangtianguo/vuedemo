<template>
<div>
  <div class="hello">
    我的中心页面
  </div>
  <div @click="open()">点击进入</div>
  <!--引入弹窗组件-->
  <children ref="children" @isShowDialogEvent="close()" title="提示">
       <!-- 
    <div slot="default-content">
        网络异常
    </div>
    <div slot="default-footer">
        <div @click="close()">知道了</div>
    </div>-->
  </children>
</div>
</template>

<script>
export default {
  data(){
      return{
          msg: ''
      }
  },
  mounted(){
      
  },
  methods: {
    open(){
        this.$refs.children.show()
    },
    close(){
        this.$toast('你点击了确定按钮')
        this.$refs.children.hide()
    }
  },
}
</script>




<style scoped>
a {
  color: #42b983;
}
</style>
