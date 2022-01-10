<template>
  <div class="storeMain">
    <div class="info">
      <div class="info-img">
        <el-image :src="storeInfo.imgsrc" fit="cover">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="info-text">
        <p v-text="storeInfo.briefinfo"></p>
        <dl>
          <dt>Address:</dt>
          <dd v-text="storeInfo.address"></dd>
          <dt>Telephone:</dt>
          <dd v-text="storeInfo.telephone"></dd>
          <dt>Business Hours:</dt>
          <dd v-text="storeInfo.businesshours"></dd>
          <dt>Off Days:</dt>
          <dd v-text="storeInfo.offdays"></dd>
        </dl>
      </div>
    </div>
    <div class="location">
      <!-- <iframe
        :src="storeInfo.googlemapsrc"
        width="1280"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe> -->
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getStoreInfo();
  },
  data() {
    return {
      storeInfo: {},
    };
  },
  methods: {
    getStoreInfo() {
      this.$axios
        .get("/api/open/information/store", {
          withCredentials: false,
        })
        .then((response) => {
          this.storeInfo = response.data.data;
        });
    },
  },
};
</script>

<style scoped>
.storeMain {
  width: 1280px;
  padding: 150px 60px;
  margin: 0 auto;
  /* background-color: cornsilk; */
}
.info {
  height: 480px;
}
.info-img {
  width: 640px;
  height: 480px;
  float: left;
  /* background-color: blue; */
}
.info-text {
  width: 500px;
  height: 480px;
  padding-left: 140px;
  float: right;
  background-color: rgb(250, 250, 250);
}
.info-text p {
  display: block;
  font-size: 16px;
  line-height: 25px;
  font-weight: 200;
  word-wrap: break-word;
  word-break: break-all;
  margin-top: 80px;
  margin-bottom: 50px;
}
.info-text dl dd {
  font-weight: 200;

  padding: 0 0 0 6em;
  display: block;
}
.info-text dl dt {
  font-weight: 200;
  position: relative;
  top: 21px;
}
.location {
  margin-top: 150px;
  width: 1280px;
  height: 600px;
}
</style>