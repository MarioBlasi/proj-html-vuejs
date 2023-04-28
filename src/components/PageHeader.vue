<script>
import { store } from "../store";

export default {
  name: "PageHeader",
  data() {
    return { store };
  },
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
                icon="fa-solid fa-ruler-combined"
                class="icons"
              />
              <font-awesome-icon icon="fa-solid fa-life-ring" class="icons" />
              <font-awesome-icon icon="fa-solid fa-book" class="icons" />
              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
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
      <div class="container text-center">
        <div class="row">
          <div class="col bigBox d-flex justify-content-center">
            <div class="col-3">
              <img
                class="left"
                src="../assets/img/home-6-hero-left-person.png"
              />
            </div>
            <!-- LEFT IMG -->
            <div class="col-3" id="image-container">
              <img
                class="middle"
                src="../assets/img/home-6-hero-poster-final.jpg "
                alt=""
              />
            </div>
            <!-- IMG CENTRALE -->
            <div class="col-3">
              <img class="youtube" src="../assets/img/youtube-play.png" />
            </div>
            <!-- IMG YOU TUBE -->
            <div class="col-3">
              <img
                class="right"
                src="../assets/img/home-6-hero-right-person-195x300.png "
                alt=""
              />
            </div>
            <!-- IMG RIGHT -->
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
      top: 10rem;
      right: 0rem;
      background-color: rgb(246, 243, 246);
      color: black;
      .icons {
        margin-left: 2px;
        padding: 0.5rem;
        height: 1.5rem;
        background-color: rgb(246, 243, 246);
      }
    }
  }
  .headerBottom {
    background-color: rgb(31, 33, 84);

    .middle {
      top: 50%;
      left: -20%;
      margin-top: -8rem;
      border: 1.5rem solid white;
      border-radius: 10px;
      position: relative;
    }
    .youtube {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      object-fit: cover;
      max-width: 100%;
    }
    .left {
      position: absolute;
      bottom: 10%;
      right: 67%;
      height: 550px;
    }

    .right {
      position: absolute;
      top: 70%;
      left: 70%;
      height: 300px;
    }
  }
  .btn {
    height: 3.5rem;
    width: 12rem;
    background-color: rgb(39, 171, 148);
  }
}
</style>
