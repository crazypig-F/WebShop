<template>
    <div class="body">
        <Header></Header>
        <div class="outer9">
            <div class="inter1">
                <h1>购物车</h1>
            </div>
            <div class="inter2">
                <div class="inter21">
                    <input type="checkbox" class="checkAll" :checked = isAllChecked @click="checkall"><span class="s1">全选</span>
                    <span class="s2">商品名称</span><span class="s3">单价</span>
                    <span class="count">数量</span><span class="total">小计</span><span class="del">操作</span>
                </div>
                <div class="inter22">
                    <ul>
                        <li v-for="item in items" :key="item.book.bookId">
                            <input type="checkbox" class="check" :checked = item.isChecked @click=check(item)><img :src=item.book.bookPoster alt="">
                            <span class="title">{{item.book.bookName}}</span>
                            <span class="item-menu">
                                <span class="price">¥{{item.book.bookPrice}}</span>
                                <span class="count-button">
                                    <input type="button" value="-" class="sub" @click="sub(item)"/>
                                    <span class="count">{{item.goodsnum}}</span>
                                    <input type="button" value="+" class="add" @click="add(item)">
                                </span>
                                <span class="total">¥{{item.book.bookPrice*item.goodsnum}}</span>

                                <span class="del" @click=deleteItem(item)>删除</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="inter23">
                    <div class="picture">
                        <img src="images/购物车.png" alt="">
                    </div>
                    <p>您的购物车还没有商品，快去挑选心爱的商品吧！</p>
                    <a href=""><span>去逛逛</span></a>
                </div>
            </div>
            <div class="inter3">
                <div class="inter31">
                    <div class="last">
                        <router-link to='/paycheck' tag="a">确认结算</router-link>
                    </div>
                    <input type="checkbox" class="checkAll" :checked = isAllChecked @click="checkall"><span class="s1">全选</span>
                    <span class="ss1" @click=deleteSelectItems>删除</span>
                    <div class="foot">
                        已选<span class="totalCount">{{totalcount}}</span>件
                        合计(不含运费) : <span class="totalPrice">¥{{totalprice}}</span>元<br>
                        <span class="ss3">已优惠 : <span class="ss4"> ¥0</span></span>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./header"
import Footer from "./footer"
import axios from "axios"
export default {
  components: {
    Header,
    Footer,
  },
  data: function() {
      return {
          isAllChecked : false,
          totalcount : 0,
          totalprice : 0,
          items: [],
          selectItems: []
      }
  },
  methods : {
      add (item) {
          item.goodsnum ++;
          if (item.isChecked) {
              this.totalprice += item.book.bookPrice
          }
      },
      sub (item) {
          if (item.goodsnum > 1) {
              item.goodsnum--;
              if (item.isChecked) {
              this.totalprice -= item.book.bookPrice
          }
          }
      },
      check(item) {
          if (item.ischeck == 0) {
              item.ischeck = 1
              this.totalcount++
              this.totalprice += item.book.bookPrice * item.goodsnum
              this.selectItems.push(item)
          } else {
              item.ischeck = 0
              this.totalcount--
              this.totalprice -= item.book.bookPrice * item.goodsnum
              var index = this.items.indexOf(item)
              if (index != -1) {
                  this.selectItems.splice(index, 1)
              }
          }
      },
      checkall() {
          this.isAllChecked = !this.isAllChecked;
          this.totalcount = 0
          this.totalprice = 0
          this.items.forEach((item) => {
              if (this.isAllChecked) {
                  this.totalcount++
                  this.totalprice += item.book.bookPrice*item.goodsnum
                  item.isChecked = true
                  var index = this.selectItems.indexOf(item)
                  if (index == -1) {
                      this.selectItems.push(item)
                  }
              } else {
                  item.isChecked = false
              }
          })
          if (!this.isAllChecked && this.selectItems.length > 0){
              this.selectItems.splice(0)
          }
      },
      deleteItem(item) {
          var index = this.items.indexOf(item)
          if (index != -1) {
              this.items.splice(index, 1)
          }
      },
      deleteSelectItems() {
          this.selectItems.forEach((item) => {
              this.deleteItem(item)
          })
      },
      get() {
          axios.get("http://www.molycao.cn:8088/querycart?userId=1").then(res => {
              if (res.request.status == 200) {
                  this.items = res.data.extend.carts
              }
          })
      }
  },
  mounted() {
      this.get()
  }
};

</script>

