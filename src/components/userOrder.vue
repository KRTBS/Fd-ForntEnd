<template>
  <div>
    <div class="orderlist">
      <el-table
        :data="orderFormList"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
              :data="props.row.orderForm"
              style="width: 100%"
              class="eltable"
            >
              <el-table-column prop="itemName" label="Name" width="300">
              </el-table-column>
              <el-table-column
                prop="itemSelection"
                label="Selection"
                width="250"
              >
              </el-table-column>
              <el-table-column prop="itemNum" label="Number" width="">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="订单 ID" prop="orderID" width="300">
        </el-table-column>
        <el-table-column label="创建时间" prop="time" width="250">
        </el-table-column>
        <el-table-column label="状态" prop="tradingStatus"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getOrderForm();
  },
  data() {
    return {
      orderFormList: [],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if(row.tradingStatus === "UNDONE"){
        return "warning-row"
      }else{
        return "success-row";
      }
    },
    getOrderForm() {
      var that = this;
      this.$axios
        .get("/api/auth/myorder", {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code === 200) {
            this.orderFormList = response.data.data;
            this.orderFormList.forEach((item) => {
              item.orderForm = JSON.parse(item.orderForm);
            });
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.orderlist {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 100px;
  // background-color: red;
}

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.eltable {
  padding-left: 48px;
}

/deep/.el-table{
  font-weight: 100;
  .cell{
    font-weight: 100;
    font-size: 15px;
  }
}

/deep/.el-table .warning-row {
  background: oldlace;
}

/deep/.el-table .success-row {
  background: #f0f9eb;
}
</style>