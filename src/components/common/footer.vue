<template>
  <div class="footer flex">
				<div class="dataBox">
					<div class="dataBox_text">
						<h2>三立AP</h2>
						<p>一对一精品课试听</p>
					</div>
					<div class="dataBox_inner submit-data">
						<input type="text" class="submit-name" name="name" placeholder="请输入您的姓名" />
						<input type="text" class="must last submit-tel" name="tel" placeholder="请输入您的电话" />
						<div class=" submit-btn">
							点击申请
						</div>
					</div>
				</div>
			</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
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
