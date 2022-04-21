<template>
  <div class="item">
    <div class="item-main">
      <div class="itemimg">
        <el-carousel height="620px">
          <el-carousel-item v-for="(item, index) in productImg" :key="index">
            <el-image style="width: 100%; height: 100%" :src="item.imgsrc" fit="fill">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="itemtext">
        <h1 v-text="product.name"></h1>
        <h2 v-text="'¥' + product.price"></h2>
        <p v-text="product.briefinfo"></p>
        <div class="select">
          <el-radio-group v-model="radio">
            <el-radio-button
              :label="item.select"
              v-for="(item, index) in productSelection"
              :key="index"
            ></el-radio-button>
          </el-radio-group>
        </div>
        <div class="number">
          <el-input-number
            v-model="num"
            controls-position="right"
            :min="1"
          ></el-input-number>
        </div>
        <div class="submit">
          <el-button round @click="add()">加入购物车</el-button>
        </div>
      </div>
    </div>
    <div class="introduction" v-html="product.fullinfo"></div>
  </div>
</template>

<script>
export default {
  created () {
    this.id = this.$route.params.id

    this.getProduct(this.id)
    this.getProductImg(this.id)
    this.getProductSelection(this.id)

    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  data () {
    return {
      id: '',

      num: 1,
      radio: '',

      product: {},
      productImg: [],
      productSelection: [],

      orderForm: {
        itemID: '',
        itemName: '',
        itemPrice: '',
        itemSelection: '',
        itemNum: '',
        subtotal: ''
      }
    }
  },
  methods: {
    add () {
      this.orderForm.itemID = this.id
      this.orderForm.itemName = this.product.name
      this.orderForm.itemPrice = this.product.price
      this.orderForm.itemSelection = this.radio
      this.orderForm.itemNum = this.num
      this.orderForm.subtotal =
        this.orderForm.itemNum * this.orderForm.itemPrice

      if (localStorage.getItem('orderFormList') == null) {
        var orderFormList = []
        orderFormList.push(this.orderForm)

        localStorage.setItem('orderFormList', JSON.stringify(orderFormList))
      } else {
        var orderFormList = JSON.parse(localStorage.getItem('orderFormList'))
        orderFormList.push(this.orderForm)

        localStorage.setItem('orderFormList', JSON.stringify(orderFormList))
      }
    },
    getProduct (id) {
      this.$axios
        .get('/api/open/product/' + id, {
          withCredentials: false
        })
        .then((response) => {
          this.product = response.data.data
        })
    },
    getProductImg (id) {
      this.$axios
        .get('/api/open/product/carousel/' + id, {
          withCredentials: false
        })
        .then((response) => {
          this.productImg = response.data.data
        })
    },
    getProductSelection (id) {
      this.$axios
        .get('/api/open/product/selection/' + id, {
          withCredentials: false
        })
        .then((response) => {
          this.productSelection = response.data.data
          this.radio = response.data.data[0].select
        })
    }
  }
}
</script>

<style scoped>
* {
  font-weight: 200;
}
.item {
  width: 1280px;
  padding: 150px 60px;
  margin: 0 auto;
}
.item-main {
  width: 100%;
  background-color: rgb(250, 250, 250);
  *zoom: 1;
}
.item-main::after,
.item-main::before {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.itemimg {
  width: 620px;
  height: 620px;
  float: left;
  background-color: rgb(250, 250, 250);
}
.itemtext {
  width: 580px;
  height: auto;
  padding: 40px 20px;
  float: right;
}
.itemtext h1 {
  font-size: 32px;
  margin: 25px 0px;
}
.itemtext h2 {
  font-size: 25px;
  margin: 25px 0px;
}
.itemtext p {
  font-size: 16px;
  word-wrap: break-word;
  word-break: break-all;
  margin: 25px 0px;
}
.select {
  margin: 25px 0px;
}
.number {
  margin: 25px 0px;
}
.submit {
  margin: 25px 0px;
}
.introduction {
  font-size: 20px;
  width: 1180px;
  padding: 150px 50px;
  margin: 0 auto;
  background-color: rgb(250, 250, 250);
}
</style>
