<template>
  <div class="main">
    <div class="carousel">
      <div class="block">
        <el-carousel height="500px" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="item in datac" :key="item.value">
            <div class="carousel-img">
              <el-image :src="item.url" fit='fill'></el-image>
            </div>
            <div class="carousel-text">
              <div>{{ item.text }}</div>
              <a class="btn" href="#/product"> View More </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="white-one"></div>

    <div class="about">
      <div class="about-img">
        <el-image :src="infod.url" fit='fill'></el-image>
      </div>
      <div class="about-text">
        <h1>{{infod.title}}</h1>
        <p>
          {{infod.content}}
        </p>
      </div>
    </div>

    <div class="white-one"></div>

    <div class="info">
      <a class="info-item" href="#" v-for="item in information">
        <div class="infoImga">
          <el-image :src="item.url" fit='fill'></el-image>
        </div>
        <h1>{{item.title}}</h1>
        <h2>{{item.time}}</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datac: [
        {
          url: "http://localhost:8080/fileSave/a261a9d2-bd84-4606-8409-98452be60524.jpg",
          text: "title1",
        },
        {
          url: "http://localhost:8080/fileSave/cc85ed0f-c68e-44f6-8383-458b61cbf5be.jpg",
          text: "title2",
        },
        {
          url: "http://localhost:8080/fileSave/ba1d66a5-fcdb-4dfe-a3fe-cc343c31cff5.jpg",
          text: "title3",
        },
        {
          url: "http://localhost:8080/fileSave/6132c472-3111-4c00-8bc3-64470c4fe81b.jpg",
          text: "title4",
        },
      ],

      infod: {
        url: "http://localhost:8080/fileSave/a9072fbb-c1e1-4abc-b05d-74506044aff8.jpg",
        title: "cnmcnmcnmcnmcnmcnm",
        content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent"
      },
      url: "http://localhost:8080/fileSave/a9072fbb-c1e1-4abc-b05d-74506044aff8.jpg",

      information:[
        {
          url:"https://s4.ax1x.com/2021/12/27/TBUWmd.png",
          title:"title1",
          time:"time"
        },
        {
          url:"",
          title:"title2",
          time:"time"
        },
        {
          url:"https://s4.ax1x.com/2021/12/27/TBUWmd.png",
          title:"title3",
          time:"time"
        },
        {
          url:"",
          title:"title4",
          time:"time"
        },
      ]

    };
  },
  methods: {
    aa() {},
  },
};
</script>

<style scoped>
.main {
  width: 1400px;
  padding: 150px 60px;
  margin: 0 auto;
  /* background-color: cornsilk; */
}
.carousel {
  width: 1400px;
  height: 500px;
  /* background-color: crimson; */
}
.carousel-img {
  width: 960px;
  height: 500px;
  float: left;
  /* background-color: crimson; */
}
.carousel-text {
  width: 440px;
  height: 500px;
  float: right;
  background-color: #354345;
}
.carousel-text div {
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: 200;
  line-height: 50px;
  height: 50px;
  margin: 180px auto;
}
.white-one {
  width: 1400px;
  height: 250px;
  background-color: white;
}
.about {
  width: 1400px;
  height: 740px;
  position: relative;
  /* background-color: brown; */
}
.about-img {
  width: 780px;
  height: 100%;
  /* background-color: burlywood; */
}
.about-text {
  width: 470px;
  height: 420px;
  padding: 115px;
  background-color: #f6f4ed;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translate(0%, -50%);
}
.about-text h1{
  font-size: 32px;
  line-height: 50px;
  height: 50px;
  font-weight: 200;
}
.about-text p{
  font-size: 16px;
  line-height: 25px;
  font-weight: 200;
  word-wrap: break-word;
  word-break: break-all;
}
.info {
  width: 1400px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  /* background-color: yellow; */
}
.info-item {
  display: block;
  text-decoration: none;
  color: #757575;
  width: 300px;
  height: 400px;
  background-color: rgb(235, 235, 235);
}
.infoImga {
  width: 300px;
  height: 300px;
}
.info-item > h1 {
  margin: 0px;
  height: 49px;
  font-size: 25px;
  font-weight: 200;
  padding-left: 20px;
  line-height: 49px;
  border-bottom: 1px solid#d6d4cd;
}
.info-item > h2 {
  margin: 0px;
  height: 50px;
  font-size: 16px;
  font-weight: 200;
  padding-left: 20px;
  line-height: 50px;
}
.btn {
  font-size: 25px;
  text-align: center;
  font-weight: 200;
  text-decoration: none;
  line-height: 50px;
  color: white;
  width: 200px;
  height: 50px;
  display: block;
  border-radius: 25px;
  border: 1px solid #d6d4cd;
  margin-bottom: 50px;
  position: fixed;
  bottom: 100px;
  margin-left: 220px;
  transform: translateX(-50%);
  background-color: transparent;
}
</style>