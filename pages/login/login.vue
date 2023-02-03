<template>
	<view>
		<view class="main flex  padding justify-center">
			<view class="contact ">
				<view class="flex  padding justify-center">
					<image class="tu" :src="tuurl"></image>
				</view>
				<view class="title flex padding justify-center"><text>AtnibamAitay</text></view>
				<view class="title1 flex padding justify-center"><input type="text" placeholder="请输入邮箱号进行登录" v-model="email"></input>
				</view>
				<!-- <button @tap="getCode" >获取验证码</button>
				<view class="title1 flex padding justify-center">
				<input type="text" placeholder="请输入验证码" v-model="code"></input>
				</view> -->
				<view class=" flex padding justify-center "><button class="round title2" @click="goToindex"><text class="title3">CARDINAL</text>
				<text class="title4">，启动！</text>
				</button></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: "",
				verifyCode:'',
				code:'',
				// email: '',
				tuurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			}
		},
		// computed: {
		// 	CheckEmail(e) {	
		// 		let email_reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		// 		if (email_reg.test(e.email)) {
		// 			this.email = e.email
		// 			return true
		
		// 		} else {
		// 			return false
		// 		}
		// 		return false
		// 	}
		// },
		methods:{
			goToindex(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
			// 获取验证码
			// getCode() {
			// 	let that = this
			// 	if (!this.CheckEmail) {
			// 		// uni.showModal({
			// 		// 	top: 100,
			// 		// 	type: 'warning ',
			// 		// 	message: '邮箱格式有误',
			// 		// 	duration: 2000,
			// 		// 	fontSize: 20,
			// 		// 	safeAreaInsetTop: true
											
			// 		// })
						
			// 	}else{
			// 		// 检查无误后开始请求验证码
			// 			uni.request({
			// 				url: that.$baseUrl+"/user/verifyCode" +that.email,
			// 				method:'POST',
			// 							// data: {
			// 							// 	'email':that.email,
			// 							// 	'verifyCode':that.verifyCode ,
			// 							// },
			// 				header: {
			// 					'Content-Type':'application/json'
			// 				},
			// 				success(res) {
			// 					console.log(res)
								
			// 				}
			// 			})
					
			// 			uni.showLoading({
			// 				title: '正在获取验证码'
			// 			})
			// 	}
			
			// },
			// goToindex() {
			// 	let that = this
			// 	uni.request({
			// 		url: that.$baseUrl + "/user/loginByEmail" +that.email,
			// 		method:'POST',
			// 		// data: {
			// 		// 	email: that.email	,
			// 		// 	// verifyCode :that.verifyCode 
			// 		// 	// email: "826697618@qq.com",
			// 		// 	// code:"655810"
			// 		// },
			// 		header:{
			// 			'Content-Type':'application/json'
			// 		},
			// 		success(res) {
			// 			console.log(res)
			// 			// 登录验证是否成功
			// 			if (res.data.status != '200') {
			// 				uni.showToast({
			// 					title: res.data.msg,
			// 					icon: 'fail'
			// 				});
			// 			} else {
			// 				uni.showToast({
			// 					title: res.data.msg,
			// 					icon: 'success'
			// 				});
			// 			}
			
			
			// 		},
			// 		fail(err) {
			// 			console.log(err)
			// 		}
			// 	})
			// },
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../colorui/main.css");
	@import url("../../colorui/icon.css");

	@font-face {
		font-family: ysbth;
		src: url('../../font/ysbth.ttf');
	}

	@font-face {
		font-family: Noto Serif SC;
		src: url('../../font/NotoSerifSC-Black.otf');
	}

	page {
		background-color: #000000;
	}

	.main {
		height: auto;
		display: flex;
		flex-wrap: wrap;

	}

	.contact {
		background-color: #171717;
		width: 26%;
		// height: 164px;
		justify-content: center;
		border-radius: 10px;
		text-align: left;
		margin: 50px 10px 50px 10px;
		margin-left: 20px;
	}

	.tu {
		border-radius: 50%;
		height: 60px;
		width: 60px;
		margin-top: 60px;
	}

	.title {
		margin-top: -10px;
		color: #FFFFFF;
		font-family: Arial;
		font-size: 16px;
	}

	.title1 {
		margin-top: -16px;
		color: #FFFFFF;
		font-family: 华文细黑;
		font-size: 12px;
	}
	.title2 {
		margin-top: -16px;
		color: #FFFFFF;
		font-size: 14px;
		width: 90%;
		margin-bottom:90px ;
		background-color: #1E56C8;
	}
	.title3 {
		font-family: ysbth;
	}
	.title4 {
		font-family: 黑体;
	}
</style>
