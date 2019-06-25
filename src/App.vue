<template>
  <div class="wrapper">
    <vHead></vHead>
    <router-view/>
    <vFoot></vFoot>
  </div>
</template>

<script>
import vHead from "./components/common/header.vue";
import vFoot from "./components/common/footer.vue";
export default {
  name: 'App',
    components: {
    vHead,
    vFoot
  },
}
</script>

<style>
html,body{
	width: 7.5rem;
}
.wrapper{
	width: 7.5rem;
}
.wrapper .top_nav{
	height: .94rem;
}
.wrapper .list_item{
	background-color: #FFFFFF;
}
.wrapper .list_item ul{
	width: 4.92rem;
	flex-wrap: wrap;
}
.wrapper .list_item ul li{
	width: 2.14rem;
	height: .59rem;
	color: #E25D30;
	text-align: center;
	line-height: .59rem;
}
.line{
	height: .2rem;
	background: #ededed;
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
