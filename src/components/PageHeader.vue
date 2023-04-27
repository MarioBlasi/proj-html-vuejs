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
  <header>
    <div class="headerTop">
      <div class="flex-container">
        <div class="row">
          <img src="./src/assets/img/" alt="" />
          <div class="col text-center pt-5">
            <b><h1 class="title">Learn at your own Pace!</h1></b>
          </div>
          <div class="d-flex justify-content-center">
            <h5>Get teamed up with peaople of the same will</h5>
            <div class="vertical-icon">
              <font-awesome-icon
                icon="fa-solid fa-user-secret "
                class="icons"
              />
              <font-awesome-icon
                icon="fa-solid fa-user-secret "
                class="icons"
              />
              <font-awesome-icon
                icon="fa-solid fa-user-secret "
                class="icons"
              />
              <font-awesome-icon
                icon="fa-solid fa-user-secret "
                class="icons"
              />
            </div>
          </div>
          <div class="text-center">
            <button type="button" class="btn btn-success mt-4">
              <b>Get started for free</b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- header top -->
    <div class="headerBottom">
      <div class="flex-container">
        <div class="row">
          <div class="col">
            <img class="left" src="../assets/img/home-6-hero-left-person.png" />
          </div>

          <div class="col" id="image-container">
            <img
              class="middle"
              src="../assets/img/home-6-hero-poster-final.jpg "
              alt=""
            />
            <img
              class="youtube"
              src="../assets/img/icon-youtube-play3.jpg"
              alt=""
            />
          </div>

          <div class="col">
            <img
              class="right"
              src="../assets/img/home-6-hero-right-person-195x300.png "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- header bottom -->
  </header>
</template>

<style lang="scss">
header {
  background-color: rgb(31, 33, 84);
  .headerTop {
    color: white;
    .title {
      font-size: 60px;
    }
    .vertical-icon {
      position: absolute;
      flex-direction: column;
      border-radius: 5px;
      width: 2.5rem;
      font-size: 0px;
      top: 10rem;
      right: 0rem;
      background-color: rgb(246, 243, 246);
      color: black;
      .icons {
        margin-left: 2px;
        padding: 0.5rem;
        height: 1.5rem;
      }
    }
  }
  .headerBottom {
    background-color: rgb(31, 33, 84);

    .middle {
      bottom: -5rem;
      border: 1.5rem solid rgb(246, 243, 246);
      border-radius: 10px;
      position: relative;
    }
    .youtube {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .left {
      position: absolute;
      bottom: 2rem;
      left: 12rem;
      height: 550px;
    }

    .right {
      position: absolute;
      bottom: -5rem;
      right: 23rem;
      height: 300px;
    }
  }
  .btn {
    height: 3.5rem;
    width: 12rem;
  }
}
</style>
