<template>
  <div>
    <el-container>
        <maside></maside>
      <el-container>
        <el-header>
            <mheader></mheader>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import maside from '@/components/admin/aside.vue';
import mheader from '@/components/admin/header.vue'
export default {
  components:{
      maside,
      mheader
  }
};
</script>

<style scoped>
/* .el-main {
    height: 90vh;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
} */

</style>