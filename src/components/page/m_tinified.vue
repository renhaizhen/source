<template>
  <div>
    		<div class="top_banner">
				<img src="@/assets/img/page_tinified/background.png">
			</div>
			<div class="list_item">
				<ul class=" tinul menu flex auto justify">
					<li class="first_item tinli">
						<a href="#test">了解Toefl Junior</a>
					</li>
					<li>
						<a href="#score">三立课程优势</a>
					</li>
					<li>
						<a href="#teacher">三立名师团队</a>
					</li>
				</ul>
			</div>
			<div class="item1" id="test">
				<img src="@/assets/img/page_tinified/des.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					限时定制TOEFL Junior学习规划
				</div>
			</div>
			<div class="line"></div>
			<!-- 轮播 -->
			<div class="lunbo">
         <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
      <!-- slides -->
      <div class="swiper-slide" v-for="(slide, index) in tinfinedGrade" :key="index">
        <img :src="slide" alt>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
				<div class="big_btn tinified_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					免费申请试听小托福课程
				</div>
			</div>
			<div class="line"></div>
			<div class="item4">
				<img src="@/assets/img/page_tinified/leveal.png">
			</div>
			<div class="line"></div>
			<div class="item5" id="1v1">
				<img src="@/assets/img/page_tinified/shuiping.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					申请测试了解对应小托福水平
				</div>
			</div>
			<div class="line"></div>
			<div class="item5">
				<img src="@/assets/img/page_tinified/time.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					点击报名2019年TOEFL Junior考试
				</div>
			</div>
			<div class="line"></div>
			<div class="item7" id="score">
				<img src="@/assets/img/page_tinified/class.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					限时申请TOEFL Junior体验课
				</div>
			</div>
			<div class="item7">
				<img src="@/assets/img/page_tinified/liucheng.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					免费申请小托福测试体验课
				</div>
			</div>
			<carousel></carousel>
  </div>
</template>

<script>
import carousel from "../common/Carousel.vue";

export default {
  	name:'m_tinifide',
	components: {
    carousel,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  data(){
    return{
      swiperOption: {
        pagination: ".swiper-pagination",
        direction: "horizontal",
        autoplay: true,
        loop: true
      },
      imgSrc:'',
      tinfinedTeacher:[
        require("@/assets/img/page_tinified/teacher1.png"),
        require("@/assets/img/page_tinified/teacher2.png"),
        require("@/assets/img/page_tinified/teacher3.png")
      ],
      tinfinedGrade:[
        require("@/assets/img/page_tinified/grade1.png"),
        require("@/assets/img/page_tinified/grade2.png"),
      ]
    }
  },
    created(){
	console.log(this.$route.path)
	let str = this.$route.path
	if(str == "/tinified"){
		this.imgSrc = this.tinfinedTeacher
	}
  },
  methods:{

  },
  mounted() {
    this.swiper.slideTo(1, 1000, true);
  }
}
</script>
<style>
.wrapper .list_item .tinul{
  margin-bottom: .47rem;
}
.wrapper .list_item .tinul li{
	background: url(../../assets/img/page_tinified/circle2_2.png);
	background-size: 100%;
	color: #2D5A93;
}
.wrapper .list_item .tinul li a{
	color: #2D5A93;
}
.wrapper .list_item .tinul li:nth-of-type(1) {
	background: url(../../assets/img/page_tinified/circle2_1.png);
  background-size: 100%;
}
.wrapper .list_item .tinul .tinli a{
  color: #ffffff;
}
.wrapper .list_item .tinul li:nth-of-type(1),.wrapper .list_item .tinul li:nth-of-type(2),.wrapper .list_item .tinul li:nth-of-type(3){
  margin-left:0 ;
  margin-top: .33rem;  
}
.wrapper .list_item .menu{
	width: 7.02rem;
	flex-wrap: nowrap;
	justify-content: space-between;
}
.swiper-container-horizontal>.swiper-pagination-bullets{
	top: 6.03rem;
	height: .7rem;
}
.wrapper .lunbo{
	position: relative;
	overflow: hidden;
}
.lunbo .lunbo_text{
	margin-top: .55rem;
}
.wrapper .lunbo .tinified_btn{
	position: absolute;
	left: 0;
	bottom: -.1rem;
	z-index: 55;
}
.footer .dataBox .dataBox_text{
	width: 2.58rem;
}
</style>
