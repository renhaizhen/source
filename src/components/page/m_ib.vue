<template>
  <div>
    <div class="top_banner">
      <img src="@/assets/img/page_ib/background.png">
    </div>
    <div class="list_item">
      <ul class="menus flex auto justify">
        <li class="first_item ib">
          <a href="#know" class="menu1">了解IB考试</a>
        </li>
        <li>
          <a href="#mingxiao" class="menu1">沪上IB名校</a>
        </li>
        <li>
          <a href="#request" class="menu1">名校IB高分要求</a>
        </li>
        <li>
          <a href="#skill">IB高分技巧</a>
        </li>
        <li>
          <a href="#advantage">三立IB课程优势</a>
        </li>
        <li>
          <a href="#teacher">三立名师团队</a>
        </li>
      </ul>
    </div>
    <!-- 轮播 -->
    <div class="lunbo" id="know">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
        <!-- slides -->
        <div class="swiper-slide" v-for="(slide, index) in ibGlobe" :key="index">
          <img :src="slide" alt>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div
        class="big_btn ib_btn"
        onclick="doyoo.util.openChat('g=10077096');return false;"
      >立即咨询 课程顾问为你一一解答</div>
    </div>
    <div class="line"></div>
    <div class="item1" id="mingxiao">
      <img src="@/assets/img/page_ib/shnaghai.png">
      <div
        class="big_btn alevel_btn"
        onclick="doyoo.util.openChat('g=10077096');return false;"
      >立即预定 独家IB辅导课程</div>
    </div>
    <div class="line"></div>
    <div class="item5" id="request">
      <img src="@/assets/img/page_ib/popular.png">
      <div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">立即预定 独家IB辅导课程</div>
    </div>
    <div class="line"></div>
    <!-- 轮播 -->
    <div class="lunbo" id="skill">
      <div class="lunbo_text">
        <p class="title">
          三立国际教育
          <span class="text_color">IB课程</span>提分指导
        </p>
        <p class="cc">各科需要在6分以上才合格，各科合格总分是36分</p>
        <p class="cc">申请顶尖大学需要获得38分以上</p>
      </div>
      <div class="box">
        <div class="school_menu">
          <img class="left" src="@/assets/img/page_ib/left.png">
          <img class="right" src="@/assets/img/page_ib/right.png">
        </div>
      </div>
      <div class="lunbo_box">
        <p class="text_color">IB考试重点</p>
        <p>如果学生想要获得满分，往年的IB考试题目是需要去练习的，因为期末考试中的试题往往是类似的风格，相同系数的难度</p>
        <p>每年12月份中国考生需要提交IB考试报名，次年5月再去参加IB科目考试，因此学生需要平时巩固所选科目成绩，考前集中冲刺强化提分</p>
      </div>
      <div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">立即预定 独家IB辅导课程</div>
    </div>
    <div class="line"></div>
    <div class="lunbo bg" id="advantage">
      <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
        <!-- slides -->
        <div class="swiper-slide" v-for="(slide, index) in ibSubject" :key="index">
          <img :src="slide" alt>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">立即预定 独家IB辅导课程</div>
    </div>
    <div class="item1" id="advantage">
      <img src="@/assets/img/page_ib/liucheng.png">
      <div
        class="big_btn alevel_btn"
        onclick="doyoo.util.openChat('g=10077096');return false;"
      >立即预定 独家IB辅导课程</div>
    </div>
    <carousel></carousel>
  </div>
</template>

<script>
import carousel from "../common/Carousel.vue";

export default {
  name: "m_ib",
  components: {
    carousel
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        direction: "horizontal",
        autoplay: true,
        loop: true
      },
      imgSrc: "",
      ibSubject: [
        require("@/assets/img/page_ib/subject1.png"),
        require("@/assets/img/page_ib/subject2.png"),
        require("@/assets/img/page_ib/subject3.png")
      ],
      ibGlobe: [
        require("@/assets/img/page_ib/globe1.png"),
        require("@/assets/img/page_ib/globe2.png")
      ]
    };
  },
  created() {
    console.log(this.$route.path);
  },
  methods: {},
  mounted() {
    this.swiper.slideTo(1, 1000, true);
  }
};
</script>

<style>
.wrapper .list_item .menus {
  width: 7.02rem;
  margin-top: .33rem;
  margin-bottom: .53rem;
  flex-wrap: wrap;
  justify-content: space-around;
}
.wrapper .list_item .menus li a {
  color: #407ef8;
  font-weight: 400;
}
.wrapper .list_item .menus li:nth-of-type(1),
.wrapper .list_item .menus li:nth-of-type(2),
.wrapper .list_item .menus li:nth-of-type(3),
.wrapper .list_item .menus li:nth-of-type(4) {
  margin: 0;
}
.wrapper .list_item .menus li:nth-of-type(1),
.wrapper .list_item .menus li:nth-of-type(2),
.wrapper .list_item .menus li:nth-of-type(3) {
  margin-bottom: 0.25rem;
}
.wrapper .list_item .menus li {
  background: url(../../assets/img/page_ib/circle2.png);
  background-size: 100%;
  color: #2d5a93;
}
.wrapper .list_item .menus .ib {
  background: url(../../assets/img/page_ib/circle1.png);
  background-size: 100%;
  color: #ffffff;
}
.wrapper .list_item .menus .first_item a {
  color: #ffffff;
}
.wrapper .lunbo {
  position: relative;
}
.wrapper .lunbo .ib_btn {
  position: absolute;
  z-index: 3;
  margin-bottom: 0;
  bottom: 0.46rem;
}
.box {
  width: 7.5rem;
  height: 2.57rem;
  overflow-x: scroll;
  margin-top: 0.74rem;
  margin-bottom: 0.31rem;
}
.school_menu {
  margin-left: 0.24rem;
  height: 2.57rem;
  width: 9.36rem;
}
.school_menu img {
  display: inline-block;
}
.school_menu .left {
  width: 6.85rem;
}
.school_menu .right {
  width: 1.49rem;
}
.lunbo .lunbo_text {
  width: 5.23rem;
  margin-top: 0.44rem;
}
.lunbo_text .title {
  color: #333333;
  font-size: 0.34rem;
  line-height: 0.4rem;
  font-weight: bold;
}
.lunbo_text .cc {
  line-height: 0.4rem;
}
.text_color {
  color: #e25d30;
}
.lunbo .lunbo_box {
  margin-left: 0.24rem;
}
.lunbo_box p {
  font-size: 0.2rem;
  line-height: 0.32rem;
  color: #333333;
  font-family: MicrosoftYaHei;
}
.lunbo_box p:nth-of-type(2) {
  margin-bottom: 0.16rem;
}
.lunbo_box .text_color {
  font-size: 0.24;
  font-weight: bold;
  line-height: 0.4rem;
}
.lunbo .swiper-container{
    margin-top: 0;
}
</style>
