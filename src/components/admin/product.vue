<template>
  <div>
    <div class="head-icon">
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-document-add"
        @click="addFormDialogVisible = true"
        >Add</el-button
      >
    </div>

    <el-table :data="productlist" border style="width: 100%">
      <el-table-column prop="imgsrc" label="Cover Image"> </el-table-column>
      <el-table-column prop="name" label="Name"> </el-table-column>
      <el-table-column prop="price" label="Price"> </el-table-column>
      <el-table-column label="Operation" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)"
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

    <el-dialog title="Add" :visible.sync="addFormDialogVisible">
      <el-form :model="product">
        <el-form-item label="Name" :label-width.sync="formLabelWidth">
          <el-input v-model="product.name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="Image URL" :label-width.sync="formLabelWidth">
          <el-input v-model="product.imgsrc" autocomplete="off" placeholder="Require 400 x 400 size image"></el-input>
        </el-form-item>
        <el-form-item label="Price" :label-width.sync="formLabelWidth">
          <el-input v-model="product.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Brief Info" :label-width.sync="formLabelWidth">
          <el-input v-model="product.briefinfo" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmAdd()">Confirm</el-button>
      </div>
    </el-dialog>

    <el-dialog title="Warrning" :visible.sync="deleteDialogvisible" width="30%">
      <span>Are you sure to delete this item?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="deleteDialogvisible = false">NO</el-button>
        <el-button type="danger" @click="confirmDelete()">YES</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  created () {
    this.getProductList()
  },
  data () {
    return {
      id: '',

      productlist: [],
      product: {
        id: '',
        name: '',
        imgsrc: '',
        price: '',
        briefinfo: '',
        fullinfo: ''
      },

      addFormDialogVisible: false,
      deleteDialogvisible: false,

      formLabelWidth: '120px'
    }
  },
  methods: {
    getProductList () {
      this.$axios
        .get('/api/open/product/list', {
          withCredentials: false
        })
        .then((response) => {
          this.productlist = response.data.data
        })
    },
    handleEdit (row) {
      this.$router.push({ name: 'productEdit', params: { id: row.id } })
    },
    handleDelete (row) {
      this.id = row.id
      this.dialogDeleteVisible = true
    },
    confirmAdd () {
      var that = this
      this.$axios
        .post('/api/auth/product', this.product, {
          withCredentials: false
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg)
            this.addFormDialogVisible = false
            this.getProductList()
          }
        })
        .catch(function (error) {
          that.$message.error(error.message)
        })
    },
    handleDelete (row) {
      this.id = row.id
      this.deleteDialogvisible = true
    },
    confirmDelete () {
      var that = this
      this.$axios
        .delete('/api/auth/product/' + this.id, {
          withCredentials: false
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg)
            this.deleteDialogvisible = false
            this.getProductList()
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
