<template>
  <div>
    <headerVue></headerVue>
    <aboutMain></aboutMain>
    <footerVue></footerVue>
  </div>
</template>

<script>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
import aboutMain from '@/components/aboutMain.vue';

export default {
  data() {
    return {};
  },
  components: {
    headerVue,
    footerVue,
    aboutMain,
  },
};
</script>

<style>
</style>