<template>
  <div class="hello">
    我的分享页面 
   
    {{userInfo}}
    <button @click="reset()">提交</button>
    <button @click="reset2()">提交2</button>

    <template v-if="+isTabIndex === 1">
      <li v-for="(item,index) in dataList" :key="index">
        <div class="more_img"><router-link to="/Detail"><img :src="item.thumbnail_pic_s"></router-link></div>
        <div class="more_ming">
          <router-link to="/Detail"><p>{{item.title}}</p></router-link>
        </div>
      </li>
    </template>

  </div>
</template>

<script>
import {mapState} from 'vuex'  //mapState 实际上是  state的映射
export default {
  data () {
    return {
      isShow: true,
      isTabIndex: "1",
      dataList: [],
      // dataList2: [], //这是通过数组的map方法 重新构造新数组, 工作中会碰到后台给你的数据格式并不是你想要的数据格式， 这是理当使用该方法 
      // dataList3: [], //这里同样是借助数组的map方法, 并且借助es5的  Object.assign() 对对象进行浅拷贝， 然后返回新的数组
      dataList4: [], //对后台返回的数据进行过滤操作， 然后返回新的数组
      // dataList5: [], //对后台返回的数据选中目标对象
      // dataList6: [], //多个接口返回 进行数据合并, 类似 es5的 concat 拼接
      // dataList7: [], 
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo
    })
  },
  mounted() {
    // var arr1 = [1,134,314,1234,2]
    // var arr2 = [132,12,34,123,4213]
    // var arr = [...arr1, ...arr2]
    // console.log(arr)

    // var obj1 = {name: 'xhf', sex: 'man'}
    // var obj2 = {name: 'xhf2', sex: 'man2', year: '23'}
    // var obj = {...obj1, ...obj2}
    // console.log(obj)

    // let { b, f} = {a: 'xx', b: 'bbb',  d:'ccc'}
    // console.log(b) //从一个对象中，直接取出对应键名的值
    // console.log(f) //从一个对象中，直接取出对应键名的值  没有即为 undefined

    // let  aa = '3'  
    // let  bb =  3
    // console.log(+aa===bb)    // +aa 表示自动将字符串数值  转为 number类型,  类似parseInt() 
    // console.log(aa===bb)
    this.getData()
  },
  methods: {
    reset(){
      //提交updateUserInfo事件给mutations处理state
      this.$store.commit('updateUserInfo', 'tianguo')
    },
    // reset2(){
    //   //派发UPDATEUSERINFO2事件给mutations处理state
    //   this.$store.dispatch('UPDATEUSERINFO2', 'tianguo2')
    // },
    getData(){
      this.$axiosPost(this.$url.index1).then(res=>{ 

        this.dataList = res.data.articles
        // this.dataList2 = res.data.articles.map(el=>({  // 从原数据中既帅选了或者更改我们想要的数据，又可以添加原数据中没有的数据，还不影响原数据库
        //   title: 'xhf', // 这个相当于覆盖后台给的title这个字段值
        //   data: el.date, // 这个是后台给的字段
        //   test: 'xhftest' ,// 这个是自己单独新添加的一个字段
        // }))

        // this.dataList3 = res.data.articles.map(el=>(  // 从原数据中可以更改我们想要的数据，还可以添加原数据中没有的数据，但是更新了原数据库
        //   Object.assign(el, {
        //     title: 'xhf', // 这个相当于覆盖后台给的title这个字段值
        //     data: el.date, // 这个是后台给的字段
        //     test: 'xhftest' // 这个是自己单独新添加的一个字段
        //   })
        // ))

        this.dataList4 = res.data.articles.filter(el=>el.author_name='石艳') //通过title字段过滤数组
        
        // this.dataList5 = res.data.articles.findIndex(el=>el.author_name === "熊涛") //找到数组叫"熊涛"的索引， 常常配合添加和删除等业务使用
        // this.dataList6 = [...this.dataList4, ...this.dataList2]

        // this.dataList7 = res.data.articles.filter(el=>el.title).join("#") //常常出现在 对 数据进行批量操作的时候， 前端需要拼接指定格式的字符串给后台进行解析，形如： "id=532453245#id=13241234#id=341234"
      
        console.log(this.dataList)
        // console.log(this.dataList2)
        // console.log(this.dataList3)
        console.log(this.dataList4)
        // console.log(this.dataList5)
        // console.log(this.dataList6)
        // console.log(this.dataList7)

      })


     
    },
    skip(index){
      this.$router.push({path:'/Detail',query:{id: index}})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

a {
  color: #42b983;
}
</style>
