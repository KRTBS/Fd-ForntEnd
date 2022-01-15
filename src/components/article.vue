<template>
  <div class="article">
    <div class="title" v-text="article.title">
    </div>
    <div class="time" v-text="article.time">
    </div>
    <div class="content" v-html="article.content">
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getArticle(this.$route.params.id)
  },
  data () {
    return {
      article: []
    }
  },
  methods: {
    getArticle (id) {
      this.$axios
        .get('/api/open/information/' + id, {
          withCredentials: false
        })
        .then((response) => {
          this.article = response.data.data
        })
    }
  }
}
</script>

<style scoped>
* {
  font-weight: 200;
}
.article {
  width: 800px;
  padding: 150px 60px;
  margin: 0 auto;
  /* background-color: cornsilk;  */
}
.title {
  text-align: center;
  height: 32px;
  line-height: 32px;
  font-size: 32px;
  margin-bottom: 50px;
}
.time {
  text-align: center;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  margin-bottom: 50px;
}
.content {
  height: 25px;
  line-height: 25px;
  font-size: 25px;
  margin-bottom: 200px;
}
</style>
