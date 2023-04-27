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
    <!-- SECTION 2 -->
    <div class="sectionThree">
      <div class="container pt-5">
        <div class="row">
          <div class="col-12 text-center">
            <p>CHOSE A COURSE TO STARTED</p>
          </div>
          <div class="col-12 text-center">
            <h1 class="ps-4">
              Latest Featured <font color="$mountain-meadow">Courses</font>
            </h1>
          </div>
        </div>
      </div>
      <!-- titolo -->
      <div class="container text-left">
        <div class="row row-cols-2 p-5 d-flex justify-content-center">
          <div class="col d-flex boxTextImg p-3">
            <img src="../assets/img/course-02-480x298.jpg" class="borderImg" />

            <div class="col d-flex flex-column textColumn">
              <h4 class="number">
                <font color="$mountain-meadow"><b>$ 40.oo</b></font>
              </h4>
              <h6 class="textStrong">
                <b>Learning to Write as a professional Author </b>
              </h6>
              <span class="lessons"
                ><font color="grey"><b> 20 Lessons 50 Students</b></font></span
              >
            </div>
          </div>
          <!-- box 1 left TOP -->
          <div class="col d-flex boxTextImg p-3">
            <img
              src="../assets/img/stock-full-hd-03-480x298.jpg"
              class="borderImg"
            />

            <div class="col d-flex flex-column textColumn">
              <h4 class="number">
                <font color="$mountain-meadow"><b>Free</b></font>
              </h4>
              <h6 class="textStrong">
                <b>Customer-centric Info-Tech Strategies</b>
              </h6>
              <span class="lessons"
                ><font color="grey"><b> 24 Lessons 769 Students</b></font></span
              >
            </div>
          </div>
          <!-- box 2 right top -->
          <div class="col d-flex boxTextImg p-3">
            <img
              src="../assets/img/stock-full-hd-04-480x298.jpg"
              class="borderImg"
            />
            <div class="col d-flex flex-column textColumn">
              <h4 class="number">
                <font color="$mountain-meadow"><b>$ 19.oo</b></font>
              </h4>
              <h6 class="textStrong">
                <b>Open Programming Courses for Everyone:Pyton</b>
              </h6>
              <span class="lessons"
                ><font color="grey"><b> 17 Lessons 62 Students</b></font></span
              >
            </div>
          </div>
          <!-- box  left middle -->
          <div class="col d-flex boxTextImg p-3">
            <img
              src="../assets/img/stock-full-hd-06-480x298.jpg"
              class="borderImg"
            />
            <div class="col d-flex flex-column textColumn">
              <h4 class="number">
                <font color="$mountain-meadow"><b>$ 26.oo</b></font>
              </h4>
              <h6 class="textStrong">
                <b>Accademic Listening and Note-taking</b>
              </h6>
              <span class="lessons"
                ><font color="grey"><b> 14 Lessons 67 Students</b></font></span
              >
            </div>
          </div>
          <!-- box  right middle -->
          <div class="col d-flex boxTextImg p-3">
            <img
              src="../assets/img/course-featured-image-01-480x298.jpg"
              class="borderImg"
            />
            <div class="col d-flex flex-column textColumn">
              <h4 class="number">
                <font color="$mountain-meadow"><b>$ 39.oo</b></font>
              </h4>
              <h6 class="textStrong">
                <b>Master jQuery in a Short Period of Time</b>
              </h6>
              <span class="lessons"
                ><font color="grey"><b> 6 Lessons 51 Students</b></font></span
              >
            </div>
          </div>
          <!-- box  bottom left -->
          <div class="col d-flex boxTextImg p-3">
            <img
              src="../assets/img/stock-full-hd-05-480x298.jpg"
              class="borderImg"
            />
            <div class="col d-flex flex-column textColumn">
              <h4 class="number">
                <font color="$mountain-meadow"><b>$ 59.oo</b></font>
              </h4>
              <h6 class="textStrong">
                <b>Introduction to Javascript for Beginners</b>
              </h6>
              <span class="lessons"
                ><font color="gre"><b> 14 Lessons 76 Students</b></font></span
              >
            </div>
          </div>
          <!-- box  bottom right -->
          <div class="ps-4 pt-5 d-flex justify-content-center">
            <button type="button" class="btn btn-success mt-4">
              <b>View all courses </b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 3 -->
    <div class="sectionFour">
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-center mt-5">
            <h1 class="ps-4">
              Why People Talk About
              <font color="$mountain-meadow">MaxCoach</font>?
            </h1>
          </div>
        </div>
      </div>
      <div class="container text-center mt-5">
        <div class="row row-cols-2">
          <div class="col">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            voluptas doloremque aspernatur, animi facere illum officiis pariatur
            qui corporis iste exercitationem vitae aut consectetur nulla dolores
            quam velit, ea commodi!
          </div>
          <div class="col">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            voluptas doloremque aspernatur, animi facere illum officiis pariatur
            qui corporis iste exercitationem vitae aut consectetur nulla dolores
            quam velit, ea commodi!
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 d-flex justify-content-around">
            <img src="../assets/img/client-logo-colored-01.png" alt="" />
            <img src="../assets/img/client-logo-colored-01.png" alt="" />
            <img src="../assets/img/client-logo-colored-01.png" alt="" />
            <img src="../assets/img/client-logo-colored-01.png" alt="" />
            <img src="../assets/img/client-logo-colored-01.png" alt="" />
            <img src="../assets/img/client-logo-colored-01.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 4 -->
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
    background-color: rgb(31, 173, 150);
  }
}
// section 2
.sectionThree {
  background-color: rgba(188, 188, 188, 0.158);

  img {
    width: 150px;
    height: 150px;
  }
  .boxTextImg {
    max-width: 500px;
  }
  .borderImg {
    border-radius: 50%;
  }
  .textColumn {
    max-width: 18rem;
    padding-top: 1rem;
  }
  .textColumn > span {
    font-size: 13px;
  }
  .number,
  .textStrong,
  .lessons {
    display: flex;
    justify-content: start;
    margin-left: 1rem;
    line-height: 1.5;
  }
  .btn {
    height: 3rem;
    width: 12rem;
    background-color: rgb(31, 173, 150);
  }
}
// section 3
.sectionFour {
  background-color: rgb(246, 243, 246);
}
// section 4
</style>
