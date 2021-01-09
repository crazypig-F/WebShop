<template>
  <div class="outer0">
    <ul class="imgList">
      <li style="z-index: 1">
        <a href="javascript:void(0);"><img :src="now_page" alt="" /></a>
      </li>
      <li>
        <a href="javascript:void(0);"
          ><img src="../assets/images/img12.png" alt=""
        /></a>
      </li>
      <li>
        <a href="javascript:void(0);"
          ><img src="../assets/images/img13.png" alt=""
        /></a>
      </li>
    </ul>
    <div class="focusList">
      <span
        :class="item.class_a"
        v-for="item in act"
        :key="item.id"
        @click="choose(item, act)"
        style="height: 10px"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      act: [
        { class_a: "active", name: 1 },
        { class_a: "", name: 2 },
        { class_a: "", name: 3 },
      ],
      now_page: require("../assets/images/img11.png"),
    };
  },
  methods: {
    choose(item, act) {
      if (item.name == 1) {
        for (let index = 0; index < act.length; index++) {
          act[index].class_a = "";
        }
        this.now_page = require("../assets/images/img11.png");
        item.class_a = "active";
      } else if (item.name == 2) {
        for (let index = 0; index < act.length; index++) {
          act[index].class_a = "";
        }
        this.now_page = require("../assets/images/img12.png");
        item.class_a = "active";
      } else {
        for (let index = 0; index < act.length; index++) {
          act[index].class_a = "";
        }
        this.now_page = require("../assets/images/img13.png");
        item.class_a = "active";
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
img {
  vertical-align: middle;
}
.outer0 {
  position: relative;
  width: 1226px;
  height: 460px;
  margin: 60px auto;
}
.outer0 .imgList li {
  position: absolute;
  top: 50%;
  margin-top: -235px;
  width: 1226px;
  height: 460px;
}
.outer0 .imgList li img {
  width: 100%;
  height: 100%;
}
.outer0 .focusList {
  position: absolute;
  bottom: 50px;
  right: 600px;
  z-index: 2;
}
.outer0 .focusList span {
  float: left;
  width: 20px;
  height: 4px;
  background-color: #c78a49;
  border-radius: 1px;
  margin-left: 10px;
}
.outer0 .focusList span.active {
  background-color: #fff;
}
</style>