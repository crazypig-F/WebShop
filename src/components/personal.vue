<template>
  <div class="s_content">
    <Header></Header>
    <div class="s_content_c">
      <div class="left">
        <ul>
          <li>
            <div class="list-item">
              <ul>
                <li class="list-title">个人信息</li>
                <a href="">
                  <li class="list-content">信息修改</li>
                </a>
                <a href="">
                  <li class="list-content">账户安全</li>
                </a>
              </ul>
            </div>
          </li>
          <li>
            <div class="list-item">
              <ul>
                <li class="list-title">订单中心</li>
                <router-link to="/myolder" tag="a">
                <a href="">
                  <li class="list-content">我的订单</li>
                </a></router-link>
                <a href="">
                  <li class="list-content">评价晒单</li>
                </a>
              </ul>
            </div>
          </li>
          <li>
            <div class="list-item">
              <ul>
                <li class="list-title">我的关注</li>
                <a href="">
                  <li class="list-content">关注商品</li>
                </a>
                <a href="">
                  <li class="list-content">关注店铺</li>
                </a>
              </ul>
            </div>
          </li>
          <li>
            <div class="list-item">
              <ul>
                <li class="list-title">我的钱包</li>
                <a href="">
                  <li class="list-content">优惠券</li>
                </a>
                <a href="">
                  <li class="list-content">红包</li>
                </a>
                <a href="">
                  <li class="list-content">礼品卡</li>
                </a>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="right-title">个人中心</div>
        <div class="line1">
          <div class="box1">
            <img class="head-img" src="../assets/images/img25.png" />
            <div class="content">
              <div class="name">{{userName}}</div>
            </div>
          </div>
          <div class="box2">
            <div class="pay">
              <img class="box2-img" src="../assets/images/pay.png" />
              <a href="javascript:void(0);" @click="get_pay()" class="box2-a">
                <div class="box2-text">待支付</div>
              </a>
            </div>
            <div class="get">
              <img class="box2-img" src="../assets/images/get.png" alt="" />
              <a href="" class="box2-a">
                <div class="box2-text">待收取</div>
              </a>
            </div>
            <div class="comment">
              <img class="box2-img" src="../assets/images/comme.png" alt="" />
              <a href="" class="box2-a">
                <div class="box2-text">待评价</div>
              </a>
            </div>
          </div>
        </div>
        <div class="line2">
          <ul>
            <li v-for="item in items" :key="item.id" class="pay_list">
              <div class="span_all">
                <span class="span_info">订单编号: {{ item.orderId }}</span>
                <span class="span_info">订单日期: {{ item.orderDate }}</span>
                <span class="span_info">价格: {{ item.totalPrice }}</span>
                <a href="javascript:void(0);" class="more" @click=query(item)>点击查看详情</a>
              </div>
            </li>
          </ul>
          <div class="info">
            <a v-if="show" href="javascript:void(0);"
              >获取更多信息，请前往我的订单界面</a
            >
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
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
  },
  data: function () {
    return {
      userName: "",
      order: [],
      items: [],
      show: false,
    };
  },
  methods: {
    get_pay() {
      let id = localStorage.getItem("userid");
      axios
        .get("http://www.molycao.cn:8088/queryuorder?userId=" + id)
        .then((res) => {
          let item = [];
          for (let index = 0; index < 3; index++) {
            const element = res.data.extend.uorders[index];
            item.push(element);
          }
          this.items = item;
          this.show = true;
        });
    },
    query(item) {
        this.$router.push({ path: `/paycheck/` + item.orderId });
    }
  },
  mounted() {
    this.userName = localStorage.getItem("username")
  }
};
</script>
<style scoped>
/* 公共类，设置页面的版心 */

