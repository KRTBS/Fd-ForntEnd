<template>
  <div>
    <div class="search">
      <el-input
        v-model="search"
        placeholder="Search"
        @input="searchByName"
      ></el-input>
    </div>

    <div class="product">
      <div
        class="product-item"
        v-for="item in productlist"
        @click="jump(item.id)"
      >
        <div class="product-img">
          <el-image style="width: 100%; height: 100%" :src="item.imgsrc" fit="cover"></el-image>
        </div>
        <h1 v-text="item.name"></h1>
        <h2 v-text="'¥' + item.price"></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getProductList()
  },
  data () {
    return {
      productlist: [],
      fullProductList: [],
      search: ''
    }
  },
  methods: {
    jump (id) {
      this.$router.push({ name: 'item', params: { id: id } })
    },
    getProductList () {
      this.$axios
        .get('/api/open/product/list', {
          withCredentials: false
        })
        .then((response) => {
          this.productlist = response.data.data
          this.fullProductList = response.data.data
        })
    },
    searchByName (val) {
      this.productlist = []
      if (val) {
        for (const index in this.fullProductList) {
          if (this.fullProductList[index].name.search(val) != -1) {
            this.productlist.push(this.fullProductList[index])
          }
        }
      } else {
        this.productlist = this.fullProductList
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search{
  width: 1400px;
  margin: 0 auto;
  margin-top: 150px;
  display: flex;
  justify-content: flex-end;
  /deep/.el-input{
    width: 400px;
  }
}
.product {
  width: 1400px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin: 150px auto;
  margin-top: 50px;
  overflow: auto;
  justify-content: flex-start;
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
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 12px 15px -15px #000;
    transform: rotateX(5deg);
  }
  &:nth-of-type(n) {
    margin-right: 100px;
  }
  &:nth-of-type(3n) {
    margin-right: 0px;
  }
  h1 {
    text-align: center;
    margin: 0px;
    height: 49px;
    font-size: 25px;
    font-weight: 200;
    line-height: 50px;
    margin-top: 20px;
  }
  h2 {
    text-align: center;
    margin: 0px;
    height: 50px;
    font-size: 16px;
    font-weight: 200;
    line-height: 50px;
    margin-bottom: 20px;
  }
}
.product-img {
  width: 400px;
  height: 400px;
}
</style>
