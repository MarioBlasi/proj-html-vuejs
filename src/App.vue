<script>
import PageNav from "./components/PageNav.vue";
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
  name: "Appvue",
  components: {
    PageNav,
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <PageNav></PageNav>

  <PageHeader></PageHeader>

  <PageMain></PageMain>

  <PageFooter></PageFooter>
</template>

<style lang="scss"></style>
