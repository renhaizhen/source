<template>
  <div>
      <div class="top_banner">
				<img src="@/assets/img/page_alevel/background.png">
			</div>
			<div class="list_item">
				<ul class="menuleval flex auto justify">
					<li class="first_item alevalli">
						<a href="#test">了解Alevel课程</a>
					</li>
					<li>
						<a href="#request">名校Alevel要求</a>
					</li>
					<li>
						<a href="#request">沪上Alevel名校</a>
					</li>
					<li class="alevalLi">
						<a href="#subject">课程优势</a>
					</li>
					<li class="alevalLi">
						<a href="#teacher">名师团队</a>
					</li>
				</ul>
			</div>
			<div class="line"></div>
			<!-- 轮播 -->
			<div class="lunbo bg" id="test">
                <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
        <!-- slides -->
        <div class="swiper-slide" v-for="(slide, index) in alevalLun" :key="index">
          <img :src="slide" alt>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
				<div class="big_btn tinified_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					立即预定 独家A Level辅导课程
				</div>
			</div>
			<div class="line"></div>
			<div class="item6" id="request">
				<div class="school_text">
					<p>世界一流大学</p>
					<p>对A Level成绩的要求有多高</p>
				</div>
				<div class="box">
					<div class="school_menu">
						<span @click="changeimg(un)" :data='un'>英国名校A Level成绩录取</span>
						<span @click="changeimg(usa)" :data='usa'>美国国名校A Level成绩录取</span>
						<span @click="changeimg(shanghai)" :data='shanghai'>沪上A Level名校</span>
					</div>
				</div>
				<div class="imgBox">
					<img class="un active" src="@/assets/img/page_alevel/un.png">
					<img class="usa" src="@/assets/img/page_alevel/usa.png">
					<img class="shanghai" src="@/assets/img/page_alevel/shanghai.png">
				</div>
				<div class="big_btn alevel_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					立即预定 独家A Level辅导课程
				</div>
			</div>
			<div class="item5" id="subject">
				<img src="@/assets/img/page_alevel/subject.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					限时定制 名校备考学习规划
				</div>
			</div>
			<div class="line"></div>
			<div class="item5">
				<img src="@/assets/img/page_alevel/liucheng.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					限时定制 名校备考学习规划
				</div>
			</div>
			<div class="lunbo" id="teacher">
				<div class="lunbo_text">
					<h2>国内顶级名师团队</h2>
					<div>高资历海归教研团队独立研发教学体系</div>
				</div>
				<swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
        <!-- slides -->
        <div class="swiper-slide" v-for="(slide, index) in alevalTeacher" :key="index">
          <img :src="slide" alt>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					立即预约名师
				</div>
			</div>
  </div>
</template>

<script>
export default {
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
      alevalLun: [
        require("@/assets/img/page_alevel/lun1.png"),
        require("@/assets/img/page_alevel/lun2.png"),
      ],
      alevalTeacher: [
        require("@/assets/img/page_alevel/teacher1.png"),
        require("@/assets/img/page_alevel/teacher2.png")
      ],
      usa:'usa',
      un:'un',
      shanghai:'shanghai'
    };
  },
  created() {
    console.log(this.$route.path);
  },
  methods: {
      changeimg(data){
                    console.log(data)
					var showImg = $(".imgBox img")
					for( let i = 0;i<showImg.length;i++){
						showImg[i].style.display="none"
					}
					if(data=="un"){
						$(".un")[0].style.display = "block"
					}else if(data=="usa"){
						$(".usa")[0].style.display = "block"
					}else if(data=="shanghai"){
						$(".shanghai")[0].style.display = "block"
					}
				}
  },
  mounted() {
    this.swiper.slideTo(1, 1000, true);
  }
}
</script>

<style>
.wrapper .list_item .menuleval{
	width: 7.02rem;
	flex-wrap: wrap;
	justify-content: space-between;
}
.wrapper .list_item .menuleval li{
	background: url(../../assets/img/page_alevel/circle2.png);
	background-size: 100%;
	color: #2D5A93;
}
.wrapper .list_item .menuleval li a{
	color: #407EF8;
}
.wrapper .list_item .menuleval .alevalli a{
	color: #ffffff;
}
.wrapper .list_item .menuleval li:nth-of-type(1) {
	background: url(../../assets/img/page_alevel/circle1.png);
	background-size: 100%;
}
.wrapper .list_item .menuleval li:nth-of-type(1),.wrapper .list_item .menuleval li:nth-of-type(2),.wrapper .list_item .menuleval li:nth-of-type(3),.wrapper .list_item .menuleval li:nth-of-type(4){
	margin-left:0 ;
}
.wrapper .list_item .menuleval li:nth-of-type(4){
    margin-top: .47rem;
	margin-left: 1.18rem;
	margin-bottom:.47rem ;
}
.wrapper .list_item .menuleval li:nth-of-type(5){
    margin-right: .81rem;
    margin-top: .47rem;
    
}
.wrapper .list_item .menuleval{
	width: 7.02rem;
	flex-wrap: wrap;
    justify-content: space-between;
    margin-top: .34rem;
}
.swiper-container-horizontal>.first-pagination{
	top: 4.33rem;
}
.swiper-container-horizontal>.swiper-pagination-bullets{
	height: .7rem;
}
.swiper-container-horizontal>.footer_pagination{
	height: .7rem;
	top: 3.6rem;
}
.wrapper .bg{
	background: url(../../assets/img/page_alevel/lunbackground.png);
	background-size: 100%;
	background-repeat: no-repeat;
}
.wrapper .lunbo{
	position: relative;
	overflow: hidden;
}
.lunbo .swiper-container{
	margin-top: 1.19rem;
}
/* .lunbo .swiper-box{
	margin-top: .31rem;
} */
.lunbo .lunbo_text{
	margin-top: .55rem;
	margin-bottom: .1rem;
}
.wrapper .lunbo .tinified_btn{
	float: left;
	/* position: absolute; */
	left: 0;
	bottom: -.1rem;
	z-index: 55;
}
.item6 .alevel_btn{
	position: static;
	margin: 0 auto;
	margin-bottom: .67rem;
	margin-top: .57rem;
}
.item6 .school_text{
	width: 3.9rem;
	height: .74rem;
	margin: 0 auto;
	text-align: center;
	color: #333333;
	font-size: .3rem;
	line-height: .44rem;
	font-family: MicrosoftYaHei;
	font-weight: bold;
	margin-bottom: .26rem;
	margin-top: .39rem;
}

.box{
	width: 7.5rem;
	height:.6rem ;
	overflow-x: scroll;
}
.school_menu {
	margin-left: .24rem;
	margin-bottom: .47rem;
	height: .6rem;
	width: 10.36rem;
}
.school_menu span{
	display: inline-block;
	width: 3.2rem;
	height: .58rem;
	background: #FFFFFF;
	color: #5489F1;
	margin-right: .15rem;
	text-align: center;
	line-height: .58rem;
	border: 1px solid #5489F1;
	white-space:nowrap
}
.imgBox img{
	display: none;
}
.imgBox .active{
	display: block;
}
.item6 .alevel_btn{
	color:#FFFFFF ;
	margin-bottom: .67rem;
}
.school_menu span:nth-of-type(1){
	background: #5489F1;
	color: #FFFFFF;
}
.footer .dataBox .dataBox_text{
	width: 2.58rem;
}
.item1 .big_btn,.item2 .big_btn,.item5 .big_btn,.item6 .big_btn,.item7 .big_btn,.lunbo .tinified_btn,.lunbo .big_btn,.dataBox .submit-btn{
	background: #5489F1;
}
</style>
