<template>
  <!-- qingzhu_content部分开始 -->
  <div class="qingzhu_content">
    <div class="qingzhu_content_c inner_c">
      <div class="pro1">
        <div class="title">
          <h2><a href="javascript:void(0);">新品推荐，精心挑选</a></h2>
          <p class="info">家居必备使用小单品</p>
        </div>
        <div class="pro_pic">
          <div class="pro_c">
            <ul>
              <li
                v-for="item in recomend_goods"
                :key="item.id"
                @click="select(item)"
              >
                <img :src="item.bookPoster" alt="" />
                <div class="cont">
                  <h3>{{ item.bookName }}</h3>
                  <span>￥{{ item.bookPrice }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="btns">
            <a href="javascript:void(0);" class="leftBtn" @click="left">&lt;</a>
            <a href="javascript:void(0);" class="rightBtn" @click="right"
              >&gt;</a
            >
          </div>
        </div>
      </div>
      <div class="pro2">
        <div class="title">
          <h2><a href="javascript:void(0);">专题活动，限时促销</a></h2>
          <p class="info">严选材质，用心设计</p>
        </div>
        <div class="pro2_c">
          <ul class="pro2_c_pic">
            <li
              :class="item.class"
              v-for="item in activities"
              :key="item.id"
            >
              <a href="javascript:void(0);">
                <img :src="item.path" alt="" />
              </a>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="pro3">
        <div class="title">
          <h2><a href="javascript:void(0);">青竹良品，你的家居首选</a></h2>
          <p class="info">天然之源，诚挚之礼</p>
        </div>
        <div class="pro3_c">
          <ul class="pub_pro">
            <li>
              <a href="javascript:void(0);">
                <img src="../assets/images/img40.jpg" alt="" />
              </a>
              <div class="mask"></div>
            </li>
            <li v-for="item in perfect_goods" :key="item.id">
              <a href="javascript:void(0);">
                <img :src="item.bookPoster" alt="" />
                <div class="cont">
                  <h3>{{ item.bookName }}</h3>
                  <span>￥{{ item.bookPrice }}</span>
                </div>
              </a>
              <div class="mask">
                <a href="javascript:void(0);" class="btn" @click="select(item)">
                  查看详情
                </a>
              </div>
            </li>
          </ul>
          <ul class="pub_pro">
            <li>
              <a href="javascript:void(0);">
                <img src="../assets/images/img45.jpg" alt="" />
              </a>
              <div class="mask"></div>
            </li>
            <li v-for="item in goods" :key="item.id">
              <a href="javascript:void(0);">
                <img :src="item.bookPoster" alt="" />
                <div class="cont">
                  <h3>{{ item.bookName }}</h3>
                  <span>￥{{ item.bookPrice }}</span>
                </div>
              </a>
              <div class="mask">
                <a href="javascript:void(0);" class="btn" @click="select(item)">
                  查看详情
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="pro4">
        <div class="title">
          <h2><a href="javascript:void(0);">全球大牌优选，买手用心挑选</a></h2>
          <p class="info">全球好货，原装正品</p>
        </div>
        <div class="por4_top">
          <div class="pic1 pic">
            <img src="../assets/images/img51.jpg" alt="" />
            <span></span>
          </div>
          <div class="pic2">
            <div class="top pic">
              <img src="../assets/images/img52.jpg" alt="" />
              <span></span>
            </div>
            <div class="bottom pic">
              <img src="../assets/images/img53.jpg" alt="" />
              <span></span>
            </div>
          </div>
          <div class="pic3 pic">
            <img src="../assets/images/img54.jpg" alt="" />
            <span></span>
          </div>
        </div>
        <div class="pro4_bottom">
          <ul class="pro4_c">
            <li>
              <div class="pic">
                <a href="javascript:void(0);">
                  <img src="../assets/images/img55.png" alt="" />
                </a>
              </div>
              <p class="cont">
                <a href="javascript:void(0);"> 自然生活，精选用料 </a>
              </p>
            </li>
            <li>
              <div class="pic">
                <a href="javascript:void(0);">
                  <img src="../assets/images/img56.png" alt="" />
                </a>
              </div>
              <p class="cont">
                <a href="javascript:void(0);"> 自然生活，精选用料 </a>
              </p>
            </li>
            <li>
              <div class="pic">
                <a href="javascript:void(0);">
                  <img src="../assets/images/img57.png" alt="" />
                </a>
              </div>
              <p class="cont">
                <a href="javascript:void(0);"> 自然生活，精选用料 </a>
              </p>
            </li>
            <li>
              <div class="pic">
                <a href="javascript:void(0);">
                  <img src="../assets/images/img58.png" alt="" />
                </a>
              </div>
              <p class="cont">
                <a href="javascript:void(0);"> 自然生活，精选用料 </a>
              </p>
            </li>
            <li>
              <div class="pic">
                <a href="javascript:void(0);">
                  <img src="../assets/images/img59.png" alt="" />
                </a>
              </div>
              <p class="cont">
                <a href="javascript:void(0);"> 自然生活，精选用料 </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- qingzhu_content部分结束 -->
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      goods: [],
      recomend_goods: [],
      perfect_goods: [],
      recomend_page: 0,
      activities: [
        {
          name: "activity1",
          class: "pic1 pic",
          path: require("../assets/images/img31.jpg"),
        },
        {
          name: "activity2",
          class: "pic2 pic",
          path: require("../assets/images/img32.jpg"),
        },
        {
          name: "activity3",
          class: "pic3 pic",
          path: require("../assets/images/img33.jpg"),
        },
      ],
    };
  },
  methods: {
    select(item) {
      // this.set_select_goods(item);
      this.$router.push({ path: `/detail/` + item.bookId });
    },
    get_goods() {
      let that = this;
      axios.get("http://www.molycao.cn:8088/books").then((res) => {
        that.goods = res.data.extend.books;
        this.get_recomend_goods();
        this.get_perfect_goods();
      });
    },
    get_perfect_goods() {
      for (let index = 4; index < 8; index += 1) {
        const element = this.goods[index];
        this.perfect_goods.push(element);
      }
    },
    get_recomend_goods() {
      let goods = [];
      for (let index = 0; index < 4; index++) {
        const element = this.goods[this.recomend_page * 4 + index];
        goods.push(element);
      }
      this.recomend_goods = goods;
    },
    left() {
      if (this.recomend_page > 0) {
        this.recomend_page -= 1;
        this.get_recomend_goods();
      }
    },
    right() {
      if (this.recomend_page < this.recomend_goods.length / 4) {
        this.recomend_page += 1;
        this.get_recomend_goods();
      }
    },
  },
  created() {
    this.get_goods();
  },
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
/* qingzhu_content部分 */
.qingzhu_content {
  width: 100%;
}
.qingzhu_content_c .pro1 .pro_pic {
  width: 100%;
  height: 364px;
  position: relative;
}
.qingzhu_content_c .pro1 .pro_pic .pro_c {
  width: 100%;
  height: 364px;
  overflow: hidden;
}
.qingzhu_content_c .pro1 .pro_pic ul {
  width: 3000px;
  height: 364px;
}
.qingzhu_content_c .pro1 .pro_pic ul li {
  width: 276px;
  height: 364px;
  margin-right: 10px;
  float: left;
}
.qingzhu_content_c .pro1 .pro_pic .btns a {
  position: absolute;
  height: 80px;
  width: 40px;
  font-size: 38px;
  top: 50%;
  margin-top: -40px;
  font-family: serif;
  font-weight: bold;
  color: #c1c1c1;
}
.qingzhu_content_c .pro1 .pro_pic .btns a.leftBtn {
  left: -41px;
}
.qingzhu_content_c .pro1 .pro_pic .btns a.rightBtn {
  right: -55px;
}
.qingzhu_content_c .pro1 .pro_pic .pro_c li img {
  width: 100%;
}
.qingzhu_content_c .pro1 .pro_pic .pro_c li .cont {
  text-align: center;
  padding-top: 20px;
  font-size: 14px;
}
.qingzhu_content_c .pro1 .pro_pic .pro_c li .cont h3 {
  line-height: 36px;
  color: #000;
  font-weight: bold;
}
.qingzhu_content_c .pro1 .pro_pic .pro_c li .cont span {
  color: #db2e2e;
}
.qingzhu_content_c .pro2 .pro2_c {
  height: 380px;
}
/* .qingzhu_content_c .pro2 .pro2_c .pro2_c_pic {
} */
.qingzhu_content_c .pro2 .pro2_c .pro2_c_pic .pic1 {
  width: 680px;
  height: 380px;
  background: purple;
  float: left;
  margin-right: 10px;
  overflow: hidden;
}
.qingzhu_content_c .pro2 .pro2_c .pro2_c_pic .pic img {
  transition: all 0.4s ease 0s;
}
.qingzhu_content_c .pro2 .pro2_c .pro2_c_pic .pic {
  position: relative;
}
.qingzhu_content_c .pro2 .pro2_c .pro2_c_pic .pic span {
  border: 2px solid #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.qingzhu_content_c .pro2 .pro2_c .pro2_c_pic .pic:hover span {
  border: 2px solid #fff;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  transition: all 0.4s ease 0s;
}
.qingzhu_content_c .pro2 .pro2_c .pro2_c_pic .pic:hover img {
  /* 下面的都是CSS3属性 */
  transform: scale(1.2);
  transition: all 0.4s ease 0s;
}
.qingzhu_content_c .pro2 .pro2_c .pro2_c_pic .pic2 {
  width: 450px;
  height: 185px;
  float: left;
  margin-bottom: 10px;
  background: blue;
  overflow: hidden;
}
.qingzhu_content_c .pro2 .pro2_c .pro2_c_pic .pic3 {
  width: 450px;
  height: 185px;
  float: left;
  overflow: hidden;
}
.qingzhu_content_c .pro3 .pro3_c {
  height: 630px;
  overflow: hidden;
}
.qingzhu_content_c .pro3 .pro3_c ul {
  width: 1150px;
  overflow: hidden;
  margin-bottom: 10px;
}
.qingzhu_content_c .pro3 .pro3_c ul li {
  width: 220px;
  height: 310px;
  float: left;
  margin-right: 10px;
  position: relative;
}
.qingzhu_content_c .pro3 .pro3_c ul li:hover .mask {
  display: block;
}
.qingzhu_content_c .pro3 .pro3_c ul li img {
  width: 100%;
}

