<template>
  <div>
    <div class="top_banner">
				<img src="@/assets/img/page_ap/background.png">
				<div class="banner_btn flex justify">
					<a onclick="doyoo.util.openChat('g=10077096');return false;" class="btn1" target="_blank">
						寻求名师规划
					</a>
					<a onclick="doyoo.util.openChat('g=10077096');return false;" class="btn2" target="_blank">
						我要参加模考
					</a>
				</div>
			</div>
			<div class="list_item">
				<ul class="apul flex auto justify">
					<li class="first_item">
						<a href="#test">了解AP考试</a>
					</li>
					<li class="apli">
						<a href="#score">AP高分榜</a>
					</li>
					<li class="apli">
						<a href="#1v1">三立课程优势</a>
					</li>
					<li class="apli">
						<a href="#teacher">名师团队</a>
					</li>
				</ul>
			</div>
			<div class="item1" id="test">
				<img src="@/assets/img/page_ap/des.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					免费申请AP课程试听
				</div>
			</div>
			<div class="item2">
				<img src="@/assets/img/page_ap/item2.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					咨询获取AP全科5分方法
				</div>
			</div>
			<div class="item3">
				<img src="@/assets/img/page_ap/jiebao.png">
			</div>
			<div class="item4" id="score">
				<h2>2018年7月AP高分</h2>
				<img src="@/assets/img/page_ap/score.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					立即预约规划师规划
				</div>
			</div>
			<div class="item5" id="1v1">
				<img src="@/assets/img/page_ap/1v1.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					了解更多AP课程安排
				</div>
			</div>
			<div class="item6">
				<img src="@/assets/img/page_ap/liucheng.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					限时定制AP高分备考规划
				</div>
			</div>
			<div class="item7">
				<img src="@/assets/img/page_ap/table.png">
				<div class="big_btn" onclick="doyoo.util.openChat('g=10077096');return false;">
					立即试听SAT2&AP同步辅导课
				</div>
			</div> 
			<div class="line"></div>
			<carousel></carousel>
  </div>
</template>

<script>
import carousel from "../common/Carousel.vue";

export default {
	name:'m_ap',
	components: {
    carousel,
  },
  data(){
    return{
		apTeacher: [
        require("@/assets/img/page_ap/teacher1.png"),
        require("@/assets/img/page_ap/teacher2.png"),
        require("@/assets/img/page_ap/teacher3.png")
	  ],
	  imgSrc:[]
    }
  },
   created(){
	console.log(this.$route.path)
	let str = this.$route.path
	if(str =="/index"){
		console.log(54556)
		this.imgSrc = this.apTeacher
	}
  },
  methods:{
  }
}
</script>

<style>
.wrapper .top_banner{
	position: relative;
	/* overflow: hidden; */
}
.wrapper .banner_btn{
	position: absolute;
	left: 1.18rem;
	bottom: .44rem;
}
.wrapper .top_banner img{
	width: 100%;
	height: 100%;
}
.wrapper .top_banner .banner_btn{
	width: 5.17rem;
}
.wrapper .top_banner .banner_btn a{
	display: inline-block;
	width: 2.24rem;
	height: .6rem;
	border-radius: 0.9375rem;
	background-color: #FFFFFF;
	color: #b13430;
	font-size: .24rem;
	text-align: center;
	line-height: .6rem;
}
.wrapper .list_item{
	background-color: #FFFFFF;
}
.wrapper .list_item .apul{
	width: 4.92rem;
	flex-wrap: wrap;
}
.wrapper .list_item .apul .apli{
	width: 2.14rem;
	height: .59rem;
	flex-shrink:0;
	background-color: #FFFFFF;
	background: url(../../assets/img/page_ap/circle2.png);
	background-size: 100%;
	color: #E25D30;
	text-align: center;
	line-height: .59rem;
}
.wrapper .list_item .apul li:nth-of-type(1) {
	/* background-color: #e25d30; */
	background: url(../../assets/img/page_ap/circle1.png);
	background-size: 100%;
}
.wrapper .list_item .apul li:nth-of-type(1) a{
	color: #FFFFFF;
}
.wrapper .list_item .apul li:nth-of-type(3),.wrapper .list_item .apul li:nth-of-type(4){
	margin-top:.34rem ;
	margin-bottom: .47rem;
}
.wrapper .list_item .apul li:nth-of-type(1),.wrapper .list_item .apul li:nth-of-type(2){
	margin-top:.33rem ;
}
.wrapper .list_item .apul li:nth-of-type(2),.wrapper .list_item .apul li:nth-of-type(4){
	margin-left: .62rem;
}
.wrapper .list_item .apul li a{
	font-size: 0.24rem;
	color: #E25D30;
	line-height:.52rem ;
}
.wrapper img{
	width: 100%;
	height: 100%;
	display: block;
}
.item1,.item2,.item5,.item6,.item7{
	position: relative;
	overflow: hidden;
}
.item1 .big_btn,.item2 .big_btn,.item5 .big_btn,.item6 .big_btn,.item7 .big_btn{
	position: absolute;
	width: 5.37rem;
	height: .73rem;
	left: 1.06rem;
	bottom: .34rem;
	background-color: #E25D30;
	text-align: center;
	line-height: .73rem;
	color: #FFFFFF;
	font-size: .26rem;
}	
.item2 .big_btn{
	bottom: .6rem;
}
.item4 h2{
	color: #333333;
	font-size: .34rem;
	font-family:MicrosoftYaHei-Bold ;
	text-align: center;
	font-weight: bold;
	line-height: .34rem;
	padding: .46rem 2.3rem .46rem 2.3rem;
}
.item4 .big_btn,.lunbo .big_btn,.dataBox .big_btn{
	display: block;
	width: 5.37rem;
	height: .73rem;
	background-color: #E25D30;
	text-align: center;
	line-height: .73rem;
	color: #FFFFFF;
	font-size: 0.26rem;
	margin-bottom: .55rem;
	margin-left: 1.06rem;
	margin-top: .55rem;
}
.item6 .big_btn{
	background-color: #FFFFFF;
	color: #E25D30;
}
.lunbo_text h2 ,.dataBox_text h2{
	text-align: center;
	line-height: .44rem;
	font-weight: bold;
	font-size:.3rem ;
}
.lunbo .lunbo_text,.dataBox_text{
	margin: 0 auto;
	width: 4.41rem;
	height: .71rem;
	margin-bottom: .3rem;
	text-align: center;
}
.lunbo .swiper-box{
	width: 7.02rem;
	height: auto;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
    width: .13rem;
    height: .13rem;
}
.dataBox_text{
	margin-top: .44rem;
	width: 2.08rem;
	height: .7rem;
}
.footer{
	width: 7.5rem;
	height: 5.75rem;
	background: #2e2e2e;
	display: -webkit-flex;
	align-items: center;
	justify-content: center;
}
.dataBox{
	width: 7.03rem;
	height: 5.04rem;
	background: #FFFFFF;
}
.dataBox_inner{
	margin-left:.42rem ;
	margin-top: .41rem;
}
.dataBox_inner input{
	display: block;
	width: 6.19rem;
	height: .73rem;
	border-radius: .37rem;
	background: #f0f0ff;
	text-indent: .34rem;
}
.dataBox_inner input:nth-of-type(2){
	margin-top: .32rem;
}
.dataBox .submit-btn{
	margin-left: .43rem;
	width: 5.37rem;
	height: .73rem;
	background-color: #E25D30;
	text-align: center;
	line-height: .73rem;
	color: #FFFFFF;
	font-size: 0.26rem;
	margin-bottom: .48rem;
	margin-top: .55rem;
}

</style>
