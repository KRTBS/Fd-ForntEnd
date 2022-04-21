<template>
  <div>
    <div class="userpage">
      <div class="usernav">
        <div>
          <a href="#/userinfo"> User Information </a>
        </div>
        <div>
          <a href="#/userOrder">Order Form</a>
        </div>
      </div>
      <div class="userinfo">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
}
</script>

<style lang="less" scoped>
.userpage {
  box-sizing: border-box;
  width: 1400px;
  margin: 150px auto;
  display: flex;
  justify-content: flex-start;
  // background-color: red;
  .usernav {
    width: 400px;
    // height: 1000px;
    border-right: 1px solid #757575;
    div {
      height: 50px;
      font-size: 25px;
      font-weight: 100;
      line-height: 50px;
      text-align: right;
      padding-right: 50px;
      padding-top: 100px;
      a {
        position: relative;
        transition: 0.5s all ease;
        text-decoration: none;
        color: #757575;
        cursor: pointer;
        &::before{
          content: '';
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
        &:hover::before{
          width: 100%;
          left: 0;
          right: auto;
          background-color: #757575;
        }
      }
    }
  }
  .userinfo {
    width: 1000px;
  }
}
</style>
