<template>
  <div>
    <headerVue></headerVue>
    <storeMain></storeMain>
    <footerVue></footerVue>
  </div>
</template>

<script>
import headerVue from "@/components/header.vue";
import footerVue from "@/components/footer.vue";
import storeMain from "@/components/storeMain.vue";

export default {
  data() {
    return {};
  },
  components: {
    headerVue,
    footerVue,
    storeMain,
  },
};
</script>

<style>
</style>