<template>
  <div class="item">
    <div class="item-main">
      <div class="itemimg">
        <el-image :src=commodity.src fit="fill"></el-image>
      </div>
      <div class="itemtext">
        <h1>{{id}}</h1>
        <h2>¥{{commodity.price}}</h2>
        <p>{{commodity.briefIntroduction}}</p>
        <div class="select">
          <el-radio-group v-model="radio">
            <el-radio-button :label=select v-for="(select, index) in commodity.select" :key="index"></el-radio-button>
          </el-radio-group>
        </div>
        <div class="number">
          <el-input-number
            v-model="num"
            controls-position="right"
            :min="1"
          ></el-input-number>
        </div>
        <div class="submit">
          <el-button round @click="add()">加入购物车</el-button>
        </div>
      </div>
    </div>
    <div class="introduction">{{commodity.FullIntroduction}}</div>
  </div>
</template>

<script>
export default {
  created() {
    // console.log("child component" + this.$route.params.id);
    this.id = this.$route.params.id;

    this.radio = this.commodity.select[0]
  },
  data() {
    return {
      id: "",
      num: 1,
      radio: "",
      commodity:{
        id:"",
        name:"i1",
        src:"https://s4.ax1x.com/2021/12/27/TBUWmd.png",
        price:"8888",
        briefIntroduction:"briefIntroductionbriefIntroductionbriefIntroduction",
        select:["小","中","大"],
        FullIntroduction:"FullIntroductionFullIntroductionFullIntroduction"
      }
    };
  },
  methods: {
    add(){

    }
    // aa(){
    //   var weekArray = [{
    //     name:'goushi',
    //     num:2
    //   },{
    //     name:'jiba',
    //     num:3
    //   }]
    //   localStorage.setItem('weekDay',JSON.stringify(weekArray));
    // },
    // bb(){
      // var wd = JSON.parse(localStorage.getItem('weekDay'));
      // wd.splice(0, 1)
      // console.log(wd)
  //     console.log(this.radio)
  //   }
  }
};
</script>

<style scoped>
* {
  font-weight: 200;
}
.item {
  width: 1280px;
  padding: 150px 60px;
  margin: 0 auto;
}
.item-main {
  width: 100%;
  /* height: 700px; */
  background-color: rgb(250, 250, 250);
  *zoom: 1;
}
.item-main::after,
.item-main::before {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.itemimg {
  width: 620px;
  height: 620px;
  float: left;
  /* background-color: burlywood; */
}
.itemtext {
  width: 580px;
  height: auto;
  padding: 40px 20px;
  /* padding-top: 40px;
  padding-bottom: 40px; */
  /* background-color: aqua; */
  float: right;
}
.itemtext h1 {
  font-size: 32px;
  margin: 25px 0px;
}
.itemtext h2 {
  font-size: 25px;
  margin: 25px 0px;
}
.itemtext p {
  font-size: 16px;
  word-wrap: break-word;
  word-break: break-all;
  margin: 25px 0px;
}
.select {
  margin: 25px 0px;
}
.number {
  margin: 25px 0px;
}
.submit {
  margin: 25px 0px;
}
.introduction {
  font-size: 20px;
  width: 1180px;
  padding: 150px 50px;
  margin: 0 auto;
  background-color: blueviolet;
}
</style>