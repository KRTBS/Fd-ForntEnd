<template>
  <div>
    <div class="header">

      <a class="nav-img" href="#/">
          <img src="https://s3.bmp.ovh/imgs/2021/12/3ace3aa98a78b9bd.png">
      </a>

      <div class="nav-icon">
        <a href="#/cart">
          <i style="color: #757575" class="el-icon-shopping-cart-full"></i>
        </a>
      </div>
      <div class="nav-icon">
        <a href="#">
          <i style="color: #757575" class="el-icon-user"></i>
        </a>
      </div>
      <!-- <div class="nav-item">
        <a href="#"> SERVICE </a>
      </div> -->
      <div class="nav-item">
        <a href="#/information"> INFORMATION </a>
      </div>
      <div class="nav-item">
        <a href="#/store"> STORE </a>
      </div>
      <div class="nav-item">
        <a href="#/about"> ABOUT </a>
      </div>
      <div class="nav-item">
        <a href="#/product"> PRODUCTS </a>
      </div>
      <div class="nav-item">
        <a href="#/manage"> MS </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  color: #757575;
  background-color: white;
  width: 1400px;
  height: 45px;
  margin: 0 auto;
  padding: 20px 60px;
  line-height: 45px;
  font-size: 25px;
}
.nav-img {
  float: left;
  display: inline-block;
  height: 45px;
  margin-left: 15px;
  margin-right: 15px;
}
.nav-icon {
  float: right;
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
}
.nav-item {
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 15px;
  font-weight: 200;
  float: right;
}
.nav-item a{
  color: #757575;
  text-decoration: none;
}
</style>
