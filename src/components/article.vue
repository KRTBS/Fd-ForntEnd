<template>
  <div class="article">
    <div class="title">
      {{ article.title }}
    </div>
    <div class="time">
      {{ article.time }}
    </div>
    <div class="content">
      {{ article.content }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // this.id = this.$route.params.id;
    this.getArticle(this.$route.params.id);
  },
  data() {
    return {
    //   id: "",
      article: {
        // content: "2022年1月7日2022年1月7日2022年1月7日",
        // id: 5,
        // imgsrc: "https://s4.ax1x.com/2021/12/27/TBUWmd.png",
        // time: "2022年1月7日",
        // title: "title5",
      },
    };
  },
  methods: {
    getArticle(id) {
      this.$axios
        .get("/api/open/information/" + id, {
          withCredentials: false,
        })
        .then((response) => {
          this.article = response.data.data;
          console.log(response.data.data);
        });
    },
  },
};
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