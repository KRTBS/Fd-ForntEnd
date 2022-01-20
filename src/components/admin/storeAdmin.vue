<template>
  <div>
    <div class="home">
      <div class="inputSrc">
        <span> Image URL </span>
        <div>
          <el-input
            v-model="information.imgsrc"
            placeholder="Require 640 x480 size image"
          ></el-input>
        </div>
      </div>

      <div class="inputInfo">
        <span> Brief Information </span>
        <div>
          <el-input
            v-model="information.briefinfo"
            placeholder="Input Brief Information"
          ></el-input>
        </div>
      </div>

      <div class="inputAddress">
        <span> Address </span>
        <div>
          <el-input
            v-model="information.address"
            placeholder="Input Address"
          ></el-input>
        </div>
      </div>

      <div class="inputTel">
        <span> Telephone </span>
        <div>
          <el-input
            v-model="information.telephone"
            placeholder="Input Telephone"
          ></el-input>
        </div>
      </div>

      <div class="inputBH">
        <span> Business Hours </span>
        <div>
          <el-input
            v-model="information.businesshours"
            placeholder="Input Business Hours"
          ></el-input>
        </div>
      </div>

      <div class="inputOffDay">
        <span> Off Days </span>
        <div>
          <el-input
            v-model="information.offdays"
            placeholder="Input Off Days"
          ></el-input>
        </div>
      </div>

      <div class="inputMapSrc">
        <span> Google Map Src </span>
        <div>
          <el-input
            v-model="information.googlemapsrc"
            placeholder="Input Google Map Src"
          ></el-input>
        </div>
      </div>

      <div class="btn">
        <div>
          <el-button type="primary" @click="submit()">Submit</el-button>
        </div>
      </div>
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
      information: {
        imgsrc: "",
        briefinfo: "",
        address: "",
        telephone: "",
        businesshours: "",
        offdays: "",
        googlemapsrc: "",
      },
    };
  },
  methods: {
    getStoreInfo() {
      this.$axios
        .get('/api/open/information/store', {
          withCredentials: false
        })
        .then((response) => {
          this.information = response.data.data
        })
    },
    submit(){
      var that = this;
      this.$axios
        .put("/api/auth/information/store",this.information, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.getStoreInfo();
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    }
  },
};
</script>

<style scoped>
.home {
  width: 1000px;
  margin: auto;
  position: relative;
}
.inputSrc span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputSrc div {
  margin-bottom: 10px;
}
.inputInfo span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputInfo div {
  margin-bottom: 10px;
}
.inputAddress span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputAddress div {
  margin-bottom: 10px;
}
.inputTel span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputTel div {
  margin-bottom: 10px;
}
.inputBH span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputBH div {
  margin-bottom: 10px;
}
.inputOffDay span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputOffDay div {
  margin-bottom: 10px;
}
.inputMapSrc span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputMapSrc div {
  margin-bottom: 10px;
}
.btn div {
  width: 98px;
  margin-left: auto;
  margin-top: 20px;
  margin-right: auto;
}
</style>