<template>
  <div>
    <div class="home">
      <div class="inputSrc">
        <span> Image URL </span>
        <div>
          <el-input v-model="Introduction.imgsrc" placeholder="Input Image URL"></el-input>
        </div>
      </div>
      <div class="inpputTitle">
        <span> Title </span>
        <div>
          <el-input v-model="Introduction.title" placeholder="Input Title"></el-input>
        </div>
      </div>
      <div class="inputText">
        <span> Text Content </span>
        <div id="weditor"></div>
      </div>
      <div class="btn">
        <div>
          <el-button type="primary" @click="handleSubmit()">Submit</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="Warning" :visible.sync="dialogVisible" width="30%">
      <span>Are you sure to commit the changes?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="danger" @click="confirmChanges()"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import wangEditor from "wangeditor";

export default {
  created() {
      this.getBeifrIntroduction();
  },
  data() {
    return {
      dialogVisible: false,
      Introduction:{},
      editor: null,
      editorData: "",
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
    getBeifrIntroduction() {
        this.$axios
        .get("/api/open/introduction/index", {
          withCredentials: false,
        })
        .then((response) => {
          this.Introduction = response.data.data[0];
          this.editor.txt.append(response.data.data[0].content)
        });
    },
    handleSubmit(){
      this.dialogVisible = true;
    },
    confirmChanges() {

      this.Introduction.content = this.editorData;

      this.$axios
        .put("/api/auth/introduction/index", this.Introduction, {
          withCredentials: false,
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg);
            this.dialogVisible = false;
          } else {
            this.$message.error(response.data.msg);
            this.dialogVisible = false;
          }
        });


      console.log(this.Introduction)
    },
  },
};
</script>

<style scoped>
.home {
  width: 1000px;
  margin: auto;
  position: relative;
}
.inputSrc span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputSrc div {
  margin-bottom: 10px;
}
.inpputTitle span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inpputTitle div {
  margin-bottom: 10px;
}
.inputText span {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.btn div {
  width: 98px;
  margin-left: auto;
  margin-top: 20px;
  margin-right: auto;
}
</style>