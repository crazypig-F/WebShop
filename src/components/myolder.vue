<template>
<div class="body">
    <Header></Header>
    <div class="content">
        <div class="s_content_c">
            <h1 class="content-title">待支付订单</h1>
        </div>
        
        <div class="s_content_c">
            <h1 class="content-title">已完成订单</h1>
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
          axios.get("http://www.molycao.cn:8088/queryuorder?" + "userId=" + localStorage.getItem("userId")).then(res => {
              if (res.status == 200) {
                  this.unfinishOlders = res.data.extend.uorders
              }
          })
      }
  },
  mounted() {
      this.getAllOlders()
      this.getUnfinishOlders()
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

</style>