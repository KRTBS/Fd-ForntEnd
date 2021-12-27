<template>
  <div>
    <div class="header">
      <div class="nav-icon">
        <a href="#">
          <i style="color: #757575" class="el-icon-shopping-cart-full"></i>
        </a>
      </div>
      <div class="nav-icon">
        <a href="#">
          <i style="color: #757575" class="el-icon-user"></i>
        </a>
      </div>
      <div class="nav-item">
        <a href="#"> SERVICE </a>
      </div>
      <div class="nav-item">
        <a href="#"> INFORMATION </a>
      </div>
      <div class="nav-item">
        <a href="#"> STORE </a>
      </div>
      <div class="nav-item">
        <a href="#"> ABOUT </a>
      </div>
      <div class="nav-item">
        <a href="#"> PRODUCTS </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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