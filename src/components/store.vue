<template>
  <div class="storeMain">
    <div class="info">
      <div class="info-img">
        <el-image style="width: 100%; height: 100%" :src="storeInfo.imgsrc" fit="cover">
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
    <!-- <div class="location"> -->
<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14325.274062699591!2d-80.32532675285643!3d26.153754261542954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d908feeaeded1f%3A0x29c1bf6101ce3a42!2sSawgrass%20Mills!5e0!3m2!1szh-CN!2shk!4v1650027426532!5m2!1szh-CN!2shk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
    <!-- </div> -->
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
          console.log(this.storeInfo)
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
