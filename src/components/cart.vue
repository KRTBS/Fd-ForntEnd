<template>
  <div class="cart">
    <div class="cart-table">
      <el-table style="width: 100%" :data="orderForm">
        <el-table-column prop="itemName" label="Name"> </el-table-column>
        <el-table-column prop="itemSelection" label="Selection">
        </el-table-column>
        <el-table-column prop="itemPrice" label="Price"> </el-table-column>
        <el-table-column prop="itemNum" label="Quantity" width="150">
          <template slot-scope="scope">
            <el-input-number
              size="mini"
              v-model="scope.row.itemNum"
              :min="1"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="subtotal" label="Subtotal" width="100">
          <template slot-scope="scope">
            <p v-text="scope.row.itemNum * scope.row.itemPrice"></p>
          </template>
        </el-table-column>

        <el-table-column label="operation">
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="handleDelete(scope.$index)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="subtotal">
      <div class="total">Subtotal:¥{{ total }}</div>
    </div>
    <div class="submit">
      <div class="submitform">
        <el-button round @click="submit()">submit</el-button>
        <el-button round @click="test()">test</el-button>
        <el-button round @click="dest()">dest</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.orderForm = JSON.parse(localStorage.getItem("orderFormList"));

    this.updataSubtotal();
  },

  watch: {
    orderForm: {
      handler: function (newVal, oldVal) {
        this.orderForm.forEach((element) => {
          element.subtotal = element.itemNum * element.itemPrice;
          if (this.orderForm != null) {
            this.updateOrderList(this.orderForm);
          }
        });

        this.updataSubtotal();
      },
      deep: true,
      immediate: true,
    },
  },

  data() {
    return {
      num: 1,
      orderForm: [],
      counter: 1,
      total: 0,
    };
  },
  methods: {
    updateOrderList(list) {
      localStorage.setItem("orderFormList", JSON.stringify(list));
    },
    updataSubtotal() {
      this.total = 0;
      for (var value of this.orderForm) {
        this.total = this.total + value.subtotal;
      }
    },
    handleDelete(index) {
      // console.log(index);
      this.orderForm.splice(index, 1);
    },
    submit() {
      this.$axios
        .post("/api/open/order/submit", this.orderForm, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success("Login Successful");
            // window.sessionStorage.setItem("token", response.data.data);
            // this.$router.push("/home");
          } else {
            this.$message.error("Login Failed");
          }
        });
    },
    test(){
      this.$axios
        .get("/test", {
          withCredentials: false,
        })
        .then((response) => {
          this.$message.success(response.data.data);
        });
    },
    dest(){
      this.$axios
        .get("/dest", {
          withCredentials: false,
        })
        .then((response) => {
          this.$message.success(response.data.data);
        });
    }
  },
};
</script>

<style scoped>
.cart {
  width: 800px;
  margin: 100px auto;
  /* background-color: darkcyan; */
}
.subtotal {
  line-height: 50px;
  height: 50px;
  /* background-color: rgb(59, 255, 92); */
}
.total {
  padding-left: 643px;
  /* float:right; */
  font-weight: 200;
}
.submitform {
  width: 100px;
  margin: 0 auto;
}
</style>