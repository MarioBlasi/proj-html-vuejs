<script>
import { store } from "../store";

export default {
  name: "PageHeader",
  data() {
    return { store };
  },

  methods: {},
};
</script>

<template>
  <div class="headerTop">
    <div class="flex-container">
      <div class="row">
        <img src="./src/assets/img/" alt="" />
        <div class="col d-flex justify-content-center pt-5">
          <b><h1 class="title">Learn at your own Pace!</h1></b>
        </div>
        <div class="d-flex justify-content-center">
          <h5>Get teamed up with peaople of the same will</h5>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-success mt-4">
            <b>Get started for free</b>
          </button>
        </div>
        <div class="d-flex justify-content-end">
          <h1>icon</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- header top -->
  <div class="headerBottom"></div>
  <!-- header bottom -->
</template>

<style lang="scss">
.headerTop {
  color: white;
  background-color: rgb(31, 33, 84);
  .title {
    font-size: 60px;
  }
}
.btn {
  height: 3.5rem;
  width: 12rem;
}
</style>
