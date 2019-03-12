
<template>
  <div class="shipping-wrapper">
    <div class="list_ming">
          <div class="one">商品信息</div>
          <div class="two">商品单价</div>
          <div class="two">商品数量</div>
          <div class="two">商品总金额</div>
          <div class="two">编辑</div>
    </div>
    <ul class="shopping">
          <li v-for="item in productList">
              <div class="six">

                    <!-- 单选商品 -->
                    <input type="checkbox" @click="select(item)">
              </div>
              <div class="one">
                    <div class="img">
                        <a href="">
                              <img :src="item.productImage">
                        </a>
                    </div>
                    <div class="wen">
                        <p><a href=""> {{ item.productName.substr(0,18) }} ... </a></p>
                    </div>
              </div>
              <div class="two"> {{ item.productPrice }} </div>
              <div class="three">
                    <div class="three_1">
                        <button type="button" @click="addNum(item,-1)">-</button>
                        <input type="text" value="0" disabled v-model="item.productQuentity">
                        <button type="button" @click="addNum(item,1)">+</button>
                    </div>
              </div>
              <div class="four"> {{ item.productPrice * item.productQuentity }} </div>
              <div class="five" @click="delshan(item)">
                    删除
              </div>
          </li>
    </ul>
    <div class="suan">

          <!-- 全选商品 -->
          <input type="checkbox" @click="checkAll(true)">
          <span>全选</span>
          <div>
              <span>合计：<em> {{ totalMoney }} </em></span>
              <a href="">结算</a>
          </div>
    </div>

    <div class="alert" v-if="delFlag">
          <div class="ceng">
              <div class="one">你确定要删除这件商品吗？</div>
              <div class="two">
                    <button type="button" @click="delque">确定</button>
                    <button type="button" @click="delFlag = false">取消</button>
              </div>
          </div>
    </div>
</div>
</template>

