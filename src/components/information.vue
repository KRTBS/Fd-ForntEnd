<template>
  <div class="infomation">
    <a class="infomation-item" @click="jump(item.id)" v-for="(item,index) in info" :key="index">
      <div class="infoImg">
        <el-image :src="item.imgsrc" fit="fill">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <h1 v-text="item.title"></h1>
      <h2 v-text="item.time"></h2>
    </a>
  </div>
</template>

<script>
export default {
  created () {
    this.getInformationList()
  },
  data () {
    return {
      info: []
    }
  },
  methods: {
    getInformationList () {
      this.$axios
        .get('/api/open/information/all', {
          withCredentials: false
        })
        .then((response) => {
          this.info = response.data.data
        })
    },
    jump (a) {
      this.$router.push({ name: 'article', params: { id: a } })
    }
  }
}
</script>

<style scoped>
.infomation {
  cursor: pointer;
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

.infomation-item:last-child:nth-child(2n - 1) {
  margin-right: calc(500px);
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
