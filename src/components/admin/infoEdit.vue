<template>
  <div class="home">
    <div class="inputTitle">
      <span> Title </span>
      <div>
        <el-input v-model="information.title" placeholder="Title"></el-input>
      </div>
    </div>

    <div class="inputImgSrc">
      <span> Cover Img </span>
      <div>
        <el-input v-model="information.imgsrc" placeholder="Require 400 x 400 size image"></el-input>
      </div>
    </div>

    <div class="inputTime">
      <span> Time </span>
      <div>
        <el-date-picker
          value-format="yyyy-MM-dd"
          v-model="information.time"
          type="date"
          placeholder="Select Time"
        >
        </el-date-picker>
      </div>
    </div>

    <div class="inputContent">
      <span> Information Content </span>
      <div id="weditor"></div>
    </div>

    <div class="btn" v-show="id != 0">
      <div>
        <el-button type="primary" @click="handleUpdate()">Submit</el-button>
      </div>
    </div>

    <div class="btn" v-show="id == 0">
      <div>
        <el-button type="primary" @click="handleAddNewItem()">Submit</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import wangEditor from 'wangeditor'

export default {
  created () {
    this.id = this.$route.params.id

    if (this.id != 0) {
      this.getInformationByID(this.id)
    }
  },
  mounted () {
    const editor = new wangEditor('#weditor')
    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml
    }
    editor.create()
    this.editor = editor
  },
  data () {
    return {
      id: '',
      information: {
        id: '',
        title: '',
        imgsrc: '',
        time: '',
        content: ''
      }
    }
  },
  methods: {
    getInformationByID (id) {
      this.$axios
        .get('/api/open/information/' + id, {
          withCredentials: false
        })
        .then((response) => {
          this.information = response.data.data
          this.editor.txt.append(response.data.data.content)
        })
    },
    handleUpdate () {
      this.information.content = this.editorData
      this.$axios
        .put('/api/auth/information', this.information, {
          withCredentials: false
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg)
            this.deleteDialogVisible = false
          }
        })
        .catch(function (error) {
          that.$message.error(error.message)
        })
    },
    handleAddNewItem () {
      this.information.content = this.editorData
      this.$axios
        .post('/api/auth/information', this.information, {
          withCredentials: false
        })
        .then((response) => {
          if (response.data.code == 200) {
            this.$message.success(response.data.msg)
            this.deleteDialogVisible = false
          }
        })
        .catch(function (error) {
          that.$message.error(error.message)
        })
    }
  }
}
</script>

<style scoped>
.home {
  width: 1000px;
  margin: auto;
  position: relative;
}
.inputTitle {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputImgSrc {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputTime {
  font-size: 25px;
  font-weight: 200;
  line-height: 50px;
}
.inputContent span {
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
