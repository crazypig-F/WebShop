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
                        <li v-for="item in items" :key="item.id">
                            <input type="checkbox" class="check" :checked = item.isChecked @click=check(item)><img :src=item.pic alt="">
                            <span class="title">{{item.title}}</span>
                            <span class="item-menu">
                                <span class="price">¥{{item.price}}</span>
                                <span class="count-button">
                                    <input type="button" value="-" class="sub" @click="sub(item)"/>
                                    <span class="count">{{item.count}}</span>
                                    <input type="button" value="+" class="add" @click="add(item)">
                                </span>
                                <span class="total">¥{{item.price*item.count}}</span>

                                <span class="del">删除</span>
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
                        <a href="./青竹登录.html">确认结算</a>
                    </div>
                    <input type="checkbox" class="checkAll" :checked = isAllChecked @click="checkall"><span class="s1">全选</span>
                    <span class="ss1">删除</span>
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
import Header from "./header";
import Footer from "./footer";
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
          items: [
              {
                  id:1,
                  pic:"http://asset.ibanquan.com/image/588084e63f8f90098800003a/s_140x140.png?v=1484817638",
                  title:"经典系列计算机",
                  price:200,
                  count:1,
                  isChecked:false
              },
              {
                  id:2,
                  pic:"http://asset.ibanquan.com/image/5880828b9bedc407dc000014/s_140x140.png?v=1484817035",
                  title:"黑陶自然花香蜡烛",
                  price:123,
                  count:3,
                  isChecked:false
              },
              {
                  id:3,
                  pic:"http://asset.ibanquan.com/image/588082c50dd76c1c9700001b/s_140x140.png?v=1484817093",
                  title:"便携简约清扫扫帚",
                  price:312,
                  count:2,
                  isChecked:false
              },
              {
                  id:4,
                  pic:"http://asset.ibanquan.com/image/588084ae3f8f90098c000036/s_140x140.png?v=1484817583",
                  title:"简约木制餐盘",
                  price:300,
                  count:1,
                  isChecked:false
              },
              {
                  id:4,
                  pic:"http://asset.ibanquan.com/image/588084ae3f8f90098c000036/s_140x140.png?v=1484817583",
                  title:"简约木制餐盘",
                  price:300,
                  count:1,
                  isChecked:false
              }
          ]
      }
  },
  methods : {
      add (item) {
          item.count ++;
          if (item.isChecked) {
              this.totalprice += item.price
          }
      },
      sub (item) {
          if (item.count > 1) {
              item.count--;
              if (item.isChecked) {
              this.totalprice -= item.price
          }
          }
      },
      check(item) {
          item.isChecked = !item.isChecked;
          if (item.isChecked) {
              this.totalcount++;
              this.totalprice += item.price * item.count
          } else {
              this.totalcount--;
              this.totalprice -= item.price * item.count
          }
      },
      checkall() {
          this.isAllChecked = !this.isAllChecked;
          this.totalcount = 0
          this.totalprice = 0
          this.items.forEach((item) => {
              if (this.isAllChecked) {
                  this.totalcount++
                  this.totalprice += item.price*item.count
                  item.isChecked = true
              } else {
                  item.isChecked = false
              }
          })
      }
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