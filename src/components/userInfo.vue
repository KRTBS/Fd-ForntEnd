<template>
  <div>
    <div class="userpage">
      <el-form
        ref="userForm"
        :model="userForm"
        label-width="200px"
        :disabled="disableFormEditFlag"
      >
        <el-form-item label="Name">
          <el-input v-model="userForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="PhoneNumber">
          <el-input v-model="userForm.userPhoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="userForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input type="textarea" v-model="userForm.address"></el-input>
        </el-form-item>
      </el-form>
      <el-form label-width="200px">
        <el-form-item>
          <el-button
            v-show="disableFormEditFlag"
            type="primary"
            @click="disableFormEditFlag = !disableFormEditFlag"
            >Modify data</el-button
          >
          <el-button
            v-show="!disableFormEditFlag"
            type="success"
            @click="updataInfo()"
            >Submit</el-button
          >
          <el-button
            @click="UpdataPwdDialogvisible = !UpdataPwdDialogvisible"
            type="danger"
            >Change Password</el-button
          >
          <el-button @click="logout()" type="danger">Log out</el-button>
        </el-form-item>
      </el-form>

      <el-dialog :visible.sync="UpdataPwdDialogvisible" width="40%">
        <el-form ref="form" :model="form" label-width="200px" :rules="rules">
          <el-form-item label="User Password" prop="userPassword">
            <el-input v-model="form.userPassword" type="password"></el-input>
          </el-form-item>
          <el-form-item label="Input Password Again" prop="userPassword2">
            <el-input v-model="form.userPassword2" type="password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="UpdataPwdDialogvisible = false"
            >Cancel</el-button
          >
          <el-button type="danger" @click="updataPWD('form')">Submit</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  created() {
    this.getUserInfo();
  },
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
    return {
      form: {},
      userForm: {},
      disableFormEditFlag: true,
      UpdataPwdDialogvisible: false,
      rules: {
        userPassword: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        userPassword2: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    getUserInfo() {
      this.$axios
        .get("/api/auth/userinfo", {
          withCredentials: false,
        })
        .then((response) => {
          this.userForm = response.data.data;
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },

    updataInfo() {
      this.disableFormEditFlag = !this.disableFormEditFlag;

      this.$axios
        .put("/api/auth/userinfo", this.userForm, {
          withCredentials: false,
        })
        .then((response) => {
          this.$message.success(response.data.msg);
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },
    updataPWD(formName) {
      this.userForm.userPassword = this.form.userPassword2;
      this.UpdataPwdDialogvisible = !this.UpdataPwdDialogvisible;

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .put("/api/auth/userinfo/pwd", this.userForm, {
              withCredentials: false,
            })
            .then((response) => {
              this.$message.success(response.data.msg);
            })
            .catch(function (error) {
              that.$message.error(error.message);
            });
        } else {
          this.$message.error("ERROR!!!");
          return false;
        }
      });
    },
    logout() {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("Role");
      eventBus.$emit("displayAdmin", "LogOut");
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
.userpage {
  box-sizing: border-box;
  width: 100%;
  // background-color: red;
  padding: 100px;
  padding-right: 300px;
}
</style>
