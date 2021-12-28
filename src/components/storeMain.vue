<template>
  <div class="main">
    <div class="info">
      <div class="info-img">
          <el-image fit='fill'></el-image>
      </div>
      <div class="info-text">
        <p>
          {{storeInfo.briefinfo}}
        </p>
        <dl>
          <dt>Address:</dt>
          <dd>{{storeInfo.address}}</dd>
          <dt>Telephone:</dt>
          <dd>{{storeInfo.telephone}}</dd>
          <dt>Business Hours:</dt>
          <dd>{{storeInfo.businesshours}}</dd>
          <dt>Off Days:</dt>
          <dd>{{storeInfo.offdays}}</dd>
        </dl>
      </div>
    </div>
    <div class="location">
      <!-- <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23116.66046040093!2d114.32302671984321!3d30.540484060372005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x342eafc7609fc5f5%3A0x589c52e877def5a!2z6buE6bmk5qW8!5e0!3m2!1szh-CN!2sus!4v1640668005852!5m2!1szh-CN!2sus"
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
  data() {
    return {
      storeInfo:{
        briefinfo: "briefinfobriefinfo",
        address: "addressaddressaddress",
        telephone: "telephonetelephonetelephone",
        businesshours: "businesshoursbusinesshours",
        offdays: "offdaysoffdaysoffdays"
      }
    };
  },
};
</script>

<style>
.main {
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