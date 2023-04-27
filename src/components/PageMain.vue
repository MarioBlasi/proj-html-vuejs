<script>
import { store } from "../store";

export default {
  name: " PageMain",
  data() {
    return { store };
  },

  methods: {},
};
</script>

<template>
  <main>
    <div class="sectionOne">
      <div class="flex-container">
        <div class="row text-center">
          <div class="col d-flex justify-content-center text-center titleOne">
            <h2>
              Let passion and determination be the guide along the way and
              develop at your own pace that's confortable.
            </h2>
          </div>
          <strong><h6>FANNIE MORENO</h6></strong>
          <font class="founder" color="grey"><p>/Founder & CEO</p></font>
          <div class="col d-flex justify-content-center">
            <div class="colorNumber">
              <font class="founder" color="$mountain-meadow"
                ><strong><h1>1.926</h1></strong></font
              >
              <b><p>FINISHED SESSIONS</p></b>
            </div>
            <div class="colorNumber">
              <font class="founder" color="$mountain-meadow"
                ><strong><h1>3.092+</h1></strong></font
              >
              <b><p>ENROLLED LEARNERS</p></b>
            </div>
            <div class="colorNumber">
              <font class="founder" color="$mountain-meadow"
                ><strong><h1>200</h1></strong></font
              >
              <b><p>ONLINE INSTRUCTORS</p></b>
            </div>
            <div class="colorNumber">
              <font class="founder" color="$mountain-meadow"
                ><strong><h1>100%</h1></strong></font
              >
              <b><p>SATISFACTION RATE</p></b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 1 -->
    <div class="sectionTwo">
      <div class="flex-container d-flex justify-content-center">
        <div class="row row-cols-2">
          <div class="col verticalLeft">
            <b><h4>Grafic Design</h4></b>
            <font color="grey"
              ><p>
                Have a passion for graphics and arts? Show your talents with
                confidence and self-assertivenes.
              </p></font
            >
            <div class="col">
              <img
                src="../assets/img/home-6-service-image-01.png"
                class="textTwo"
              />
            </div>
          </div>
          <!-- box left top -->
          <div class="col verticalRight pt-3">
            <b><h4>Business Administration</h4></b>
            <font color="grey"
              ><p>
                Learners are encouraged to study the mechanics and structure of
                system administration.
              </p></font
            >
            <div class="col">
              <img
                src="../assets/img/home-6-service-image-02.png"
                class="textTwo"
              />
            </div>
          </div>
          <!-- box right top -->

          <div class="col verticalLeft">
            <div class="col">
              <img src="../assets/img/home-6-service-image-03.png" alt="" />
            </div>
            <b><h4 class="textTwo p-1">Idea Discussion</h4></b>
            <font color="grey"
              ><p>
                Get teamed up with the specialists who work and teach coding for
                years at famous universites.
              </p></font
            >
          </div>
          <!-- box left bottom -->
          <div class="col verticalRight pt-3">
            <div class="col">
              <img src="../assets/img/home-6-service-image-04.png" alt="" />
            </div>
            <b><h4 class="textTwo p-2">Web Development</h4></b>
            <font color="grey"
              ><p>
                Learn to start building a webpages from scratch. You decide your
                own pace, course and speed.
              </p></font
            >
          </div>
          <!-- box right bottom -->
        </div>
        <!-- START BIGBOX  RIGHT-->
        <div class="row">
          <div class="col services">
            <p class="ps-4">TOGETHER WE CAN CREATE</p>
            <h1 class="ps-4">
              Services We <font color="green">Can Provide</font> For My Clients.
            </h1>
            <div class="list pe-2">
              <ul>
                <li>
                  <font color="green"><b>&#10003;</b> </font> Select & customixe
                  courses to your preferences
                </li>
                <li>
                  <font color="green"><b>&#10003;</b> </font> Change the tutor
                  and make arrangements
                </li>
                <li>
                  <font color="green"><b>&#10003;</b> </font> Partecipate in
                  events to join others
                </li>
                <li>
                  <font color="green"><b>&#10003;</b> </font> Get the desired
                  certificate delivered at house
                </li>
              </ul>
              <div class="ps-4">
                <button type="button" class="btn btn-success mt-4">
                  <b>Get started for free</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- END BIGBOX RIGHT -->
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.sectionOne {
  margin-top: 6rem;
  background-color: rgb(246, 243, 246);

  .titleOne {
    padding-top: 10rem;
    width: 300px;
    h2 {
      font-size: 30px;
      width: 40rem;
      line-height: 1.5;
    }
  }
  .colorNumber {
    margin: 6rem;
    p {
      font-size: small;
    }
  }
}
// sectiob 1
.sectionTwo {
  background-color: rgb(246, 243, 246);
  .verticalLeft,
  .verticalRight {
    background-color: rgb(255, 255, 255);
    height: 400px;
    width: 260px;
    margin: 0.7rem;
    padding-top: 2rem;
  }
  .verticalLeft {
    margin-top: -2rem;
  }
  .verticalRight {
    margin-top: 2rem;
  }
  .row-cols-2 {
    width: 30%;
  }

  .services {
    margin-top: 10rem;
    max-width: 22rem;
    margin-left: 3rem;
    h1 {
      font-size: 40px;
    }
  }
  .textTwo {
    margin-top: 1.8rem;
  }
  .list {
    margin-top: 2rem;
  }
  .list li {
    margin-top: 1rem;
    list-style: none;
    font-size: small;
  }
  .btn {
    height: 3rem;
    width: 12rem;
  }
}
// section 2
</style>
