<template>
  <Header></Header>
  <div class="outer10">
    <div class="inter1">
      <div class="inter11">
        <router-link to="/index" tag="a">首页</router-link> > <a href="javascript:void(0);">所有商品</a> >
        <a href="javascript:void(0);">{{goods.bookName}}</a>
      </div>
    </div>
    <div class="inter2">
      <div class="inter21">
        <a href=""><img :src=goods.bookPoster alt="" /></a>
        <a href="" class="small"
          ><img :src=goods.bookPoster alt=""
        /></a>
      </div>
      <div class="inter22">
        <h1>{{goods.bookName}}</h1>
        <p>精选材料，设计大师设计，做工精细，摆件中的艺术品</p>
        <div class="inter221">
          <span class="s1">￥</span>
          <span class="s2">{{goods.bookPrice}}</span>
          已售出<span class="s3">0</span>件
        </div>
        <h3>选择数量</h3>
        <div class="inter222">
          <div class="inter2221">
            <a href="javascript:void(0);" @click="sub" class="sub"> - </a>
            <input type="text" :value=number class="count" />
            <a href="javascript:void(0);" @click="add" class="add">+</a>
          </div>

          件（库存<span>2344</span>件）
          <a class="car" @click=addToCart>加入购物车</a>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "./header";
import Footer from "./footer"; 
import { mapState } from "vuex";
import axios from 'axios';
export default {
  data(){
    return{
      goods: {},
      number: 1,
      id: "",
      picUrl: ""
    }
  },
  created(){
    if (null != this.$route.params.itemId) {
      this.id = this.$route.params.itemId
    }
    this.get()
  },
  methods: {
    add(){
      if(this.number < 100){
        this.number += 1
      }
    },
    sub(){
      if(this.number > 1){
        this.number -= 1
      }
    },
    addToCart() {
      var params = new URLSearchParams();
      params.append("userId", 1);
      params.append("goodsId", this.id)
      params.append("goodsNum", this.number);
      axios.post("http://www.molycao.cn:8088/putcart",params).then (res => {
        if (res.status != 200) {
          alert("加入购物车失败")
        } else {
          alert("购物车添加成功")
          location.reload();
        }
      })
    },
    get() {
      axios.get("http://www.molycao.cn:8088/getBookwithid?bookId=" + this.id).then (res => {
        if (res.status == 200) {
          this.goods = res.data.extend.book
        }
      })
    }
  },
  components: {
    Header,
    Footer,
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.outer10 {
  margin: 60px auto;
  width: 1140px;
  height: 803px;
  background-color: #ffffff;
}
.outer10 .inter1 {
  width: 1140px;
  height: 91px;
  /*background-color: yellow;*/
}
.outer10 .inter1 .inter11 {
  width: 1108px;
  height: 41px;
  line-height: 41px;
  /*background-color: #FF5000;*/
  padding-top: 30px;
  border-bottom: 1px solid #cccccc;
}
.outer10 .inter1 .inter11 a {
  font-size: 14px;
  color: #000000;
}
.outer10 .inter1 .inter11 span {
  font-size: 14px;
  color: #555555;
}
.outer10 .inter2 {
  width: 1108px;
  height: 581px;
  margin-top: 10px;
  border-bottom: 1px solid #000;
}
.outer10 .inter2 .inter21 {
  float: left;
  width: 555px;
  height: 581px;
}
.outer10 .inter2 .inter21 img {
  margin-right: 100px;
  margin-bottom: 30px;
}
.outer10 .inter2 .inter21 .small img {
  /*float: left;*/
  width: 75px;
  height: 75px;
}

.outer10 .inter2 .inter22 {
  float: left;
  width: 400px;
  height: 260px;
  /*background-color: yellow;*/
  margin-left: 50px;
  color: #555;
}
.outer10 .inter2 .inter22 h1 {
  font-size: 18px;
  font-weight: 700;
}
.outer10 .inter2 .inter22 p {
  font-size: 14px;
  margin-top: 7px;
  line-height: 22px;
  color: #999;
}
.outer10 .inter2 .inter22 .inter221 {
  margin-top: 30px;
  font-size: 14px;
}
.outer10 .inter2 .inter22 .inter221 .s1,
.s2 {
  font-size: 20px;
  margin-right: 14px;
  font-weight: 700;
  color: #db2e2e;
}
.outer10 .inter2 .inter22 h3 {
  font-size: 14px;
  padding-top: 14px;
  padding-bottom: 4px;
}
.outer10 .inter2 .inter22 .inter222 {
  width: 400px;
  height: 28px;
}
.outer10 .inter2 .inter22 .inter222 .inter2221 {
  border: 0.5px solid #999;
  width: 60px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  text-align: center;
}
.outer10 .inter2 .inter22 .inter222 .count {
  display: inline-block;
  width: 20px;
  height: 14px;
  border: none;
  text-align: center;
  outline: none;
}
.outer10 .inter2 .inter22 .inter222 .car {
  text-align: center;
  width: 280px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  display: block;
  margin-top: 20px;
  margin-left: 0;
  border-radius: 3px;
  background-color: #c78a49;
  color: #ffffff;
}
</style>