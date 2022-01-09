<template>
  <div class="product">
    <div class="product-item" v-for="item in productlist" @click="jump(item.id)">
      <div class="product-img">
        <el-image :src="item.imgsrc" fit="fill"></el-image>
      </div>
      <h1 v-text="item.name" ></h1>
      <h2 v-text="'¥' + item.price"></h2>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getProductList();
  },
  data() {
    return {
      productlist: [],
    };
  },
  methods: {
    jump(id) {
      this.$router.push({ name: "item", params: { id: id } });
    },
    getProductList() {
      this.$axios
        .get("/api/open/product/list", {
          withCredentials: false,
        })
        .then((response) => {
          this.productlist = response.data.data;
        });
    },
  },
};
</script>

<style scoped>
.product {
  width: 1400px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin: 150px auto;
  overflow: auto;
  justify-content: space-between;
  /* background-color: yellow; */
}
.product-item {
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: #757575;
  width: 400px;
  height: 530px;
  margin-bottom: 50px;
  background-color: rgb(235, 235, 235);
}

.product-item:last-child:nth-child(2n - 1) {
  margin-right: calc(500px);
}
.product-img {
  width: 400px;
  height: 400px;
  /* background-color: aqua; */
}
.product-item > h1 {
  text-align: center;
  margin: 0px;
  height: 49px;
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
  margin-top: 20px;
}
.product-item > h2 {
  text-align: center;
  margin: 0px;
  height: 50px;
  font-size: 16px;
  font-weight: 200;
  line-height: 50px;
  margin-bottom: 20px;
}
</style>