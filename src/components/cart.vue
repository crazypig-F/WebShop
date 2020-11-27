<template>
    <div class="s_content">
        <Header></Header>
        <div class="outer">
            <div class="shop">
                <p>3件商品 总计:¥1111</p>
                <div class="shop1"><a href="购物车.html">去结算</a></div>
            </div>
        </div>
        <div class="outer9">
            <div class="inter1">
                <h1>购物车</h1>
            </div>
            <div class="inter2">
                <div class="inter21">
                    <input type="checkbox" class="checkAll" :checked = checkalldata @click="checkall"><span class="s1">全选</span>
                    <span class="s2">商品名称</span><span class="s3">单价</span>
                    <span class="count">数量</span><span class="total">小计</span><span class="del">操作</span>
                </div>
                <div class="inter22">
                    <ul>
                        <li>
                            <input type="checkbox" class="check" :checked = check1data @click="check1"><img src="../assets/images/s1.png" alt="">
                            <span class="s1">经典系列红色时钟</span><span class="money">¥</span>
                            <span class="price">{{prices1}}</span><input type="button" value="-" class="sub" @click="sub1()"/>
                            <span class="count">{{count1}}</span><input type="button" value="+" class="add" @click="add1()">
                            <span class="money1">¥</span><span class="total">{{prices1 * count1}}</span>
                            <span class="del">删除</span>
                        </li>
                        <li>
                            <input type="checkbox" class="check" :checked = check2data @click="check2"><img src="../assets/images/s2.png" alt="">
                            <span class="s1">便携简约清扫扫帚</span><span class="money">¥</span>
                            <span class="price">{{prices2}}</span><input type="button" value="-" class="sub" @click="sub2()">
                            <span class="count">{{count2}}</span><input type="button" value="+" class="add" @click="add2()">
                            <span class="money1">¥</span><span class="total">{{prices2 * count2}}</span>
                            <span class="del">删除</span>
                        </li>
                        <li>
                            <input type="checkbox" class="check" :checked = check3data @click="check3"><img src="../assets/images/s3.png" alt="">
                            <span class="s1">黑色陶瓷研磨器皿</span> <span class="money">¥</span>
                            <span class="price">{{prices3}}</span><input type="button" value="-" class="sub" @click="sub3()">
                            <span class="count">{{count3}}</span><input type="button" value="+" class="add" @click="add3()">
                            <span class="money1">¥</span><span class="total">{{prices3 * count3}}</span>
                            <span class="del">删除</span>
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
                    <input type="checkbox" class="checkAll" :checked = checkalldata @click="checkall"><span class="s1">全选</span>
                    <span class="ss1">删除</span><span class="ss2">清除下架商品</span>
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
          prices1 : 200,
          prices2 : 239,
          prices3 : 429,
          count1 : 1,
          count2 : 2,
          count3 : 3,
          check1data : false,
          check2data : false,
          check3data : false,
          checkalldata : false,
          totalcount : 0,
          totalprice : 0,
      }
  },
  methods : {
      add1 () {
          this.count1 ++;
      },
      add2 () {
          this.count2 ++;
      },
      add3 () {
          this.count3 ++;
      },
      sub1 () {
          if (this.count1 > 1) {
              this.count1--;
          }
      },
      sub2 () {
          if (this.count2 > 1) {
              this.count2--;
          }
      },
      sub3 () {
          if (this.count3 > 1) {
              this.count3--;
          }
      },
      check1() {
          this.check1data = !this.check1data;
          if (this.check1data) {
              this.totalcount++;
              this.totalprice += this.prices1 * this.count1
          } else {
              this.totalcount--;
              this.totalprice -= this.prices1 * this.count1
          }
      },
      check2() {
          this.check2data = !this.check2data;
          if (this.check2data) {
              this.totalcount++;
              this.totalprice += this.prices2 * this.count2
          } else {
              this.totalcount--;
              this.totalprice -= this.prices2 * this.count2
          }
      },
      check3() {
          this.check3data = !this.check3data;
          if (this.check3data) {
              this.totalcount++;
              this.totalprice += this.prices3 * this.count3
          } else {
              this.totalcount--;
              this.totalprice -= this.prices3 * this.count3
          }
      },
      checkall() {
          this.checkalldata = !this.checkalldata;
          if (this.checkalldata) {
              this.totalcount = 3;
              this.totalprice = this.prices1 * this.count1 + this.prices2 * this.count2 + this.prices3 * this.count3;
              this.check1data = true;
              this.check2data = true;
              this.check3data = true;
          } else {
              this.totalcount = 0;
              this.totalprice = 0;
              this.check1data = false;
              this.check2data = false;
              this.check3data = false;
          }
      }
  }
};

</script>

<style scoped>
.s_content {
  width: 100%;
  background: #f2f2f2;
  padding-bottom: 60px;
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
    margin-top: 60px;
}
.outer9 .inter2{
    width: 1120px;
    height: 492px;
    /*background-color: #795da3;*/
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
     margin-left: 500px;
}
.outer9 .inter2 .inter21 .count{
    margin-left: 75px;
}
.outer9 .inter2 .inter21 .total{
    margin-left: 95px;
}
.outer9 .inter2 .money1{
    margin-left: 90px;
}
.outer9 .inter2 .inter21 .del{
    margin-left: 90px;
}
.outer9 .inter2 .inter22{
    width: 1118px;
    height: 326px;
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
.outer9 .inter2 .inter22 .money{
    margin-left: 435px;
}
.outer9 .inter2 .inter22 .sub{
    margin-left: 70px;
}
.outer9 .inter2 .inter22 .add{
    margin-left: 5px;
}
.outer9 .inter2 .del{
    margin-left: 80px;
}
.outer9 .inter3{
    width: 1118px;
    height: 90px;
    margin: 0 auto 50px;
    background-color: #ffffff;
    border: 0.5px solid #cccccc;
    font-size: 12px;
    color: #666666;
    /*display: none;*/
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