<template>
  <el-aside width="300px">
    <div class="aside-head"></div>
    <el-menu default-active="welcome" class="el-menu-vertical-demo" router>
      <el-menu-item index="welcome">
        <span slot="title">welcome</span>
      </el-menu-item>

      <el-menu-item index="carousel">
        <span slot="title">Carousel</span>
      </el-menu-item>

      <el-menu-item index="beiefinfo">
        <span slot="title">BeiefInfo </span>
      </el-menu-item>

      <!-- <el-submenu index="2">
        <template slot="title">
          <span slot="title">MainPage</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">Carousel</el-menu-item>
          <el-menu-item index="2-2">BeiefInfo</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->

      <el-menu-item index="product">
        <span slot="title">Product</span>
      </el-menu-item>

      <el-menu-item index="5">
        <span slot="title">About</span>
      </el-menu-item>

      <el-menu-item index="6">
        <span slot="title">Store</span>
      </el-menu-item>

      <el-menu-item index="7">
        <span slot="title">Information</span>
      </el-menu-item>

      <el-menu-item index="8">
        <span slot="title">OrderList</span>
      </el-menu-item>

      <el-menu-item index="9">
        <span slot="title">LoginOut</span>
      </el-menu-item>

      <!-- <el-submenu index="9">
        <template slot="title">
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1">选项1</el-menu-item>
          <el-menu-item index="9-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
  </el-aside>
</template>

<script>
export default {};
</script>

<style>
.el-aside {
  height: 100vh;
  background-color: bisque;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.aside-head {
  height: 60px;
}
</style>