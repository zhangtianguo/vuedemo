<template>
<div>
  {{test1}}<br>
  {{test4}}<br>
  {{params.id}}<br>
  {{userInfo}}<br>
</div>
</template>

<script>
// vuex 提供的直接映射state 语法糖的方法
import {mapState} from 'vuex'
export default {
  data(){
    return {
      test1: '',
      test4: '',
      test6: '',
      params:{}
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  mounted() {
    this.test1 = this.$global.test1
    this.test4 = localStorage.test4
    var {id,name,sex} = this.$route.query
    this.params = {id,name,sex}
  },
}
</script>




<style scoped>
a {
  color: #42b983;
}
</style>
