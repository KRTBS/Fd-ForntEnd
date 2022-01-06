<template>
  <div>
    <headerVue></headerVue>
    <router-view></router-view>
    <footerVue></footerVue>
  </div>
</template>

<script>
import headerVue from '@/components/header.vue'
import mainVue from '@/components/main.vue'
import footerVue from '../components/footer.vue'

export default{
  data () {
    return {
      
    }
  },
  components: {
    headerVue,
    mainVue,
    footerVue,
  }
}
</script>

<style scoped>
footerVue{
  flex: 1;
}
</style>