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
        },
      ],
      // social: [
      //   {
      //     iconF: "Address",
      //     current_page: true,
      //   },
      //   {
      //     iconT: "Explore",
      //     current_page: false,
      //   },
      //   {
      //     iconI: "Information",
      //     current_page: false,
      //   },
      //   {
      //     iconIn: "Information",
      //     current_page: false,
      //   },
      // ],
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
        </div>
        <div class="col-2" v-if="item.date"></div>
        <div class="col-2" v-if="item.text"></div>
        <div class="col-2" v-if="item.text"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  height: 500px;
  background-color: rgb(241, 243, 242);
}
</style>
