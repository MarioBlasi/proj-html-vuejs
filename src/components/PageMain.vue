<script>
import { store } from "../store";

export default {
  name: " PageMain",
  props: {
    icon: {
      type: String,
      default: "user",
    },
  },
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
            <div class="balls">
              <div class="ball"></div>
              <div class="ball1"></div>
              <div class="ball2"></div>
              <div class="ball3"></div>
              <div class="ball4"></div>
              <div class="ball5"></div>
              <div class="ball6"></div>
              <div class="ball7"></div>
            </div>
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
            <p class="ps-2">TOGETHER WE CAN CREATE</p>
            <h1 class="ps-2">
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
              <span class="lessons">
                <font-awesome-icon
                  icon="fa-solid fa-book"
                  class="icone m-1 p-1"
                />
                <b>20 Lessons </b>
                <font-awesome-icon
                  :icon="`fa-regular fa-circle-${icon}`"
                  class="icone m-1 p-1"
                />
                <b>50 Students</b>
              </span>
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
              <span class="lessons">
                <font-awesome-icon
                  icon="fa-solid fa-book"
                  class="icone m-1 p-1"
                />
                <b>24 Lessons </b>
                <font-awesome-icon
                  :icon="`fa-regular fa-circle-${icon}`"
                  class="icone m-1 p-1"
                />
                <b>769 Students</b>
              </span>
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
              <span class="lessons">
                <font-awesome-icon
                  icon="fa-solid fa-book"
                  class="icone m-1 p-1"
                />
                <b>17 Lessons </b>
                <font-awesome-icon
                  :icon="`fa-regular fa-circle-${icon}`"
                  class="icone m-1 p-1"
                />
                <b>62 Students</b>
              </span>
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
              <span class="lessons">
                <font-awesome-icon
                  icon="fa-solid fa-book"
                  class="icone m-1 p-1"
                />
                <b>14 Lessons </b>
                <font-awesome-icon
                  :icon="`fa-regular fa-circle-${icon}`"
                  class="icone m-1 p-1"
                />
                <b>67 Students</b>
              </span>
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
              <span class="lessons">
                <font-awesome-icon
                  icon="fa-solid fa-book"
                  class="icone m-1 p-1"
                />
                <b>6 Lessons </b>
                <font-awesome-icon
                  :icon="`fa-regular fa-circle-${icon}`"
                  class="icone m-1 p-1"
                />
                <b>51 Students</b>
              </span>
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
              <span class="lessons">
                <font-awesome-icon
                  icon="fa-solid fa-book"
                  class="icone m-1 p-1"
                />
                <b>14 Lessons </b>
                <font-awesome-icon
                  :icon="`fa-regular fa-circle-${icon}`"
                  class="icone m-1 p-1"
                />
                <b>76 Students</b>
              </span>
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
          <div class="col pos">
            <p></p>
            <img
              class="maxcoach"
              src="../assets/img/maxcoach-shape-05-150x150.png"
              alt=""
            />
            <img
              class="testimonial"
              src="../assets/img/testimonial-avata-02.jpg"
              alt=""
            />
          </div>
          <div class="col">
            <h2 class="sponsor">
              I am free to learn at my own pace, follow my own schedule and
              choose the subject i like. Great study portal for people like me.
            </h2>
            <div class="pt-4 m-3">
              <h6 class="d-flex justify-content-start">MINA HOLLANCE</h6>
              <div>
                <h6 class="d-flex justify-content-start">
                  <font color="grey">/Freelancer</font>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 d-flex justify-content-around" id="sponsor">
            <img src="../assets/img/client-logo-colored-01.png" height="70%" />
            <img src="../assets/img/client-logo-colored-02.png" height="60%" />
            <img src="../assets/img/client-logo-colored-03.png" height="70%" />
            <img src="../assets/img/client-logo-colored-04.png" height="40%" />
            <img src="../assets/img/client-logo-colored-05.png" height="40%" />
            <img src="../assets/img/client-logo-colored-06.png" height="30%" />
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 4 -->
    <div class="sectionFive">
      <div class="container">
        <div class="row mt-5">
          <div class="col-12 text-center mt-5">
            <p>ENJOY READING ON MAXCOACH</p>
          </div>
          <div class="col-12 text-center">
            <h1 class="ps-4">
              Latest On<font color="$mountain-meadow"> Our Blogs</font>
            </h1>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row row-cols-3 mt-5 d-flex justify-content-center">
          <div class="col-3 imgxThree d-flex flex-column">
            <img src="../assets/img/artist-blog-03-480x325.jpeg" />
            <div class="col textFive text-start mt-3">
              <h6>ARTIST</h6>
              <h4>Brush Strokes Energize Trees in Paintings</h4>
              <span class="spanFive"
                ><font-awesome-icon icon="fa-regular fa-calendar" /> May 15,
                2020 &nbsp
              </span>
              <span class="spanFive"
                ><font-awesome-icon icon="fa-solid fa-eye" /> &nbsp 603
                views</span
              >
            </div>
          </div>
          <!-- img x One -->
          <div class="col-3 imgxThree d-flex flex-column">
            <img src="../assets/img/artist-blog-01-480x325.jpg" />
            <div class="col textFive text-start mt-3">
              <h6>ARTIST</h6>
              <h4>Pocket-Sized Notebooks Hold Miniature Paintings</h4>
              <span class="spanFive"
                ><font-awesome-icon icon="fa-regular fa-calendar" /> May 15,
                2020 &nbsp
              </span>
              <span class="spanFive"
                ><font-awesome-icon icon="fa-solid fa-eye" /> &nbsp 603
                views</span
              >
            </div>
          </div>
          <!-- img x Two -->
          <div class="col-3 imgxThree d-flex flex-column">
            <img src="../assets/img/artist-blog-02-480x325.jpg" />
            <div class="col textFive text-start mt-3">
              <h6>ARTIST</h6>
              <h4>Connection Between Self-Portraits and Identity</h4>
              <span class="spanFive"
                ><font-awesome-icon icon="fa-regular fa-calendar" /> May 15,
                2020 &nbsp
              </span>
              <span class="spanFive"
                ><font-awesome-icon icon="fa-solid fa-eye" /> &nbsp 397
                views</span
              >
            </div>
          </div>
          <!-- img x Three -->
        </div>
      </div>
    </div>
    <!-- SECTION 5 -->
    <div class="sectionSix">
      <div class="container">
        <div class="row mt-5">
          <div class="col-12 text-center mt-5">
            <p>WANNA TRANSFORM YOUR LIFE?</p>
          </div>
          <div class="col-12 text-center">
            <h1 class="ps-4">
              Glad to<font color="$mountain-meadow"> Help You</font> Learn
            </h1>
          </div>
        </div>
      </div>
      <!-- TITOLO -->
      <div class="container">
        <div class="row row-cols HelpYouLearn d-flex justify-content-between">
          <div class="col-3 learn">
            <img src="../assets/img/flag.png" height="20%" />
            <h3 class="pt-3">Idea Discussion</h3>
            <p>
              Get teamed up with the specialists who work and teach coding for
              years at famous universities
            </p>
          </div>
          <div class="col-3 learn">
            <img src="../assets/img/gear2.png" height="20%" />
            <h3 class="pt-3">Web Development</h3>
            <p>
              Learn to start building a webpage from scratch. You decide your
              own pace, course and speed.
            </p>
          </div>
          <div class="col-3 learn">
            <img src="../assets/img/lifesaver.png" height="20%" />
            <h3 class="pt-3">System Administration</h3>
            <p>
              Learners are encouraged to study the mechanism and structure of
              system administration.
            </p>
          </div>
          <div class="col-3 learn">
            <img src="../assets/img/pc.png" height="20%" />
            <h3 class="pt-3">Graphic Design</h3>
            <p>
              Have a passion for graphics and arts? Show your talents with
              confidence and self-assertiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 6 -->
    <div class="sectionSeven">
      <div class="flex-container text-center">
        <div class="row">
          <div class="col">
            <img
              src="../assets/img/home-6-services-image.png"
              height="110%"
              class="imghome"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 7 -->
    <div class="sectionEight">
      <div class="flex-container">
        <div class="row">
          <div class="col-12 text-center getStarted">
            <h5 class="ps-4">
              Start today for getting
              <font color="$mountain-meadow"> Online Certification</font>
            </h5>
          </div>
          <div class="col-12 text-center">
            <h3 class="ps-4">
              You can be your own guiding star with our help!
            </h3>
          </div>
          <div class="ps-4 pt-5 d-flex justify-content-center">
            <button type="button" class="btn btn-success">
              <b>Get started now</b>
            </button>
            <div class="palline">
              <div class="pallina"></div>
              <div class="pallina1"></div>
              <div class="pallina2"></div>
              <div class="pallina3"></div>
              <div class="pallina4"></div>
              <div class="pallina5"></div>
              <div class="pallina6"></div>
              <div class="pallina7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 8 -->
  </main>
</template>

<style lang="scss">
.sectionOne {
  padding-top: 5rem;
  background-color: rgb(249, 249, 249);

  .titleOne {
    padding-top: 10rem;
    width: 300px;
    position: relative;
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
  .balls {
    .ball {
      width: 1.5rem;
      height: 1.5rem;
      background-color: rgba(188, 113, 254, 0.603);
      position: absolute;
      border-radius: 50%;
      top: 35%;
      left: 45%;
    }
    .ball1 {
      width: 2rem;
      height: 2rem;
      background-color: rgb(255, 130, 101);
      position: absolute;
      border-radius: 50%;
      top: 80%;
      left: 15%;
    }
    .ball2 {
      width: 3rem;
      height: 3rem;
      background-color: rgb(235, 184, 96);
      position: absolute;
      border-radius: 50%;
      top: 130%;
      left: 8%;
    }
    .ball3 {
      width: 3rem;
      height: 3rem;
      background-color: white;
      position: absolute;
      border-radius: 50%;
      top: 10%;
      left: 8%;
      border: 6px solid rgb(143, 214, 202);
    }
    .ball4 {
      width: 3rem;
      height: 3rem;
      background-color: white;
      position: absolute;
      border-radius: 50%;
      top: 140%;
      left: 82%;
      border: 6px solid rgb(246, 185, 170);
    }
    .ball5 {
      width: 2rem;
      height: 2rem;
      background-color: rgb(232, 140, 152);
      position: absolute;
      border-radius: 50%;
      top: 70%;
      left: 82%;
    }
    .ball6 {
      width: 2rem;
      height: 2rem;
      background-color: rgb(170, 184, 241);
      position: absolute;
      border-radius: 50%;
      top: 100%;
      left: 70%;
    }
  }
}
// sectiob 1
.sectionTwo {
  background-color: rgb(249, 249, 249);
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
    width: 40%;
    display: flex;
    justify-content: center;
  }

  .services {
    margin-top: 10rem;
    max-width: 22rem;
    margin-left: 1.5rem;
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
  background-color: rgb(245, 247, 250);
  img {
    max-width: 30%;
    height: auto;
    object-fit: cover;
    border-radius: 100%;
  }

  .boxTextImg {
    max-width: 500px;
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
  .lessons > .icone {
    color: grey;
  }
  .lessons > b {
    padding-top: 0.3rem;
    color: grey;
  }
  .btn {
    height: 3rem;
    width: 12rem;
    background-color: rgb(31, 173, 150);
  }
}
// section 3
.sectionFour {
  background-color: rgb(254, 254, 254);

  .sponsor {
    line-height: 1.5;
  }
  .pos {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .pos > p {
    width: 6rem;
    height: 6rem;
    background-color: burlywood;
    border-radius: 50%;
    position: absolute;
    left: 14rem;
  }
  .testimonial {
    background-color: burlywood;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  }
  .maxcoach {
    position: absolute;
    top: 6rem;
    right: 13rem;
    z-index: 1;
  }
}
// section 4
.sectionFive {
  background-color: rgb(248, 248, 248);
  padding-bottom: 15rem;
  .imgxThree {
    margin-top: 2rem;
  }
  .imgxThree > img {
    max-width: 100%;
  }
  .textFive > h6 {
    color: grey;
  }
  .spanFive {
    color: grey;
    font-size: 12px;
    font-weight: bold;
  }
  img {
    border-radius: 10px;
  }
}
//section 5
.sectionSix {
  background-color: rgb(254, 254, 254);
  .HelpYouLearn {
    margin-top: 5rem;

    .learn {
      max-height: 400px;
      max-width: 300px;
      padding: 1rem;
    }
  }
}
//section 6
.sectionSeven {
  background-color: rgb(248, 248, 248);
  .imghome {
    margin: -0.7rem;
  }
}
//section 7
.sectionEight {
  background-color: rgb(255, 255, 255);
  height: 350px;
  position: relative;
  .getStarted {
    margin-top: 5rem;
  }
  .btn {
    height: 3rem;
    width: 15rem;
    background-color: rgb(31, 173, 150);
  }
  .palline {
    .pallina01 {
      width: 1.5rem;
      height: 1.5rem;
      background-color: rgba(188, 113, 254, 0.603);
      position: absolute;
      border-radius: 50%;
      top: 35%;
      left: 45%;
    }
    .pallina1 {
      width: 2rem;
      height: 2rem;
      background-color: rgb(255, 130, 101);
      position: absolute;
      border-radius: 50%;
      top: -20%;
      left: 7%;
    }
    .pallina2 {
      width: 3rem;
      height: 3rem;
      background-color: rgb(235, 184, 96);
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 8%;
    }
    .pallina3 {
      width: 3rem;
      height: 3rem;
      background-color: rgb(248, 248, 248);
      position: absolute;
      border-radius: 50%;
      top: -110%;
      left: 20%;
      border: 6px solid rgb(143, 214, 202);
    }
    .pallina4 {
      width: 3rem;
      height: 3rem;
      background-color: rgba(143, 214, 202, 0.699);
      position: absolute;
      border-radius: 50%;
      top: -110%;
      left: 90%;
    }
    .pallina5 {
      width: 2.5rem;
      height: 2.5rem;
      background-color: rgb(232, 140, 152);
      position: absolute;
      border-radius: 50%;
      top: 10%;
      left: 82%;
    }
    .pallina6 {
      width: 2rem;
      height: 2rem;
      background-color: rgb(170, 184, 241);
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 90%;
    }
  }
}
//section 8
</style>
