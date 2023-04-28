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
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
      <div class="wave wave5"></div>
      <div class="wave wave6"></div>
      <div class="wave wave7"></div>
      <div class="wave wave8"></div>
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
  background-color: rgb(31, 31, 82);

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
    position: relative;
    background-color: rgb(31, 31, 82);
  }

  .wave {
    position: absolute;
    bottom: 0%;
    right: -1400px;
    width: 190%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(125, 125, 194, 0.644),
      rgba(95, 95, 150, 0.658),
      rgba(48, 48, 96, 0.527),
      rgba(40, 40, 89, 0.521) 15%
    );
    background-size: 35% 100%;
    background-repeat: no-repeat;
    animation: waves 9s ease-in-out infinite;
    border-radius: 50%;
    transform: skewY(-2deg);
    // transform: rotate(180deg);
  }

  .wave1 {
    animation-delay: -0.5s;
  }

  @keyframes waves {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 0%;
    }
  }
  .wave2 {
    animation-delay: 1s;
  }

  @keyframes waves {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 20%;
    }
  }
  .wave3 {
    animation-delay: 2s;
  }

  @keyframes waves {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 40%;
    }
  }
  .wave4 {
    animation-delay: 3s;
  }

  @keyframes waves {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 60%;
    }
  }
  .wave5 {
    animation-delay: 4s;
  }

  @keyframes waves {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 80%;
    }
  }
  .wave6 {
    animation-delay: 5s;
  }

  @keyframes waves {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 100%;
    }
  }
  .wave7 {
    animation-delay: 6s;
  }

  @keyframes waves {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 120%;
    }
  }
  .wave8 {
    animation-delay: 7s;
  }

  @keyframes waves {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 140%;
    }
  }
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
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    object-fit: cover;
    max-width: 100%;
  }
  .left {
    position: absolute;
    top: 0%;
    right: 67%;
    height: 550px;
  }

  .right {
    position: absolute;
    top: 100%;
    left: 70%;
    height: 300px;
  }
}
.btn {
  height: 3.5rem;
  width: 12rem;
  background-color: rgb(39, 171, 148);
}
</style>
