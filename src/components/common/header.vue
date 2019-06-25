<template>
<div>
    <div class="top_nav">
				<div class="left" onclick="$('.top_nav').off('click').on('click',function(){$('.top_menu').toggle(500)});">
					<img src="@/assets/nav.png" >
				</div>
				<div class="right">
					<div class="tel">
						<a href="tel:4008083771"><img src="@/assets/tel.png"></a>
					</div>
				</div>
	</div>
	<ul class="top_menu" style="display: none;">
					<li><a href="">SAT</a></li>
					<li @click="toTinified">TOEFL Junior</li>
					<li><a href="">AP</a></li>
					<li><a href="">IB</a></li>
					<li><a href="">品牌</a></li>
					<li><a href="">AEIS</a></li>
					<li><a href="">A-level</a></li>
					<li><a href="">AEIS</a></li>
					<li><a href="">AEIS</a></li>
					<li><a href="">AEIS</a></li>
				</ul>
	</div>
</template>

<script>
export default {
 data(){
     return{

     }
 },
}
</script>

<style>
.wrapper .top_nav{
	height: .94rem;
}
.wrapper .top_nav{
	height: .94rem;
	overflow: hidden;
}
.top_nav .left{
	width: 1.09rem;
	height: .94rem;
	float: left;
}
.top_nav .right{
	background: #333333;
	width: 6.41rem;
	height: .94rem;
	float: right;
}
.right .tel{
	width: 2.27rem;
	height: .35rem;
	margin-left: 3.87rem;
	margin-top:.32rem ;
}
.top_menu{
	position: absolute;
	width: 2.09rem;
	background: #000000;
	opacity: 0.64;
	left: 0;
	top: 0;
	z-index: 50;
}
.top_menu li{
	text-align: center;
	width: 2.09rem;
	margin-top: .34rem;
}
.top_menu li:nth-of-type(10){
	margin-bottom: .34rem;
}
.top_menu li a{
	color:#FFFFFF ;
	font-size: .24rem;
	font-weight: 400;
	font-family: PingFangSC-Regular;
	line-height: .15rem;
}
</style>
