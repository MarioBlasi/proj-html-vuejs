<script>
import { store } from "../store";

export default {
  name: "PageFooter",
  props: {
    title1: {
      store,
      type: String,
      default: "Information",
    },
    year: {
      type: Number,
      default: 2020,
    },
    company: {
      type: String,
      default: "Maxcoach",
    },
    address: {
      type: String,
      default: "382 NE191st St#87394 Miami, FL33179-3899",
    },
    tel: {
      type: String,
      default: "+1(305) 547-9909(9am-5pm EST, Monday-Friday)",
    },
    email: {
      type: String,
      default: "support@maxcoach.com",
    },
    explore: {
      type: String,
      default: "Explore",
    },
    startHere: {
      type: String,
      default: "Start here",
    },
    blog: {
      type: String,
      default: "Blog",
    },
    aboutUs: {
      type: String,
      default: "About us",
    },
    successStory: {
      type: String,
      default: "Success story",
    },
    courses: {
      type: String,
      default: "Courses",
    },
    contactUs: {
      type: String,
      default: "Contact us",
    },
    information: {
      type: String,
      default: "Information",
    },
    membership: {
      type: String,
      default: "Membership",
    },
    purchaseGuide: {
      type: String,
      default: "Purchase guide",
    },
    privacyPolicy: {
      type: String,
      default: "Privacy policy",
    },
    termsOfServices: {
      type: String,
      default: "Terms of services",
    },
    showLinks: {
      type: Boolean,
      default: true,
    },
    showScrollTop: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.showScrollTop = window.pageYOffset > 100;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <footer>
    <div class="container mt-5 pt-5">
      <div class="row d-flex">
        <div class="col-6">
          <h5>{{ title1 }}</h5>
          <p>{{ address }}</p>
          <p>{{ tel }}</p>
          <p>{{ email }}</p>
          <p></p>
          <div class="social">
            <font-awesome-icon
              icon="fa-brands fa-square-facebook"
              class="pe-3"
            />
            <font-awesome-icon icon="fa-brands fa-twitter" class="pe-3" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="pe-3" />
            <font-awesome-icon icon="fa-brands fa-linkedin" class="pe-3" />
          </div>
        </div>
        <div class="col-2" v-if="showLinks">
          <h5>{{ explore }}</h5>
          <p>{{ startHere }}</p>
          <p>{{ blog }}</p>
          <p>{{ aboutUs }}</p>
        </div>
        <div class="col-2 mt-4" v-if="showLinks">
          <h5>{{ successStory }}</h5>
          <p>{{ courses }}</p>
          <p>{{ contactUs }}</p>
        </div>
        <div class="col-2" v-if="showLinks">
          <h5>{{ information }}</h5>
          <p>{{ membership }}</p>
          <p>{{ purchaseGuide }}</p>
          <p>{{ privacyPolicy }}</p>
          <p>{{ termsOfServices }}</p>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-center footerBottom">
      <div class="row">
        <div class="col">
          <p class="grey">
            &copy;{{ year }} {{ company }}. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
    <button class="scroll-top" v-if="showScrollTop" @click="scrollToTop">
      <i class="material-icons">^</i>
    </button>
  </footer>
</template>

<style lang="scss">
footer {
  height: 500px;
  background-color: rgb(241, 243, 242);
  .social {
    margin-right: 3rem;
    color: grey;
    font-size: 30px;
  }
  .footerBottom {
    margin-top: 10rem;
    .grey {
      color: grey;
      font-size: smaller;
    }
  }
  .scroll-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: rgb(31, 173, 150);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .scroll-top:hover {
    background-color: rgb(0, 235, 196);
  }
}
</style>
