<script>
import { store } from "../store";

export default {
  name: "PageNav",
  props: {
    currentPage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menu: [
        {
          text: "Home",
          href: "#",
          current_page: this.currentPage === "home",
        },
        {
          text: "Pages",
          href: "#",
          current_page: this.currentPage === "pages",
        },
        {
          text: "Courses",
          href: "#",
          current_page: this.currentPage === "courses",
        },
        {
          text: "Features",
          href: "#",
          current_page: this.currentPage === "features",
        },
        {
          text: "Blog",
          href: "#",
          current_page: this.currentPage === "blog",
        },
        {
          text: "Shop",
          href: "#",
          current_page: this.currentPage === "shop",
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
    <div class="notifica"></div>
    <div class="container">
      <div class="row logo">
        <div class="col">
          <img height="30" src="../assets/img/light-logo.png" alt="" />
        </div>
      </div>
      <div class="row link">
        <div class="col">
          <div class="menu">
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
                <li class="nav-item p-2" v-for="item in menu" :key="item.text">
                  <a
                    class="nav-link active nav-link dropdown-toggle"
                    :href="item.href"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    :class="{ active: item.current_page }"
                  >
                    {{ item.text }}
                  </a>
                </li>
              </ul>

              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
                class="icon m-1 p-1"
              />
              <font-awesome-icon
                icon="fa-regular fa-circle-user"
                class="icon m-1 p-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row input">
        <div class="col bar input-group">
          <input
            class="search form-control"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="glass" />
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
  .menu {
    margin-left: 6rem;
    font-size: large;
    position: relative;
  }
  .notifica {
    width: 14px;
    height: 14px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    border-radius: 50%;
    top: 24%;
    left: 66%;
    border: 4px solid rgb(248, 248, 248);
  }
  .bar {
    margin-right: 3rem;
  }
  .search {
    border-radius: 5px;
    height: 3rem;
  }
  .icon {
    font-size: large;
    color: aliceblue;
  }
  #icone {
    font-size: xx-large;
    color: aliceblue;
  }
  .glass {
    color: rgb(31, 173, 150);
    font-size: large;
    position: absolute;
    left: 570px;
    top: 30px;
  }
}
</style>