<script>
import {goods} from '../utils/cart.js'
export default {
  data () {
    return {
      productList: [],
      totalMoney: 0,
      checkAllFlag: false,
      delFlag: false,
      curProduct: ""
    }
  },
  mounted() {
     this.cartView();
  },
  methods: {
    // 渲染页面
    cartView() {
         this.productList = goods.result.list
    },

    // 单件商品的加减
    addNum(item,may) {
      if (may > 0) {
          item.productQuentity++;
      } else {
          item.productQuentity--;
          if (item.productQuentity < 1) {
                item.productQuentity = 1;
          }
      }
      this.Allprice()
    },

    // 单选商品
    select(item) {
      if (typeof item.checked == "underfined") {
          this.$set(item,"checked",true);
      } else {
          item.checked = !item.checked;
      }
      this.Allprice()
    },

    // 全选商品
    checkAll(flag) {
      this.checkAllFlag = flag;
      var _this = this;
      this.productList.forEach(function(item,index) {
          if (typeof item.checked == 'undefined') {
                _this.$set(item,"checked",_this.checkAllFlag);
          } else {
                item.checked = _this.checkAllFlag;
          }
      });
      this.Allprice();
    },

    // 总金额的核算
    Allprice() {
      var _this = this;
      _this.totalMoney = 0;
      this.productList.forEach(function(item,index) {
          if (item.checked) {
                _this.totalMoney += item.productPrice * item.productQuentity;
          }
      })
    },

    // 删除当前选择的商品
    delshan(item) {
      this.delFlag = true;
      this.curProduct = item;
    },
    delque() {
      var index = this.productList.indexOf(this.curProduct);
      this.productList.splice(index,1);
      this.delFlag = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

a:hover{
     text-decoration: none;
}
.shipping-wrapper{
     width: 1200px;
     height: 600px;
     overflow: hidden;
     margin: 30px auto;
     background: #fff;
     position: relative;
}
.list_ming{
     width: 1200px;
     height: 60px;
     overflow: hidden;
     background: #666;
}
.list_ming>.one{
     width: 600px;
     height: 60px;
     overflow: hidden;
     float: left;
     text-align: center;
     line-height: 60px;
     font-size: 16px;
     color: #fff;
}
.list_ming>.two{
     width: 150px;
     height: 60px;
     overflow: hidden;
     float: left;
     text-align: center;
     line-height: 60px;
     font-size: 16px;
     color: #fff;
}
.shopping{
     width: 1198px;
     height: auto;
     border: 1px solid #f43c3c;
}
.shopping>li{
     width: 1200px;
     height: 60px;
     overflow: hidden;
}
.shopping>li>.one{
     width: 540px;
     height: 60px;
     overflow: hidden;
     float: left;
}
.shopping>li>.one>.img{
     width: 40px;
     height: 40px;
     float: left;
     margin-top: 10px;
}
.shopping>li>.one>.img img{
     width: 40px;
     height: 40px;
}
.shopping>li>.one>.wen{
     height: 40px;
     float: left;
     margin-left: 20px;
     margin-top: 10px;
}
.shopping>li>.one>.wen>p:nth-child(1){
     height: 20px;
}
.shopping>li>.one>.wen>p:nth-child(1) a{
     display: block;
     height: 20px;
     font-size: 14px;
     color: #333;
}

.shopping>li>.two{
     width: 150px;
     height: 60px;
     overflow: hidden;
     float: left;
     line-height: 60px;
     text-align: center;
     font-size: 16px;
     color: #333;
}
.shopping>li>.three{
     width: 150px;
     height: 60px;
     overflow: hidden;
     float: left;
}
.shopping>li>.three>.three_1{
     width: 150px;
     height: 60px;
     overflow: hidden;
     text-align:center;
     line-height: 60px;
}
.shopping>li>.three>.three_1>button{
     width: 30px;
     height: 40px;
     border: none;
     background: #fff;
     font-size: 18px;
     color: #000;
}
.shopping>li>.three>.three_1>input{
     width: 60px;
     height: 40px;
     border: none;
     background: #fff;
     text-align:center;
     font-size: 16px;
     color: #000;
}

.shopping>li>.four{
     width: 150px;
     height: 60px;
     overflow: hidden;
     float: left;
     line-height: 60px;
     text-align: center;
     font-size: 16px;
     color: #f43c3c;
}
.shopping>li>.five{
     width: 150px;
     height: 60px;
     overflow: hidden;
     float: left;
     line-height: 60px;
     text-align: center;
     font-size: 16px;
     color: blue;
}
.shopping>li>.six{
     width: 60px;
     height: 60px;
     overflow: hidden;
     float: left;
     line-height: 60px;
     text-align: center;
}

.suan{
     width: 1200px;
     height: 60px;
     line-height: 60px;
}
.suan>input:nth-child(1){
     margin-left: 15px;
}

.suan>span:nth-child(2){
     margin-left: 15px;
     font-size: 14px;
     color: #333;
}
.suan>div{
     height: 60px;
     line-height: 60px;
     float: right;
}
.suan>div>span{
     font-size: 16px;
     color: #333;
}
.suan>div>span em{
     font-size: 16px;
     color: #f43c3c;
}
.suan>div a{
     display: block;
     width: 80px;
     height: 60px;
     line-height: 60px;
     float: right;
     font-size: 16px;
     color: #333;
     text-align: center;
     background: #f43c3c;
     color: #fff;
     margin-left: 30px;
}

.alert{
     width: 1200px;
     height: 600px;
     background: rgba(30,30,30,0.8);
     position: absolute;
     top: 0;
     overflow: hidden;
}
.alert .ceng{
     width: 400px;
     height: 300px;
     background: #fff;
     margin: 100px auto;
     border-radius: 10px;
     overflow: hidden;
}
.alert .ceng>.one{
     width: 400px;
     height: 240px;
     text-align: center;
     line-height: 200px;
     font-size: 16px;
     color: #333;
     border-bottom: 1px solid #aaa;
}
.alert .ceng>.two{
     width: 400px;
     height: 60px;
}
.alert .ceng>.two>button{
     width: 200px;
     height: 60px;
     border: none;
     float: left;
     font-size: 16px;
     color: #333;
}
.alert .ceng>.two>button:nth-child(1){
     border-right: 1px solid #aaa;
}
</style>
