<template>
<div class="body">
    <Header></Header>
    <div class="content">
        <div class="s_content_c">
            <h1 class="content-title">待支付订单</h1>
        </div>
        <div class="olderlist">
            <div class="line2">
                <ul>
                    <li v-for="item in unfinishOlders" :key="item.orderId" class="pay_list">
                    <div class="span_all">
                        <span class="span_info">订单编号: {{item.orderId}}</span>
                        <span class="span_info">订单日期: {{item.orderDate}}</span>
                        <span class="span_info">价格: {{item.totalPrice}}</span>
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
        <div class="s_content_c">
            <h1 class="content-title">全部订单</h1>
        </div>
        <div class="olderlist">
            <div class="line2">
                <ul>
                    <li v-for="item in allOlders" :key="item.orderId" class="pay_list">
                    <div class="span_all">
                        <span class="span_info">订单编号: {{item.orderId}}</span>
                        <span class="span_info">订单日期: {{item.orderDate}}</span>
                        <span class="span_info">价格: {{item.totalPrice}}</span>
                        <a href="javascript:void(0);" class="more">点击查看详情</a>
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
    Header,
  },
  data: function() {
      return {
          allOlders : [],
          unfinishOlders : []
      }
  },
  methods: {
      getAllOlders() {
          axios.get("http://www.molycao.cn:8088/queryorder").then(res => {
              if (res.status == 200) {
                  this.allOlders = res.data.extend.orders
              }
          })
      },
      getUnfinishOlders() {
          axios.get("http://www.molycao.cn:8088/queryuorder?" + "userId=" + localStorage.getItem("userid")).then(res => {
              if (res.status == 200) {
                  this.unfinishOlders = res.data.extend.uorders
              }
          })
      },
      query(item) {
          this.$router.push({ path: `/paycheck/` + item.orderId });
      }
  },
  mounted() {
      this.getUnfinishOlders()
      this.getAllOlders()
  }
}
</script>

<style scoped>
.body{
	width: 100%;
	background: #F2F2F2;
}
.content{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    display: inline-block;
}

.body .s_content_c{
    padding-top: 69px;
    background:#f0f3ef;
    padding-bottom: 15px;
    border-bottom: 1px rgb(97, 94, 94) dashed;
}
.content-title{
    padding-top: 20px;
    margin-left: 100px;
    font-size: 20px;
}

.olderlist {
    display: inline-block;
    width: 100%;
}

.line2 {
  margin-top: 40px;
  height: 300px;
  width: 100%;
}


.pay_list {
  height: 80px;
  width: 100%;
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
  line-height: 80px;
  vertical-align: middle;
}
.more{
  width: 200px;
  height: 40px;
  line-height: 80px;
  vertical-align: middle;
  color: #385031;
}
</style>