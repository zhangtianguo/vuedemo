<template>
  <div class="home-wrapper">
    <header>我的首页</header>
    <!--
    <router-link to="/Detail">
      <img src="@/assets/timg.jpg" @click="skip()">
    </router-link>-->
    
    <div>
      <mt-swipe class="swipe">
        <mt-swipe-item v-for="(item,index) in dataList" :key="index">
          <img :src="item.thumbnail_pic_s" @click="skip(index)">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav">
      <ul>
        <li><router-link to="/Detail"><img src="@/assets/111.jpg"></router-link></li>
        <li><router-link to="/Detail"><img src="@/assets/111.jpg"></router-link></li>
        <li><router-link to="/Detail"><img src="@/assets/111.jpg"></router-link></li>
        <li><router-link to="/Detail"><img src="@/assets/111.jpg"></router-link></li>
        <li><router-link to="/Detail"><img src="@/assets/111.jpg"></router-link></li>
      </ul>
    </div>
    <div class="item">
      <div class="item_nav">精品推荐</div>
      <ul>
        <li v-for="(item,index) in dataList" :key="index"><router-link to="/Detail"><img :src="item.thumbnail_pic_s"></router-link></li>
      </ul>
    </div>
    <div class="item">
      <div class="item_nav" @click="$router.push('/Detail')">品牌推荐</div>
      <ul>
        <li v-for="(item,index) in dataList" :key="index"><router-link to="/Detail"><img :src="item.thumbnail_pic_s"></router-link></li>
      </ul>
    </div>
    <div class="more">
      <div class="more_nav">更多商品</div>
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <div class="more_img"><router-link to="/Detail"><img :src="item.thumbnail_pic_s"></router-link></div>
          <div class="more_ming">
            <router-link to="/Detail"><p>{{item.title}}</p></router-link>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList:[],
    }
  },
  created(){

  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){
      this.$axiosPost(this.$url.index1).then(res=>{
       
        this.dataList = res.data.articles;


 
      })
    },
    skip(index){
      console.dir(this)
      this.$router.push({path:'/Detail',query:{id: index, name: 'xxx', sex: 'man'}})
    }
  },
}
</script>
<style scoped>
  a {
    color: #42b983;
  }
   .swipe{
    height: 3rem;
  }
  .swipe img{
    width: 100%;
    height: 3rem;
  }
  header{
    width: 100%;
    line-height: 1rem;
    background: rgb(243, 243, 238);
    text-align: center;
    font-size: 0.3rem;
}
.item_nav{
    line-height: 1rem;
    font-size: 0.35rem;
}
.item ul{
    width: 100%;
    height: 2rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}
.item li{
    flex: 1;

}
.item li img{
    width: 100%;
    height: 2rem;
}
.more{
    width: 100%;
    overflow: hidden;
    margin-bottom: 1.1rem;
}
.more_nav{
    line-height: 1rem;
    font-size: 0.35rem;
}
.more ul{
    width: 100%;
    overflow: hidden;
}
.more ul li:nth-child(2n){
    width: 49%;
    height: 4rem;
    float: left;
    margin-bottom: 0.2rem;
}
.more ul li:nth-child(2n+1){
    width: 49%;
    height: 4rem;
    float: right;
    margin-bottom: 0.2rem;
}
.more ul li .more_img{
    width: 100%;
    height: 3rem;
}
.more ul li .more_img img{
    width: 100%;
    height: 3rem;
}
.more ul li .more_ming{
    width: 100%;
    height: 1rem;
}
.more ul li .more_ming p{
    width: 90%;
    padding: 0.1rem;
    text-align: left;
    color: #333;
    font-size: 0.26rem;
    white-space: nowrap; 
    text-overflow: ellipsis; 
    overflow: hidden; 
}
.nav{
  width: 100%;
  height: 2rem;
  overflow: hidden
}
.nav ul{
  width: 100%;
  height: 2rem;
  overflow: hidden
}
.nav ul li{
  width: 20%;
  height: 1.6rem;
  float: left;
  text-align: center;
  margin-top: 0.4rem;
}
.nav ul li img{
  width: 85%;
  border-radius: 50%
}
</style>
