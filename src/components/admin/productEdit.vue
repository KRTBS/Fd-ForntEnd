<template>
  <div class="home">
    <el-alert
      title="The addition or deletion of pictures and tag will be saved immediately"
      type="warning"
    >
    </el-alert>

    <div class="NameInput">
      <span> Product Name </span>
      <div>
        <el-input
          v-model="product.name"
          placeholder="Input Image URL"
        ></el-input>
      </div>
    </div>

    <div class="PriceInput">
      <span> Price </span>
      <div>
        <el-input
          v-model="product.price"
          placeholder="Input Product Price"
        ></el-input>
      </div>
    </div>

    <div class="CoverImgInput">
      <span> Cover Image </span>
      <div>
        <el-input
          v-model="product.imgsrc"
          placeholder="Require 400 x 400 size image"
        ></el-input>
      </div>
    </div>

    <div class="BfInfoInput">
      <span> Brief Information </span>
      <div>
        <el-input
          v-model="product.briefinfo"
          placeholder="Input Brief Information"
        ></el-input>
      </div>
    </div>

    <div class="Selection">
      <span class="selectspan"> Product Selection </span>
      <el-button
        style="float: right; font-size: 16px; font-weight: 100"
        type="text"
        @click="AddNewTagDialogVisiable = true"
        >Add New TAG</el-button
      >

      <div>
        <el-tag
          :key="index"
          v-for="(tag, index) in productSelection"
          closable
          :disable-transitions="false"
          @close="handleTagDelete(tag)"
        >
          {{ tag.select }}
        </el-tag>
      </div>
    </div>

    <div class="ProductImgTable">
      <span> Product Image </span>
      <el-button
        style="float: right; font-size: 16px; font-weight: 100"
        type="text"
        @click="AddNewImgDialogVisiable = true"
        >Add New Image</el-button
      >
      <div>
        <el-table
          :data="productImg"
          stripe
          style="width: 100%"
          :show-header="false"
        >
          <el-table-column prop="imgsrc" label="Product Image List">
          </el-table-column>

          <el-table-column label="Operation" width="90">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- <div class="productImgTable">
      <el-table :data="productImg" stripe style="width: 100%" :show-header=false>
        <el-table-column prop="imgsrc" label="Product Image List">
        </el-table-column>
      </el-table>
    </div> -->

    <div class="inputText">
      <span> Full Information </span>
      <div id="weditor"></div>
    </div>

    <div class="btn">
      <div>
        <el-button type="primary" @click="handleSubmit()">Submit</el-button>
      </div>
    </div>

    <el-dialog title="Add New Tag" :visible.sync="AddNewTagDialogVisiable">
      <el-form :model="tagForm">
        <el-form-item label="Tag" :label-width="formLabelWidth">
          <el-input v-model="tagForm.select" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AddNewTagDialogVisiable = false">Cancel</el-button>
        <el-button type="primary" @click="handleTagAdd()">Confirm</el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="Warning"
      :visible.sync="DeleteTagDialogVisiable"
      width="30%"
      :before-close="handleTagDelete"
    >
      <span>Delete this Tag?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="DeleteTagDialogVisiable = false">NO</el-button>
        <el-button type="danger" @click="deleteTag()">YES</el-button>
      </span>
    </el-dialog>

    <el-dialog title="Add New Img" :visible.sync="AddNewImgDialogVisiable">
      <el-form :model="imgForm">
        <el-form-item label="Img URL" :label-width="formLabelWidth">
          <el-input v-model="imgForm.imgsrc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="AddNewImgDialogVisiable = false"> Cancel </el-button>
        <el-button type="primary" @click="handleImgAdd()"> Confirm </el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="Warning"
      :visible.sync="DeleteImgDialogVisiable"
      width="30%"
      :before-close="handleTagDelete"
    >
      <span>Delete this item?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="DeleteImgDialogVisiable = false">NO</el-button>
        <el-button type="danger" @click="deleteImgSrc()">YES</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import wangEditor from "wangeditor";

