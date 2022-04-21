<template>
  <div>
    <div class="login_box">
      <el-form
        ref="loginForm"
        label-width="200px"
        :model="loginForm"
        :rules="rules"
      >
        <el-form-item label="User name" prop="username">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button @click="login()" type="primary">Login</el-button>
          <el-button @click="register()" type="info">Regist</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "No UserName", trigger: "blur" }],
        password: [{ required: true, message: "No PassWord", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      var that = this;
      this.$axios
        .post("/api/open/login", this.loginForm, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code === 200) {
            this.$message.success("Login Success");
            eventBus.$emit("displayAdmin", response.data.msg);
            window.localStorage.setItem("Role", response.data.msg);
            window.localStorage.setItem("token", response.data.data);
            this.$router.push("/home");
          }else{
            that.$message.error("Login ERROR");
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },
    register() {
      this.$router.push("/regist");
    },
  },
};
</script>

<style lang="less" scoped>
.login_box {
  position: relative;
  width: 600px;
  height: 100px;
  margin: 150px auto;
}
</style>
