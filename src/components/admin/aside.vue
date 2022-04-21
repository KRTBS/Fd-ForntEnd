<template>
  <el-aside width="300px">
    <div class="aside-head"></div>
    <el-menu default-active="welcome" class="el-menu-vertical-demo" router>
      <el-menu-item index="/welcome">
        <span slot="title">Welcome</span>
      </el-menu-item>

      <el-menu-item index="/carousel">
        <span slot="title">Carousel</span>
      </el-menu-item>

      <el-menu-item index="/beiefinfo">
        <span slot="title">BeiefInfo </span>
      </el-menu-item>

      <el-menu-item index="/productAdmin">
        <span slot="title">Product</span>
      </el-menu-item>

      <el-menu-item index="5" style="display:none">
        <span slot="title">About</span>
      </el-menu-item>

      <el-menu-item index="/storeAdmin">
        <span slot="title">Store</span>
      </el-menu-item>

      <el-menu-item index="/info">
        <span slot="title">Information</span>
      </el-menu-item>

      <el-menu-item index="/orderForm">
        <span slot="title">OrderList</span>
      </el-menu-item>

      <el-menu-item index="/">
        <span slot="title">LoginOut</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
export default {}
</script>

<style>
.el-aside {
  height: 100vh;
  /* background-color: bisque; */
  color: #333;
  text-align: center;
  line-height: 200px;
}
.aside-head {
  height: 85px;
}
</style>
