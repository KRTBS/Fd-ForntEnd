<template>
  <div class="main">
    <div class="carousel">
      <div class="block">
        <el-carousel height="500px" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="(item, index) in carousel" :key="index">
            <div class="carousel-img">
              <el-image style="width: 100%; height: 100%" :src="item.imgsrc" fit="cover">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div class="carousel-text">
              <div v-text="item.title"></div>
              <a class="btn" @click="carouseljump(item.itemid)"> Buy Now </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="white-one"></div>

    <div class="about">
      <div class="about-img">
        <el-image style="width: 100%; height: 100%" :src="intd.imgsrc" fit="fill">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="about-text">
        <h1 v-text="intd.title"></h1>
        <p v-html="intd.content"></p>
      </div>
    </div>

    <div class="white-one"></div>

    <div class="info">
      <a class="info-item" @click="jump(item.id)" v-for="item in info">
        <div class="infoImga">
          <el-image style="width: 100%; height: 100%" :src="item.imgsrc" fit="cover">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <h1 v-text="item.title"></h1>
        <h2 v-text="item.time"></h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getInformation()
    this.getBriefIntroduction()
    this.getCarousel()

    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  data () {
    return {
      carousel: [],
      intd: [],
      info: []
    }
  },
  methods: {
    jump (id) {
      this.$router.push({ name: 'article', params: { id: id } })
    },
    carouseljump (id) {
      this.$router.push({ name: 'item', params: { id: id } })
    },
    getInformation () {
      this.$axios
        .get('/api/open/information/index', {
          withCredentials: false
        })
        .then((response) => {
          this.info = response.data.data
        })
    },
    getBriefIntroduction () {
      this.$axios
        .get('/api/open/introduction/index', {
          withCredentials: false
        })
        .then((response) => {
          this.intd = response.data.data[0]
        })
    },
    getCarousel () {
      this.$axios
        .get('/api/open/carousel', {
          withCredentials: false
        })
        .then((response) => {
          this.carousel = response.data.data
        })
    }
  }
}
</script>

<style lang="less" scoped>
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
  h1 {
    font-size: 32px;
    line-height: 50px;
    height: 50px;
    font-weight: 200;
  }
}
.about-text p {
  font-size: 16px;
  line-height: 25px;
  font-weight: 200;
  word-wrap: break-word;
  word-break: break-all;
}
.info {
  cursor: pointer;
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
  transition: all 0.5s;
  &:hover{
    box-shadow:0px 12px 15px -15px #000;
    transform: rotateX(5deg);
  }
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
  cursor: pointer;
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
  transition: all 0.5s;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: #757575;
  }
}
</style>
