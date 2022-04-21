<template>
  <div>
    <!-- <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        value-format="yyyy-MM-dd"
        v-model="value1"
        type="date"
        placeholder="选择日期时间"
      >
      </el-date-picker>
    </div>
    <el-button type="primary" @click="show"></el-button> -->

    <div class="head-icon">
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-document-add"
        @click="jumpToAdd()"
        >Add</el-button
      >
    </div>

    <el-table :data="info" border style="width: 100%">
      <el-table-column prop="title" label="Title"> </el-table-column>
      <el-table-column prop="imgsrc" label="Img"> </el-table-column>
      <el-table-column prop="time" label="Time"> </el-table-column>
      <el-table-column label="Operation" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="jumpToEdit(scope.row)"
            >Edit</el-button>
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)"
            >Delete</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
        title="Warning"
        :visible.sync="deleteDialogVisible"
        width="30%">
        <span>Are you sure to delete this item?</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deleteDialogVisible = false">NO</el-button>
            <el-button type="danger" @click="confirmDelete()">YES</el-button>
        </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  created () {
    this.getInformationList()
  },
  data () {
    return {
      id: '',

      info: [],

      deleteDialogVisible: false
    }
  },
  methods: {
    show () {
      console.log(this.value1)
    },
    getInformationList () {
      this.$axios
        .get('/api/open/information/all', {
          withCredentials: false
        })
        .then((response) => {
          this.info = response.data.data
        })
    },
    jumpToEdit (row) {
      this.$router.push({ name: 'infoEdit', params: { id: row.id } })
    },
    jumpToAdd () {
      this.$router.push({ name: 'infoEdit', params: { id: 0 } })
    },
    handleDelete (row) {
      this.id = row.id
      this.deleteDialogVisible = true
    },
    confirmDelete () {
      this.$axios
        .delete('/api/auth/information/' + this.id, {
          withCredentials: false
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg)
            this.deleteDialogVisible = false
            this.getInformationList()
          }
        })
        .catch(function (error) {
          that.$message.error(error.message)
        })
    }
  }
}
</script>

<style>
</style>
