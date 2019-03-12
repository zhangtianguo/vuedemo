<template>
  <div class="hello">
    <h1>{{ $route.query.id }}商品详情</h1>
    <div v-for="item in dataList">{{item.title}}</div>
    <div>
      {{params}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '商品详情',
      dataList: [],
      params:{ 
        
      }
    }
  },
  mounted() {
    // 注意 $route 和 $router 的区别, 前者是对象  通过路由的 query 进行传值
    let {id , name, sex} =  this.$route.query
    this.params = {id , name, sex}

    console.log(this.params)

    this.getData()
    // this.getData2()
  },
  methods: {
    getData(){
      this.$axiosPost(this.$url.index1).then(res=>{
        this.dataList = res.data.articles
      })
    },
    // getData2(){
    //   this.$axiosPost(this.$url.index2).then(res=>{
    //     this.dataList = res.data.articles
    //   })
    // },
  }
 
}
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
