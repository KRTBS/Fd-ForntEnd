<template>
  <div class="aboutMain">
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        content:"<p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p><p>xxx</p>"
    }
  }
}
</script>

<style scoped>
.aboutMain {
  width: 800px;
  padding: 150px 60px;
  margin: 0 auto;
  /* background-color: cornsilk;  */
}

.aboutMain h2 {
  font-size: 25px;
  font-weight: 200;
  text-align: center;
  line-height: 25px;
}
</style>