<template>
  <div id="register">
    <el-form ref="form" label-width="200px" :model="form" :rules="rules">
      <el-form-item label="User Name" prop="userName">
        <el-input v-model="form.userName" maxlength="8"></el-input>
      </el-form-item>
      <el-form-item label="User Password" prop="userPassword">
        <el-input v-model="form.userPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="User Password Validate" prop="userPassword2">
        <el-input v-model="form.userPassword2" type="password"></el-input>
      </el-form-item>
      <el-form-item label="Phone Number" prop="userPhoneNumber">
        <el-input
          v-model="form.userPhoneNumber"
          type="number"
          maxlength="11"
        ></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Address" prop="address">
        <el-input type="textarea" v-model="form.address"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="submit" type="primary" @click="onSubmit('form')"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (!value) return callback(new Error("不能为空"));
      if (value.length < 6 || value.length > 16)
        return callback(new Error("长度必须在6到16位之间"));
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value))
        return callback(new Error("需要包含数字和字母"));
      return callback();
    };
    const validatePass2 = (rule, value, callback) => {
      if (!value) return callback(new Error("不能为空"));
      if (value.length < 6 || value.length > 16)
        return callback(new Error("长度必须在6到16位之间"));
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value))
        return callback(new Error("需要包含数字和字母"));
      if (this.form.userPassword != this.form.userPassword2)
        return callback(new Error("密码不一致"));
      return callback();
    };
    const userPhoneNumber = (rule, value, callback) => {
      if (!value) return callback(new Error("不能为空"));
      if (value.length != 11)
        return callback(new Error("长度必须为11位有效数字"));
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(value))
        return callback(new Error("格式不合法"));
      return callback();
    };
    const validateEmail = (rule, value, callback) => {
      if (!value) return callback(new Error("不能为空"));
      if (!/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(value))
        return callback(new Error("格式不合法"));
      return callback();
    };
    return {
      form: {
        userName: null,
        userPassword: null,
        userPassword2: null,
        userPhoneNumber: null,
        address: null,
        email: null,
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        userPassword: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        userPassword2: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
        userPhoneNumber: [
          { required: true, validator: userPhoneNumber, trigger: "blur" },
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        email: [{ required: true, validator: validateEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        this.$axios
        .post("/api/open/user/regist", this.form, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code === 200) {
            this.$message.success("Regist Success");
            window.localStorage.setItem("Role", response.data.msg);
            window.localStorage.setItem("token", response.data.data);
            this.$router.push("/home");
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
        } else {
          that.$message.error("ERROR");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#register {
  width: 600px;
  height: 100%;
  margin: 150px auto;
}

.submit {
  color: white;
}
</style>
