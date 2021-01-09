<template>
  <div class="s_content">
    <Header></Header>
    <div class="s_content_c inner_c">
      <div class="s_info">
        <div class="s_title">
          <a href="#"> 首页 </a>
          &gt;
          <span> 所有商品 </span>
          &gt;
          <span> {{select_category}} </span>
        </div>
        <div class="screen">
          <table>
            <tr class="t1">
              <th>品牌</th>
              <td>
                <a href="#">无印</a>
                <a href="#">博朗</a>
                <a href="#">花印</a>
              </td>
            </tr>
            <tr class="t2">
              <th>类别</th>
              <td>
                <a
                  href="javascript:void(0);"
                  v-for="item in category"
                  :key="item.id"
                  @click="select(item)"
                  >{{ item }}</a
                >
              </td>
            </tr>
          </table>
        </div>
        <div class="fun">
          <div class="sort">
            <span>排序：</span>
            <a href="#" class="s1"> <i></i>销量 </a>
            <a href="#" class="s2"> <i></i>价格 </a>
            <a href="#" class="s3"> <i></i>上架时间 </a>
          </div>
          <div class="swi">
            <span>仅显示有货：</span>
            <a href="#">
              <i></i>
            </a>
          </div>
          <div class="total">
            共<span>{{ total_num }}</span
            >个商品
          </div>
        </div>
        <div class="s_prod">
          <ul class="pub_pro">
            <li v-for="item in goods" :key="item.id">
              <img :src="item.bookPoster" alt="" />
              <div class="cont">
                <h3>{{ item.bookName }}</h3>
                <span>￥{{ item.bookPrice }}</span>
              </div>
              <div class="mask">
                <a @click="show_detail(item)" class="btn">查看详情</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="pages">
          <a href="#">&lt;</a>
          <a href="#" class="tol cur">1</a>
          <a href="#" class="tol">2</a>
          <a href="#">&gt;</a>
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
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      goods: [],
      total_num: 0,
      category: ["不锈钢", "原料水泥", "塑料", "木质"],
      select_category: "",
    };
  },
  mounted() {
    axios.get("http://www.molycao.cn:8088/books").then((res) => {
      this.goods = res.data.extend.books;
    });
  },
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState(["select_category"]),
  },
  methods: {
    get_goods() {
      console.log(this.select_category);
      if (this.select_category == "") {
        axios.get("http://www.molycao.cn:8088/books").then((res) => {
          this.goods = res.data.extend.books;
          this.total_num = this.goods.length;
        });
      } else {
        axios
          .get(
            "http://www.molycao.cn:8088/bookswithcategory?category=" +
              this.select_category
          )
          .then((res) => {
            this.goods = res.data.extend.books;
            this.total_num = this.goods.length;
          });
      }
    },
    select(item) {
      this.select_category = item
      axios
        .get("http://www.molycao.cn:8088/bookswithcategory?category=" + item)
        .then((res) => {
          this.goods = res.data.extend.books;
          this.total_num = this.goods.length;
        });
    },
    show_detail(item) {
      this.set_select_goods(item);
      this.$router.push({ path: `/detail` });
    },
    ...mapMutations(["set_select_goods"]),
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
.s_content {
  width: 100%;
  background: #f2f2f2;
  padding-bottom: 60px;
}
.s_content .s_content_c {
  padding-top: 69px;
  background: #fff;
}
.s_content .s_content_c .s_info {
  padding: 10px;
}
.s_content .s_content_c .s_info .s_title {
  line-height: 40px;
  border-bottom: 1px solid #dddddd;
  font-size: 14px;
  color: #555555;
  padding-top: 20px;
}
.s_content .s_content_c .s_info .s_title a {
  color: #000;
}
.s_content .s_content_c .s_info .screen {
  padding: 30px 0;
  margin-bottom: 10px;
}
.s_content .s_content_c .s_info .screen table {
  width: 100%;
  line-height: 53px;
  font-size: 12px;
}
.s_content .s_content_c .s_info .screen table tr {
  border: 1px solid #ddd;
  overflow: hidden;
}
.s_content .s_content_c .s_info .screen table th {
  border-right: 1px solid #dddddd;
  width: 90px;
  text-align: center;
  font-weight: bold;
  color: #555555;
}
.s_content .s_content_c .s_info .screen table td {
  padding-left: 10px;
}
.s_content .s_content_c .s_info .screen table td a {
  margin-right: 30px;
}
.s_content .s_content_c .s_info .screen table td a:hover {
  text-decoration: underline;
}
.s_content .s_content_c .s_info .screen table .t2 {
  background: #f3f4f4;
}
.s_content .s_content_c .s_info .fun {
  padding: 0 20px;
  font-size: 14px;
  color: #999999;
  height: 46px;
  line-height: 46px;
  overflow: hidden;
  margin-bottom: 10px;
}
.s_content .s_content_c .s_info .fun .sort {
  float: left;
}
.s_content .s_content_c .s_info .fun .sort a {
  padding: 8px 10px;
  margin: 5px;
  border: 1px solid #999;
  display: inline-block;
  line-height: 12px;
  border-radius: 2px;
}
.s_content .s_content_c .s_info .fun .sort a:hover {
  text-decoration: underline;
}
.s_content .s_content_c .s_info .fun .sort a i {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: url("../assets/images/ico1.png");
  position: relative;
  top: 3px;
}
.s_content .s_content_c .s_info .fun .sort a.s2 i {
  background: url("../assets/images/ico2.png");
}
.s_content .s_content_c .s_info .fun .sort a.s3 i {
  background: url("../assets/images/ico3.png");
}
.s_content .s_content_c .s_info .fun .swi {
  float: left;
  margin-left: 20px;
}
.s_content .s_content_c .s_info .fun .swi a {
  display: inline-block;
  width: 38px;
  height: 16px;
  background: #909090;
  border: 2px solid #999;
  border-radius: 10px;
  vertical-align: middle;
}
.s_content .s_content_c .s_info .fun .swi a i {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
}
.s_content .s_content_c .s_info .total {
  float: right;
  color: #000;
}
.s_content .s_content_c .s_info .total span {
  color: #999;
}
.s_content .s_content_c .s_info .s_prod {
  overflow: hidden;
}
.s_content .s_content_c .s_info .s_prod ul {
  overflow: hidden;
  width: 1164px;
}
.s_content .s_content_c .s_info .s_prod ul li {
  width: 246px;
  height: 362px;
  margin-right: 45px;
  margin-bottom: 30px;
  float: left;
  position: relative;
}
.s_content .s_content_c .s_info .s_prod ul li img {
  width: 100%;
}
.s_content .s_content_c .s_info .s_prod ul li:hover .mask {
  display: block;
}
.s_content .s_content_c .s_info .pages {
  text-align: right;
  color: #a3a3a3;
}

.s_content .s_content_c .s_info .pages .tol {
  display: inline-block;
  width: 30px;
  height: 30px;
  color: #999;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
  margin: 0 3px;
}
.s_content .s_content_c .s_info .pages .cur {
  background: #9dafb8;
  color: #fff;
}
.s_content .s_content_c .s_info .pages .tol:hover {
  background: #9dafb8;
  color: #fff;
}
.cont {
  text-align: center;
}
</style>