.qingzhu_content_c .pro4 .por4_top {
  height: 358px;
}
.qingzhu_content_c .pro4 .por4_top {
  height: 358px;
}
.qingzhu_content_c .pro4 .por4_top .pic1 {
  width: 504px;
  height: 358px;
  background: purple;
  margin-right: 10px;
  float: left;
}
.qingzhu_content_c .pro4 .por4_top .pic2 {
  width: 411px;
  height: 358px;
  float: left;
}
.qingzhu_content_c .pro4 .por4_top .pic2 .top {
  height: 172px;
  background: cyan;
  margin-bottom: 14px;
}
.qingzhu_content_c .pro4 .por4_top .pic2 .bottom {
  height: 172px;
  background: cyan;
}
.qingzhu_content_c .pro4 .por4_top .pic3 {
  width: 197px;
  height: 358px;
  background: pink;
  float: right;
}
.qingzhu_content_c .pro4 .por4_top .pic {
  overflow: hidden;
  position: relative;
}
.qingzhu_content_c .pro4 .por4_top .pic img {
  transition: all 0.4s ease 0s;
}
.qingzhu_content_c .pro4 .por4_top .pic:hover img {
  transform: scale(1.2);
  transition: all 0.4s ease 0s;
}
.qingzhu_content_c .pro4 .por4_top .pic span {
  border: 2px solid #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.qingzhu_content_c .pro4 .por4_top .pic:hover span {
  border: 2px solid #fff;
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  transition: all 0.4s ease 0s;
}
.qingzhu_content_c .pro4 .pro4_bottom {
  overflow: hidden;
}
.qingzhu_content_c .pro4 .pro4_bottom .pro4_c {
  padding-top: 20px;
  width: 1160px;
}
.qingzhu_content_c .pro4 .pro4_bottom .pro4_c li {
  width: 210px;
  height: 140px;
  float: left;
  margin-right: 22px;
  text-align: center;
}
.qingzhu_content_c .pro4 .pro4_bottom .pro4_c li .pic {
  height: 90px;
  border: 1px solid #e8e8e8;
  overflow: hidden;
}
.qingzhu_content_c .pro4 .pro4_bottom .pro4_c li .pic img {
  transition: all 0.4s ease 0s;
}
.qingzhu_content_c .pro4 .pro4_bottom .pro4_c li .pic:hover img {
  transform: translateX(-50px);
  transition: all 0.4s ease 0s;
}
.qingzhu_content_c .pro4 .pro4_bottom .pro4_c li .pic img {
  height: 100%;
}
.qingzhu_content_c .pro4 .pro4_bottom .pro4_c li .cont {
  line-height: 48px;
  color: #5d5d5d;
}
</style>