<template>
  <div class="lunbo" id="teacher">
    <div class="lunbo_text">
      <h2>国内顶级名师团队</h2>
      <p>高资历海归教研团队独立研发教学体系</p>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
      <!-- slides -->
      <div class="swiper-slide" v-for="(slide, index) in imgSrc" :key="index">
        <img :src="slide" alt>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">立即预约名师</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        direction: "horizontal",
        autoplay: true,
        loop: true
      },
      imgSrc:[
      ],
      apTeacher: [
        require("@/assets/img/page_ap/teacher1.png"),
        require("@/assets/img/page_ap/teacher2.png"),
        require("@/assets/img/page_ap/teacher3.png")
      ],
      tinfinedTeacher:[
        require("@/assets/img/page_tinified/teacher1.png"),
        require("@/assets/img/page_tinified/teacher2.png"),
        require("@/assets/img/page_tinified/teacher3.png")
      ],
       ibTeacher: [
        require("@/assets/img/page_ib/teacher1.png"),
        require("@/assets/img/page_ib/teacher2.png")
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created(){
    console.log(this.$route.path)
    let aa = this.$route.path
    if(aa =='/index'){
      this.imgSrc = this.apTeacher
    }else if (aa =  '/tinified'){
      this.imgSrc = null
      this.imgSrc = this.tinfinedTeacher
    }else if(aa = '/ib'){
      this.imgSrc = null
      this.imgSrc = this.ibTeacher
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, true);
  }
};
</script>