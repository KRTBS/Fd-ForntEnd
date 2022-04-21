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
              <el-table-column prop="itemNum" label="Number" width="250">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="订单 ID" prop="orderID" width="300">
        </el-table-column>
        <el-table-column label="创建时间" prop="time" width="250">
        </el-table-column>
        <el-table-column label="状态" prop="tradingStatus" width="250">
        </el-table-column>

        <el-table-column label="">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="getUserInfo(scope.$index, scope.row)"
              >查看订单用户信息</el-button
            >
            <el-button
              type="danger"
              @click="changeState(scope.$index, scope.row)"
              >标记为已完成</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="Information" :visible.sync="dialogVisible" width="30%">


        <div class="userInfo">
            <ul>
                <li><span>username</span><p v-text="userInfo.userName"></p></li>
                <li><span>PhoneNumber</span><p v-text="userInfo.userPhoneNumber"></p></li>
                <li><span>Email</span><p v-text="userInfo.email"></p></li>
                <li><span>Address</span><p v-text="userInfo.address"></p></li>
            </ul>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
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
      userInfo: {},
      dialogVisible: false,
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.tradingStatus === "UNDONE") {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    getOrderForm() {
      var that = this;
      this.$axios
        .get("/api/auth/order/all", {
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
    getUserInfo(index, row) {
      var that = this;
      this.$axios
        .get("/api/auth/user/" + row.userID, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code === 200) {
            console.log(response.data.data);
            this.userInfo =response.data.data;
            this.dialogVisible = true;
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },
    changeState(index, row) {
      var that = this;
      if (row.tradingStatus === "UNDONE") {
        this.$axios
          .put("/api/auth/order/changeState/" + row.id, {
            withCredentials: false,
          })
          .then((response) => {
            if (response.data.code === 200) {
              location.reload();
            }
          })
          .catch(function (error) {
            that.$message.error(error.message);
          });
      } else {
        that.$message.error("已是完成状态");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.eltable {
  padding-left: 48px;
}
.userInfo{
    ul{
      display: block;
        list-style: none;
        li{
          width: 100%;
          display: flex;
          margin-bottom: 10px;
          span{
            display: block;
            width: 200px;
            height: 25px;
            line-height: 25px;
            font-size: 20px;
            font-weight: 100;
          }
          p{
            display: block;
            margin: 0px;
            height: 25px;
            line-height: 25px;
            font-size: 20px;
            font-weight: 100;
            color: gray;
          }
        }
    }
}

/deep/.el-table {
  font-weight: 100;
  .cell {
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