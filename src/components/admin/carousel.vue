<template>
  <div>
    <div class="head-icon">
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-document-add"
        @click="handleAdd()"
        >Add</el-button
      >
    </div>
    <el-table :data="carousel" border style="width: 100%">
      <el-table-column prop="imgsrc" label="Img"> </el-table-column>
      <el-table-column prop="title" label="Title"> </el-table-column>
      <el-table-column prop="name" label="LinkProduct"> </el-table-column>
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


    <el-dialog title="Update" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="ImgSrc" :label-width.sync="formLabelWidth">
          <el-input v-model="form.imgsrc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Title" :label-width.sync="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Product" :label-width.sync="formLabelWidth">
          <el-select v-model="form.itemid" placeholder="Select bundle product">
            <el-option
              v-for="(item, index) in productlist"
              :label="item.name"
              :value="item.id"
              :key=index
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmUpdateEdit()"
          >Confirm</el-button
        >
      </div>
    </el-dialog>

    <el-dialog title="Add" :visible.sync="dialogAddFormVisible">
      <el-form :model="form">
        <el-form-item label="ImgSrc" :label-width.sync="formLabelWidth">
          <el-input v-model="form.imgsrc" autocomplete="off" placeholder="Require 960 x 500 size image"></el-input>
        </el-form-item>
        <el-form-item label="Title" :label-width.sync="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Product" :label-width.sync="formLabelWidth">
          <el-select v-model="form.itemid" placeholder="Select bundle product">
            <el-option
              v-for="(item, index) in productlist"
              :label="item.name"
              :value="item.id"
              :key=index
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmAdd()">Confirm</el-button>
      </div>
    </el-dialog>

    <el-dialog title="Warrning" :visible.sync="dialogDeleteVisible" width="30%">
      <span>Are you sure to delete this item?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogDeleteVisible = false">NO</el-button>
        <el-button type="danger" @click="confirmDelete()">YES</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  created() {
    this.getCarousel();
    this.getProductList();
  },
  data() {
    return {
      carousel: [],
      productlist: [],
      dialogFormVisible: false,
      dialogAddFormVisible: false,
      dialogDeleteVisible: false,
      form: {
        id: "",
        title: "",
        imgsrc: "",
        itemid: "",
      },

      id:"",

      formLabelWidth: "120px",
    };
  },
  methods: {
    getCarousel() {
      this.$axios
        .get("/api/auth/carousel", {
          withCredentials: false,
        })
        .then((response) => {
          this.carousel = response.data.data;
        });
    },
    getProductList() {
      this.$axios
        .get("/api/open/product/list", {
          withCredentials: false,
        })
        .then((response) => {
          this.productlist = response.data.data;
        });
    },
    handleEdit(row) {
      this.dialogFormVisible = true;
      this.form.id = row.id;
      this.form.title = row.title;
      this.form.imgsrc = row.imgsrc;
    },
    handleDelete(row) {
      this.id = row.id;
      this.dialogDeleteVisible = true;
    },
    handleAdd() {
      this.dialogAddFormVisible = true;
      this.form = {};
    },

    confirmUpdateEdit() {
      var that = this;
      this.$axios
        .put("/api/auth/carousel", this.form, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.dialogFormVisible = false;
            this.getCarousel();
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },
    confirmDelete(){
      var that = this;
      this.$axios
        .delete("/api/auth/carousel/"+this.id, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.dialogDeleteVisible = false;
            this.getCarousel();
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },
    confirmAdd(){
      var that = this;
      this.$axios
        .post("/api/auth/carousel", this.form, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.dialogAddFormVisible = false;
            this.getCarousel();
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    }
  },
};
</script>

<style>
.head-icon {
  padding-bottom: 20px;
}
</style>