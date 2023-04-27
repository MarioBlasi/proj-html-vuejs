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
  }
  .bar {
    margin-right: 3rem;
  }
  .search {
    border-radius: 5px;
    height: 3rem;
  }
  .icon {
    font-size: x-large;
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
