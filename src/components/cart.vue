<template>
  <div class="cart">
    <div class="cart-table">
      <el-table style="width: 100%" :data="orderForm">
        <el-table-column prop="itemName" label="">
          <template slot-scope="scope">
            <a
              @click="jumpToInfoPage(scope.row.itemID)"
              style="cursor: pointer"
              >{{ scope.row.itemName }}</a
            >
          </template>
        </el-table-column>
        <el-table-column prop="itemSelection" label="" width="150">
        </el-table-column>
        <el-table-column prop="itemPrice" label="" width="100">
        </el-table-column>
        <el-table-column prop="itemNum" label="" width="200">
          <template slot-scope="scope">
            <el-input-number
              size="mini"
              controls-position="right"
              v-model="scope.row.itemNum"
              :min="1"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="subtotal" label="" width="150">
          <template slot-scope="scope">
            <p v-text="'¥' + scope.row.itemNum * scope.row.itemPrice"></p>
          </template>
        </el-table-column>
        <el-table-column label="" width="55">
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="handleDelete(scope.$index)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="subtotal">
      <div>Subtotal:¥{{ total }}</div>
    </div>
    <div class="submit">
      <el-button type="primary" @click="submit()">submit</el-button>
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
          if (this.orderForm.length !== 0) {
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
      if (list) {
        localStorage.setItem("orderFormList", JSON.stringify(list));
      }
    },
    updataSubtotal() {
      this.total = 0;
      for (var value of this.orderForm) {
        this.total = this.total + value.subtotal;
      }
    },
    handleDelete(index) {
      this.orderForm.splice(index, 1);
      if (this.orderForm.length == 0) {
        localStorage.removeItem("orderFormList");
      }
    },
    submit() {
      var that = this;
      if (localStorage.getItem("token") == null) {
        this.$message.error("Please log in to operate");
      } else {
        this.$axios
          .post("/api/auth/order/submit", this.orderForm, {
            withCredentials: false,
          })
          .then((response) => {
            if (response.data.code === 200) {
              this.$message.success("Submit Successful");
              window.localStorage.removeItem("orderFormList");
              location.reload();
            }
          })
          .catch(function (error) {
            that.$message.error(error.message);
          });
      }
    },
    jumpToInfoPage(id) {
      this.$router.push({ name: "item", params: { id: id } });
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 100px auto;
}
.subtotal {
  line-height: 50px;
  height: 50px;
  div {
    // padding-left: 643px;
    float: right;
    font-size: 20px;
    font-weight: 200;
  }
}
.submit {
  display: flex;
  justify-content: flex-end;
}
/deep/.el-table th.el-table__cell > .cell {
  font-weight: 200;
  font-size: 20px;
  color: #606266;
}
/deep/.el-table td.el-table__cell div {
  font-weight: 200;
  font-size: 20px;
  color: #606266;
}
</style>
