<script>
import { store } from "../store";

export default {
  name: " PageNav",
  data() {
    return {
      menu: [
        {
          text: "Home",
          href: "#",
          current_page: true,
        },
        {
          text: "Pages",
          href: "#",
          current_page: false,
        },
        {
          text: "Courses",
          href: "#",
          current_page: false,
        },
        {
          text: "Features",
          href: "#",
          current_page: false,
        },
        {
          text: "Blog",
          href: "#",
          current_page: false,
        },
        {
          text: "Shop",
          href: "#",
          current_page: false,
        },
      ],

      store,
    };
  },

  methods: {},
};
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="row logo">
        <div class="col">
          <img height="40" src="../assets/img/light-logo.png" alt="" />
        </div>
      </div>
      <div class="row link">
        <div class="col">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
              <li class="nav-item p-2" v-for="item in menu">
                <a
                  class="nav-link active nav-link dropdown-toggle"
                  :href="item.href"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >{{ item.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row input">
        <div class="col">
          <form class="d-flex" role="search">
            <input
              class="form-control p-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <i class="fa-solid fa-magnifying-glass bg-light">Search</i>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  height: 80px;
  background-color: rgb(31, 33, 84);
  a {
    color: rgb(255, 255, 255) !important;
  }
}
img {
  max-width: 100%;
}
</style>
