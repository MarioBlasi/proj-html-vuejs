<script>
import { store } from "../store";

export default {
  name: " PageFooter",
  data() {
    return {
      textfooter: [
        {
          adress: "Address",
          date: "382 NE191st St#87394 Miami, FL33179-3899",
          tel: "+1(305) 547-9909(9am-5pm EST, Monday-Friday)",
          email: "support@maxcoach.com",

          adres: "Explore",
          text: "Start here",
          blog: "Blog",
          about: "About us",

          a: "/",
          b: "Success story",
          c: "Courses",
          d: "Contact us",

          e: "Information",
          f: "Membership",
          g: "Purcase guide",
          h: "Privacy policy",
          i: "Terms of services",
        },
      ],
      store,
    };
  },

  methods: {},
};
</script>

<template>
  <footer>
    <div class="container mt-5 pt-5">
      <div class="row d-flex" v-for="(item, index) in textfooter" :key="index">
        <div class="col-6" v-if="item.date">
          <h5>{{ item.adress }}</h5>
          <p>{{ item.date }}</p>
          <p>{{ item.tel }}</p>
          <p>{{ item.email }}</p>
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
        <div class="col-2" v-if="item.text">
          <h5>{{ item.adres }}</h5>
          <p>{{ item.text }}</p>
          <p>{{ item.blog }}</p>
          <p>{{ item.about }}</p>
        </div>
        <div class="col-2 mt-4" v-if="item.text">
          <h5>{{}}</h5>
          <p>{{ item.b }}</p>
          <p>{{ item.c }}</p>
          <p>{{ item.d }}</p>
        </div>
        <div class="col-2" v-if="item.text">
          <h5>{{ item.e }}</h5>
          <p>{{ item.f }}</p>
          <p>{{ item.g }}</p>
          <p>{{ item.h }}</p>
          <p>{{ item.i }}</p>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-center footerBottom">
      <div class="row">
        <div class="col">
          <p class="grey">&copy;2020 Maxcoach.All Rights Reserved</p>
        </div>
      </div>
    </div>
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
}
</style>
