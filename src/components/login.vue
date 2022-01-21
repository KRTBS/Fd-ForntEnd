<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录表单 -->
      <el-form ref="loginFormRef" class="login_form" :model="loginForm">
        <!-- 用户名 -->
        <el-form-item>
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button @click="login()" type="primary">Login</el-button>
          <el-button @click="register()" type="info">Register</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      var that = this;
      this.$axios
        .post('/login', this.loginForm, {
          withCredentials: false
        })
        .then((response) => {
          if (response.data.code === 200) {
            this.$message.success('Login Successful')
            window.sessionStorage.setItem('token', response.data.data)
            this.$router.push('/home')
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },
    register () {
      this.$router.push('/register');
    },
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #dadada;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  label-width: "0px";
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
