<template>
  <div class="header">
    <div class="header_c inner_c">
      <h1 class="logo">青竹商城</h1>
      <dl class="allType">
        <dt><a href="javascript:void(0);">查看所有类型</a></dt>
        <dd>
          <div class="dd_inn">
            <ul class="dd_cont">
              <li v-for="item in category" :key="item.id">
                <a href="javascript:void(0);" @click="select(item)">{{
                  item
                }}</a>
              </li>
            </ul>
            <ul class="pro">
              <li>
                <a href="javascript:void(0);">
                  <div class="pic">
                    <img src="../assets/images/img25.png" alt="" />
                  </div>
                  <div class="content">
                    <h3>简约木质餐盘</h3>
                    <span>￥200</span>
                  </div>
                </a>
                <div class="mask">
                  <a href="javascript:void(0);" class="btn">查看详情</a>
                </div>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <div class="pic">
                    <img src="../assets/images/img26.png" alt="" />
                  </div>
                  <div class="content">
                    <h3>简约木质餐盘</h3>
                    <span>￥200</span>
                  </div>
                </a>
                <div class="mask">
                  <a href="javascript:void(0);" class="btn">查看详情</a>
                </div>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <div class="pic">
                    <img src="../assets/images/img27.png" alt="" />
                  </div>
                  <div class="content">
                    <h3>简约木质餐盘</h3>
                    <span>￥200</span>
                  </div>
                </a>
                <div class="mask">
                  <a href="javascript:void(0);" class="btn">查看详情</a>
                </div>
              </li>
            </ul>
          </div>
        </dd>
      </dl>
      <ul class="nav">
        <li><router-link to="/index" tag="a">首页</router-link></li>
        <li><router-link to="/all" tag="a">所有产品</router-link></li>
        <li><router-link to="/personal" tag="a">个人中心</router-link></li>
      </ul>
      <!-- <a href="#" class="search"></a> -->
      <div class="reg">
        <div class="ico">
          <span class="ico_c"></span>
          <div class="settle">
            <p class="con">{{ totalcount }}件商品 共计：<span>￥0</span></p>
            <router-link to="/cart" tag="a"
              ><a href="#" class="btn">去看看</a></router-link
            >
          </div>
          <span class="con"> 0 </span>
        </div>
        <div class="reg_c">
          <router-link to="/login" tag="a">登录</router-link>
          <span>&nbsp;|&nbsp;</span>
          <router-link to="/register" tag="a">注册</router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- header部分结束 -->
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: function () {
    return {
      totalprice: 0,
      totalcount: 0,
      items: [
        {
          id: 1,
          pic:
            "http://asset.ibanquan.com/image/588084e63f8f90098800003a/s_140x140.png?v=1484817638",
          title: "经典系列计算机",
          price: 200,
          count: 1,
          isChecked: false,
        },
        {
          id: 2,
          pic:
            "http://asset.ibanquan.com/image/5880828b9bedc407dc000014/s_140x140.png?v=1484817035",
          title: "黑陶自然花香蜡烛",
          price: 123,
          count: 3,
          isChecked: false,
        },
        {
          id: 3,
          pic:
            "http://asset.ibanquan.com/image/588082c50dd76c1c9700001b/s_140x140.png?v=1484817093",
          title: "便携简约清扫扫帚",
          price: 312,
          count: 2,
          isChecked: false,
        },
        {
          id: 4,
          pic:
            "http://asset.ibanquan.com/image/588084ae3f8f90098c000036/s_140x140.png?v=1484817583",
          title: "简约木制餐盘",
          price: 300,
          count: 1,
          isChecked: false,
        },
        {
          id: 4,
          pic:
            "http://asset.ibanquan.com/image/588084ae3f8f90098c000036/s_140x140.png?v=1484817583",
          title: "简约木制餐盘",
          price: 300,
          count: 1,
          isChecked: false,
        },
      ],
      category: ["不锈钢", "原料水泥", "塑料", "木质"],
    };
  },
  methods: {
    select(item) {
      this.set_select_category(item);
      this.$router.replace({ path: `/all`});
    },
    ...mapMutations(["set_select_category"]),
  },
  computed: {
    ...mapState(["select_category"]),
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
/* qingzhu_content中标题部分的公共类 */
.title {
  text-align: center;
  height: 92px;
  padding-top: 40px;
}
.title h2 {
  font-size: 23px;
  font-weight: bold;
  color: #000000;
  line-height: 54px;
}
.title .info {
  color: #999999;
  font-size: 16px;
}
/* 产品部分共类 */
.pub_pro li img {
  width: 100%;
}
.pub_pro li .cont {
  text-align: center;
  padding-top: 20px;
  font-size: 14px;
}
.pub_pro li .cont h3 {
  line-height: 36px;
  color: #000;
  font-weight: bold;
}
.pub_pro li .cont span {
  color: #db2e2e;
}
/* header部分 */
.header {
  width: 100%;
  height: 68px;
  border-bottom: 1px solid #e1e1e1;
  font-size: 14px;
  color: #333333;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
}
.header .header_c {
  height: 68px;
}
.header .header_c h1 {
  width: 200px;
  height: 68px;
  background: url("../assets/images/logo.png") no-repeat 22px 15px;
  text-indent: -999em;
  overflow: hidden;
  float: left;
}
.header .header_c .allType {
  float: left;
  line-height: 68px;
}
.header .header_c .allType dt {
  width: 120px;
  height: 68px;
  text-align: center;
}
.header .header_c .allType dt a {
  display: block;
}
.header .header_c .allType dt:hover {
  background: #e6d6c6;
}
.header .header_c .allType dd {
  height: 340px;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 68px;
  display: none;
  background: #fff;
}
.header .header_c .allType:hover dd {
  display: block;
}
.header .header_c .allType .dd_inn {
  width: 968px;
  margin: 0 auto;
  padding-left: 280px;
  padding-top: 60px;
}
.header .header_c .allType .dd_inn .dd_cont {
  line-height: 38px;
  width: 232px;
  float: left;
}
.header .header_c .allType .dd_inn .dd_cont li a {
  text-decoration: none;
  color: #1f1f1f;
}
.header .header_c .allType .dd_inn .dd_cont li a:hover {
  color: #e3be96;
}
.header .header_c .allType .dd_inn .pro {
  width: 710px;
  height: 280px;
  float: left;
}
.header .header_c .allType .dd_inn .pro li {
  width: 173px;
  height: 280px;
  margin-right: 60px;
  float: left;
  position: relative;
}
.header .header_c .allType .dd_inn .pro li:hover .mask {
  display: block;
}
.header .header_c .allType .dd_inn .pro li .pic img {
  width: 100%;
}
.header .header_c .allType .dd_inn .pro li .content {
  line-height: 30px;
  text-align: center;
  font-size: 12px;
}

.header .header_c .allType .dd_inn .pro li .content span {
  color: #db2e2e;
}
.header .header_c .nav {
  float: left;
  line-height: 68px;
}
.header .header_c .nav li {
  float: left;
  padding: 0 28px;
}
.header .header_c .nav li a {
  display: block;
}
.header .header_c .nav li:hover {
  background: #e6d6c6;
}
.header .header_c .search {
  width: 25px;
  height: 25px;
  background: url("../assets/images/img00.png");
  float: left;
  margin-top: 20px;
  margin-left: 138px;
}
.header .header_c .reg {
  float: right;
  line-height: 68px;
  position: relative;
  text-align: right;
}
.header .header_c .reg a {
  display: inline-block;
}
.header .header_c .reg .ico .ico_c {
  display: inline-block;
  width: 28px;
  height: 26px;
  background: url("../assets/images/0.png");
  vertical-align: middle;
  margin-left: 10px;
}
.header .header_c .reg .con {
  font-weight: bold;
}

.header .header_c .reg .settle {
  width: 230px;
  height: 114px;
  background: purple;
  position: absolute;
  right: 2px;
  top: 69px;
  padding: 10px;
  background: #f2f2f2;
  border: 1px solid #dddddd;
  border-top: none;
  text-align: center;
  display: none;
}
.header .header_c .reg .settle a {
  display: block;
  height: 44px;
  background: #c78a49;
  color: #fff;
  line-height: 44px;
  font-size: 14px;
  border-radius: 4px;
}
.header .header_c .reg .reg_c {
  float: right;
}
.header .header_c .reg .ico {
  float: right;
}
.header .header_c .reg .settle p span {
  color: #db2e2e;
}
.header .header_c .reg .ico:hover .settle {
  display: block;
}
</style>