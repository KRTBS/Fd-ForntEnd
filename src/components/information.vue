<template>
  <div class="infomation">
    <a class="infomation-item" href="#" v-for="item in information">
      <div class="infoImg">
        <el-image :src="item.url" fit="fill"></el-image>
      </div>
      <h1>{{ item.title }}</h1>
      <h2>{{ item.time }}</h2>
    </a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      information:[
        {
          id:"1",
          url:"https://s4.ax1x.com/2021/12/27/TBUWmd.png",
          title:"t1",
          time:"t1a"
        },
        {
          id:"2",
          url:"",
          title:"t2",
          time:"t2a"
        },
        {
          id:"3",
          url:"https://s4.ax1x.com/2021/12/27/TBUWmd.png",
          title:"t3",
          time:"t3a"
        },
        {
          id:"4",
          url:"",
          title:"t4",
          time:"t4a"
        },
      ]
    }
  }
};
</script>

<style scoped>
.infomation {
  width: 1400px;

  height: auto;

  display: flex;
  flex-wrap: wrap;
  margin: 150px auto;
  overflow: auto;

  justify-content: space-between;
  /* background-color: yellow; */
}
.infomation-item {
  display: block;
  text-decoration: none;
  color: #757575;
  width: 400px;
  height: 450px;
  margin-bottom: 50px;
  background-color: rgb(235, 235, 235);
}
.infoImg {
  width: 400px;
  height: 350px;
}
.infomation-item > h1 {
  margin: 0px;
  height: 49px;
  font-size: 25px;
  font-weight: 200;
  padding-left: 20px;
  line-height: 49px;
  border-bottom: 1px solid#d6d4cd;
}
.infomation-item > h2 {
  margin: 0px;
  height: 50px;
  font-size: 16px;
  font-weight: 200;
  padding-left: 20px;
  line-height: 50px;
}
</style>