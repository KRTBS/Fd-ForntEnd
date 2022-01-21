<template>
  <div class="home">
    <el-form label-position="right" label-width="200px" :model="RegisterForm">
      <el-form-item label="User Name">
        <el-input v-model="RegisterForm.UserName"></el-input>
      </el-form-item>
      <el-form-item label="User Password">
        <el-input  v-model="RegisterForm.UserPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input v-model="RegisterForm.UserPhoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="RegisterForm.Address"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="RegisterForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit()"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RegisterForm: {
        UserName: "",
        UserPassword: "",
        UserPhoneNumber:"",
        Address:"",
        email:"",
      },
    };
  },
  methods:{
      submit(){
          console.log(this.RegisterForm)
      }
  }
};
</script>

<style>
.home {
  margin: 200px auto;
  width: 600px;
  height: auto;
}
</style>