export default {
  created() {
    this.id = this.$route.params.id;

    this.getProduct(this.id);
    this.getProductImg(this.id);
    this.getProductSelection(this.id);
  },
  data() {
    return {
      id: "",

      product: {},
      productImg: [],
      productSelection: [],

      tagForm: {
        id: "",
        select: "",
        itemid: "",
      },

      imgForm:{
        id:"",
        imgsrc:"",
        itemid:"",
      },

      editor: null,
      editorData: "",

      formLabelWidth: "120px",

      AddNewTagDialogVisiable: false,
      DeleteTagDialogVisiable: false,
      AddNewImgDialogVisiable: false,
      DeleteImgDialogVisiable:false,
    };
  },
  mounted() {
    const editor = new wangEditor(`#weditor`);
    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml;
    };
    editor.create();
    this.editor = editor;
  },
  methods: {
    getProduct(id) {
      this.$axios
        .get("/api/open/product/" + id, {
          withCredentials: false,
        })
        .then((response) => {
          this.product = response.data.data;
          this.editor.txt.append(response.data.data.fullinfo);
        });
    },
    getProductImg(id) {
      this.$axios
        .get("/api/open/product/carousel/" + id, {
          withCredentials: false,
        })
        .then((response) => {
          this.productImg = response.data.data;
        });
    },
    getProductSelection(id) {
      this.$axios
        .get("/api/open/product/selection/" + id, {
          withCredentials: false,
        })
        .then((response) => {
          this.productSelection = response.data.data;
          this.radio = response.data.data[0].select;
        });
    },
    handleTagDelete(tag) {
      this.DeleteTagDialogVisiable = true;
      this.tagForm = tag;
    },
    deleteTag() {
      var that = this;
      this.$axios
        .delete("/api/auth/product/selection/" + this.tagForm.id, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.DeleteTagDialogVisiable = false;
            this.getProductSelection(this.id);
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },

    handleTagAdd() {
      this.AddNewTagDialogVisiable = true;
      this.tagForm.id = "";
      this.tagForm.itemid = this.id;
      this.addTag();
    },

    addTag() {
      var that = this;
      this.$axios
        .post("/api/auth/product/selection",this.tagForm, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.AddNewTagDialogVisiable = false;
            this.getProductSelection(this.id);
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },

    handleDelete(row){
      DeleteImgDialogVisiable = true;
      this.imgForm = row;
    },

    deleteImgSrc(){
      var that = this;
      this.$axios
        .delete("/api/auth/product/carousel/" + this.imgForm.id, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.DeleteImgDialogVisiable = false;
            this.getProductImg(this.id);
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },

    handleImgAdd() {
      this.AddNewImgDialogVisiable = true;
      this.imgForm.id = "";
      this.imgForm.itemid = this.id;
      this.addImgSrc();
    },

    addImgSrc(){
      var that = this;
      this.$axios
        .post("/api/auth/product/carousel",this.imgForm, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.AddNewImgDialogVisiable = false;
            this.getProductImg(this.id);
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    },
    handleSubmit(){
      var that = this;
      this.product.fullinfo = this.editorData;
      this.$axios
        .put("/api/auth/product",this.product, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
          }
        })
        .catch(function (error) {
          that.$message.error(error.message);
        });
    }
  },
};
</script>

<style scoped>
.home {
  width: 1000px;
  margin: auto;
  position: relative;
}
.inputText span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}

.NameInput span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.NameInput div {
  margin-bottom: 10px;
}
.PriceInput span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.PriceInput div {
  margin-bottom: 10px;
}
.CoverImgInput span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.CoverImgInput div {
  margin-bottom: 10px;
}
.BfInfoInput span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.BfInfoInput div {
  margin-bottom: 10px;
}

/* .ImagetItem{
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    font-weight: 200;
} */

.Selection {
  margin-bottom: 35px;
}
.selectspan {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}

.ProductImgTable span {
  font-size: 25px;
  font-weight: 200;
}
.ProductImgTable div {
  margin-bottom: 10px;
}
.btn div {
  width: 98px;
  margin-left: auto;
  margin-top: 20px;
  margin-right: auto;
}
</style>