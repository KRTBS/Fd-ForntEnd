<template>
  <div>
    <div class="header">
      <div>
        <a class="nav-img" href="#/">
          <span>Takeaway</span>
        </a>
      </div>
      <div>
        <div class="nav-item">
          <a href="#/admin" v-show="adminButtonDisplayFlag"> ADMIN </a>
        </div>
        <div class="nav-item">
          <a href="#/product"> PRODUCTS </a>
        </div>
        <div class="nav-item" style="display: none">
          <a href="#/about"> ABOUT </a>
        </div>
        <div class="nav-item">
          <a href="#/store"> STORE </a>
        </div>
        <div class="nav-item">
          <a href="#/information"> INFORMATION </a>
        </div>
        <div class="nav-icon">
          <a @click="login()">
            <i style="color: #757575" class="el-icon-user"></i>
          </a>
        </div>
        <div class="nav-icon">
          <a href="#/cart">
            <i style="color: #757575" class="el-icon-shopping-cart-full"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      adminButtonDisplayFlag: false,
    };
  },
  methods: {
    login() {
      if (sessionStorage.getItem("token") || localStorage.getItem("token")) {
        this.$router.push("user");
      } else {
        this.$router.push("login");
      }
    },
  },
  mounted() {
    eventBus.$on("displayAdmin", (message) => {
      if (message === "Admin") {
        this.adminButtonDisplayFlag = true;
      } else {
        this.adminButtonDisplayFlag = false;
      }
    });
  },
  created() {
    eventBus.$off("add_params");
    if (localStorage.getItem("Role") === "Admin") {
      this.adminButtonDisplayFlag = true;
    } else {
      this.adminButtonDisplayFlag = false;
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
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
  display: inline-block;
  height: 45px;
  margin-left: 15px;
  margin-right: 15px;
  text-decoration: none;
  span {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 40px;
    font-weight: lighter;
    font-style: italic;
    color: #757575;
    transition: 0.5s all;
    &:hover {
      // text-shadow:  0  -10px 10px #757575;;
    }
  }
}
.nav-icon {
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  a {
    cursor: pointer;
  }
}
.nav-item {
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 15px;
  height: 100%;
  font-weight: 200;
  a {
    color: #757575;
    line-height: 45px;
    text-decoration: none;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0%;
      bottom: 0%;
      display: block;
      height: 2px;
      left: auto;
      right: 0;
      bottom: 0;
      width: 0;
      transition: 0.5s all;
    }
    &:hover::before {
      width: 100%;
      left: 0;
      right: auto;
      background-color: #757575;
    }
  }
}
</style>
