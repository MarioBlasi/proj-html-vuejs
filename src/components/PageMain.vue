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
      <div class="flex-container d-flex justify-content-center text-center">
        <div class="row row-cols-2">
          <div class="col verticalLeft p-2">
            <h4>Grafic Design</h4>
            <font class="founder" color="grey"
              ><p>
                Have a passion for graphics and arts? Show your talents with
                confidence and self-assertivenes.
              </p></font
            >
            <div class="col">
              <img src="../assets/img/home-6-service-image-01.png" alt="" />
            </div>
          </div>
          <!-- box left top -->
          <div class="col verticalRight">
            box right top
            <div class="col">
              <img src="../assets/img/home-6-service-image-02.png" alt="" />
            </div>
          </div>
          <!-- box right top -->
          <div class="col verticalLeft">
            <div class="col">
              <img src="../assets/img/home-6-service-image-03.png" alt="" />
            </div>
            box left bottom
          </div>
          <!-- box left bottom -->
          <div class="col verticalRight">
            <div class="col">
              <img src="../assets/img/home-6-service-image-04.png" alt="" />
            </div>
            box right bottom
          </div>
          <!-- box right bottom -->
        </div>

        <div class="row">
          <div class="col p-2 services">
            verticale col losafdasdasdas
            <div class="col">testo</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.sectionOne {
  margin-top: 6rem;
  height: 700px;
  border: 1px solid black;
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
  .verticalRight,
  .services {
    border: 1px solid red;
    background-color: rgb(255, 255, 255);
  }
  .row-cols-2 {
    width: 30%;
  }
  .services {
    margin-top: 10rem;
    width: 20rem;
    margin-left: 3rem;
  }
}
// section 2
</style>
