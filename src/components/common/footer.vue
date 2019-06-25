<template>
  <div class="footer flex">
				<div class="dataBox">
					<div class="dataBox_text">
						<h2>三立AP</h2>
						<p>一对一精品课试听</p>
					</div>
					<div class="dataBox_inner submit-data">
						<input type="text" class="submit-name" v-model="name" name="name" placeholder="请输入您的姓名" />
						<input type="text" class="must last submit-tel" v-model="mobileNumber" name="tel" placeholder="请输入您的电话" />
						<div class=" submit-btn" @click="sendMessage">
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
			name:'',
			mobileNumber:''
        }
	},
	methods:{
		sendMessage(){
					var url = window.location.href;
					var index = url.indexOf('?');
					var urlParameter = ''; //URL推广参数
					if (index != -1) {
						urlParameter = url.substr(index + 1);
					}
						console.log(url,index)

					if (this.mobileNumber == "") {
						alert('请填写手机号码！');
					} else {
						var tel_reg = /^1\d{10}$/;
						if (tel_reg.test(this.mobileNumber)) {
							var content = {
								'姓名': this.name,
								'推广参数': urlParameter
							};
							$.ajax({
								type: 'post',
								url: 'http://106.14.51.21/ajax/userform/save-without-code',
								dataType: 'json',
								data: {
									'content': content,
									'mobile': this.mobileNumber,
									'source': '线上推广',
									'mode': 'SEM',
									'channel_type': 'SEM-百度端口',
									'channel_name': 'SAT',
									'activity_name': 'SAT',
									'join_type': 'SAT'
								},
								success: function(res) {
									console.log(res)
									if ($.trim(res.status) == 0) {
										alert($.trim(res.message))
									} else if ($.trim(res.status) == 1) {
										alert('信息发送成功')
										window.location.reload()
									}
								}
							});
						} else {
							alert("请填写正确的手机号码！");
						}
					}
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
