<template>
  <div class="product">
    <div class="product-item" v-for="item in product" @click="jump(item.id)">
      <div class="product-img">
        <el-image :src="item.url" fit="fill"></el-image>
      </div>
      <h1>{{ item.name }}</h1>
      <h2>{{ item.price }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
          id: "1",
          url: "https://s4.ax1x.com/2021/12/27/TBUWmd.png",
          name: "t1",
          price: "t1a",
        },
        {
          id: "2",
          url: "",
          name: "t2",
          price: "t2a",
        },
        {
          id: "3",
          url: "https://s4.ax1x.com/2021/12/27/TBUWmd.png",
          name: "t3",
          price: "t3a",
        },
        {
          id: "4",
          url: "",
          name: "t4",
          price: "t4a",
        },
        {
          id: "4",
          url: "",
          name: "t4",
          price: "t4a",
        },
      ],
    };
  },
  methods: {
    jump(a) {
      console.log(a);
      this.$router.push({ name: "item", params: { id: a } });
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