<style scoped>
.body {
  width: 100%;
  background: #f2f2f2;
}
img {
    vertical-align: middle;
}
.outer9{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
}
.outer9 .inter1{
    margin: 0 auto;
    width: 1120px;
    height: 94px;
}
.outer9 .inter1 h1{
    font-weight: normal;
    padding-top: 40px;
    margin-top: 50px;
    font-size: 25px;
    color: rgba(48, 65, 4, 0.562);
}
.outer9 .inter2{
    width: 1120px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 10px;
}
.outer9 .inter2 .inter21{
    width: 1118px;
    height: 54px;
    line-height:54px;
    background-color: #ffffff;
    font-size: 12px;
    color: #666666;
    border: 0.5px solid #cccccc;
    margin-bottom: 10px;
}
.outer9 .inter2 .checkAll{
    margin-left: 25px;
    width: 16px;
    height: 16px;
}
.outer9 .inter2 .check{
    margin-left: 25px;
    width: 16px;
    height: 16px;
}
.outer9 .s1{
    margin-left: 10px;
}
.outer9 .inter2 .inter21 .s2{
    margin-left: 40px;
}
.outer9 .inter2 .inter21 .s3{
     margin-left: 550px;
}
.outer9 .inter2 .inter21 .count{
    margin-left: 90px;
}
.outer9 .inter2 .inter21 .total{
    margin-left: 90px;
}
.outer9 .inter2 .inter21 .del{
    margin-left: 87px;
}
.outer9 .inter2 .inter22{
    width: 1118px;
    line-height: 100px;
    font-size: 12px;
    color: #666666;
    /*display: none;*/
}
.outer9 .inter2 .inter22 img{
    width: 66px;
    height: 66px;
    margin-left: 10px;
}
.outer9 .inter2 .inter22 ul li{
    width: 1118px;
    height: 101px;
    margin-bottom: 10px;
    background-color: #ffffff;
    list-style: none;
    border: 0.5px solid #cccccc;
}
.outer9 .inter2 .inter22 ul li .item-menu{
    float: right;
    width: 40%;
    display: inline-flex;
    justify-content: space-around;
}

.outer9 .inter3{
    width: 1118px;
    height: 100%;
    margin: 0 auto 50px;
    background-color: #ffffff;
    border: 0.5px solid #cccccc;
    font-size: 12px;
    color: #666666;
}
.outer9 .inter3 .inter31{
    width: 1058px;
    height: 48px;
    line-height: 48px;
    margin: 20px auto;
}
.outer9 .inter3 .ss1{
    margin-left: 40px;
}
.outer9 .inter3 .ss2{
    margin-left: 40px;
}
.outer9 .inter3 .foot{
    display: inline-block;
    float: right;
    width: 280px;
    height: 59px;
    line-height: 20px;
    /*background-color:red;*/
}
.outer9 .inter3 .foot .totalCount{
    color: #f44;
    font-size: 18px;
    font-weight: 700;
    padding: 0 4px;
    line-height: 20px;
}
.outer9 .inter3 .foot .totalPrice{
    font-size: 24px;
    font-weight: 700;
    margin-right: 6px;
    color: #f44;
    line-height: 18px;
}
.outer9 .inter3 .foot .ss3{
    float: right;
    padding: 0 60px;
}
.outer9 .inter3 .foot .ss4{
    color: #666;
    font-size: 16px;

}
.outer9 .inter3 .last{
    float: right;
    background-color: #FF5151;
    width: 194px;
    height: 48px;
    line-height: 48px;
    text-align: center;
}
.outer9 .inter3 .last a{
    text-decoration: none;
    margin: 0 auto;
    font-size: 18px;
    color: #ffffff;
}
.outer9 .inter3 .checkAll{
    width: 16px;
    height: 16px;
}

.outer9 .inter23{
    width: 1118px;
    height: 524px;
    border: 0.5px solid #cccccc;
    text-align: center;
    display: none;
}
.outer9 .inter23 .picture{
    width: 1118px;
    height: 250px;
    /*background-color: yellow;*/
    text-align: center;
}
.outer9 .inter23 .picture img{
    width: 150px;
    height: 120px;
    margin: 110px;
}
.outer9 .inter23 p{
    color: #999;
    padding-bottom: 20px;
    font-size: 16px;
}
.outer9 .inter23 a{
    background: #c78a49;
    padding: 0 20px;
    height: 26px;
    line-height: 24px;
    margin: 0 auto;
}
.outer9 .inter23 span{
    font-size: 12px;
    color: #ffffff;text-align: center;
}

</style>