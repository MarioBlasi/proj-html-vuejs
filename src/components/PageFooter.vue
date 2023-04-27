<script>
import { store } from "../store";

export default {
  name: " PageFooter",
  data() {
    return { store };
  },

  methods: {},
};
</script>

<template>
  <footer>
    <div class="container text-center">
      <h1>FOOTER</h1>
      <div class="row">
        <div class="col-6">.col-6</div>
        <div class="col-2">.col-6</div>
        <div class="col-2">.col-6</div>
        <div class="col-2">.col-6</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: rgb(241, 243, 246);
}
</style>