.inner_c {
  /* 版心的宽度 */
  width: 1140px;
  /* 居中显示 */
  margin: 0 auto;
}
/* 设置a标签的下划线 */
a {
  text-decoration: none;
  color: inherit;
}
/* 设置遮罩，公共类 */
.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  display: none;
}
.mask .btn {
  width: 138px;
  height: 52px;
  position: absolute;
  background: #c78a49;
  color: #fff;
  text-align: center;
  line-height: 52px;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  margin-top: -26px;
  margin-left: -69px;
}
.s_content {
  width: 100%;
  background: #f2f2f2;
}

.s_content .s_content_c {
  padding-top: 69px;
  background: #f0f3ef;
  display: flex;
  justify-content: center;
}

.s_content .s_content_c .left {
  width: 200px;
  background-color: #fff;
}
.s_content .s_content_c .left .list-item {
  padding-top: 20px;
  padding-bottom: 20px;
}
.s_content .s_content_c .left .list-item .list-title {
  padding-left: 30px;
  font-size: 20px;
  font-weight: 600;
  color: rgb(14, 13, 13);
  margin: 5px;
}
.s_content .s_content_c .left .list-item .list-content {
  padding-left: 38px;
  font-size: 16px;
  font-weight: 400;
  color: rgb(46, 44, 44);
  margin: 5px;
}
.s_content .s_content_c .left .list-item .list-content:hover {
  color: rgb(245, 18, 18);
}
.s_content .s_content_c .right {
  width: 900px;
  /* background-color: #fff; */
  margin-left: 60px;
  margin-top: 20px;
}

.s_content .s_content_c .right .right-title {
  padding-left: 38px;
  font-size: 25px;
  font-weight: 600;
  color: rgb(14, 13, 13);
  margin: 5px;
}

.s_content .s_content_c .right .line1 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.s_content .s_content_c .right .box1 {
  width: 400px;
  background-color: #fff;
  margin: 0 10px;
  display: flex;
  justify-content: space-around;
}
.s_content .s_content_c .right .box1 .head-img {
  width: 100px;
  margin: 10px;
  border-radius: 100%;
}
.s_content .s_content_c .right .box1 .content .name {
  font-size: 20px;
  font-weight: 600;
  color: rgb(45, 124, 65);
  margin: 10px;
  line-height: 100px;
  text-align: center;
  vertical-align: middle;
}
.s_content .s_content_c .right .box1 .content {
  width: 50%;
  border-left: 2px solid rgba(180, 173, 173, 0.781);
}
.s_content .s_content_c .right .box1 .content .text {
  font-size: 15px;
  font-weight: 600;
  color: rgb(95, 86, 86);
  margin: 5px;
  text-align: center;
}
.s_content .s_content_c .right .box1 .content .number {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: rgb(14, 196, 105);
  margin: 5px;
}
.s_content .s_content_c .right .box2 {
  background-color: #fff;
  margin: 0 10px;
  display: flex;
  justify-content: center;
}
.s_content .s_content_c .right .box2 .pay {
  border-right: 1px solid rgb(122, 113, 113);
  width: 220px;
}
.s_content .s_content_c .right .box2 .get {
  width: 220px;
  border-right: 1px solid rgb(122, 113, 113);
}
.s_content .s_content_c .right .box2 .comment {
  width: 220px;
}
.box2-img {
  width: 50px;
  margin-top: 20px;
  margin-left: 84px;
}
.box2-a:hover {
  color: red;
}
.box2-text {
  text-align: center;
  margin-top: 5px;
}
.line2 {
  margin-top: 40px;
  height: 500px;
  width: 900px;
}

.pay_list {
  height: 100px;
  width: 890px;
  background-color: rgb(253, 253, 253);
  margin-top: 20px;
  border-radius: 10px;
}
.info {
  height: 100px;
  margin-top: 40px;
  color: #26411d;
  font-size: 30px;
}
.span_all {
  display: flex;
  justify-content: center;
  align-items:center
}
.span_info{
  width: 200px;
  height: 40px;
  margin-top: 35px;
}
.more{
  width: 200px;
  height: 40px;
  margin-top: 35px;
  color: #385031;
}
</style>