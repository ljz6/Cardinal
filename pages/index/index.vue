<template>
	<div>
		<!-- <div class="header">头部</div> -->
		<div class="navbar">
			<view class="flex padding justify-center align-center">
				<text class="title">
					CARDINAL
				</text>
			</view>
			<view class="VerticalBox">
				<scroll-view class="VerticalNav nav ">
					<view class="cu-item" :class="index==tabCur?'text-purple cur':''"
						v-for="(item,index) in tabListdata" :key="index=item.websiteTypeId" @tap="TabSelect"
						:data-id="index=item.websiteTypeId">
						<view :class="item">{{item.websiteTypeName}}</view>
					</view>
				</scroll-view>
			</view>
			<view class="flex padding justify-center align-center">
				<image class="tu" :src="tuurl" @click="goTopython"></image>
			</view>
			<view class="flex padding justify-center align-center">
				<button class="round btn flex padding justify-center align-center" @click="goBackTologin">登出</button>
			</view>
		</div>
		<div class="main ">
			<view>
				<view v-if="tabContentId == websiteTypeId">
					<view class=" flex   grid  col-5 padding-sm  ">
						<view class="padding-sm" v-for="(item,index) in websiteListdata" :key="item.id">
							<view v-if="item.accessRequirement==0">
								<view class="radius  padding btn1" hover-class="bg-click1">
									<text class=" title1 "
										@click="goTogetWebsiteName(item.websiteUrl)">{{item.websiteName}}</text>
								</view>
							</view>
							<view v-if="item.accessRequirement==1">
								<view class="radius padding btn2" hover-class="bg-click2">
									<text class=" title2 "
										@click="goTogetWebsiteName(item.websiteUrl)">{{item.websiteName}}</text>
								</view>
							</view>
							<view v-if="item.accessRequirement==2">
								<view class="radius padding btn3" hover-class="bg-click3">
									<text class=" title3 "
										@click="goTogetWebsiteName(item.websiteUrl)">{{item.websiteName}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			</view>
		</div>
	</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				tabList: ["cuIcon-appreciate", "cuIcon-appreciate", "cuIcon-appreciate", "cuIcon-appreciate"],
				tabContentId: 0,
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				websiteUrl: '',
				tabListdata: [{
					sort: '',
					websiteTypeId: '',
					websiteTypeName: ''
				}],
				websiteListdata: [{

				}],
				websiteId: '',
				sort: '',
				// index:-1,
				websiteTypeId: '',
				websiteTypeName: '',
				tuurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
			};
		},
		// onLoad(options) {
		//   var data = options.websiteTypeId
		//   console.log(data)
		// },

		onReady() {
			// uni.hideLoading()
		},
		methods: {
			goBackTologin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},

			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
				//改变内容
				// console.log(e)
				this.tabContentId = e.currentTarget.dataset.id
				// console.log(this.tabContentId);
				// this.list()\
				this.websiteTypeId = this.tabContentId
				this.websitelist()
			},
			list() {
				let that = this
				uni.request({
					url: that.$baseUrl + "/navigation/list",
					// url:'http://112.74.58.254:8080/navigation/list',
					headers: {
						'Content-Type': 'text/plain'
					},
					method: 'GET',
					success: (res) => {
						console.log(res.data);
						that.tabListdata = res.data
					},
					fail: (err) => {
						console.error(err);
					},
				});
			},
			websitelist(id) {
				let that = this
				// that.websiteTypeId=id
				// console.log(id);
				uni.request({
					url: that.$baseUrl + "/navigation/" + that.websiteTypeId,
					// url: that.$baseUrl + "/navigation/" + 1,
					// url:'http://112.74.58.254:8080/navigation/list',
					headers: {
						'Content-Type': 'text/plain'
					},
					method: 'GET',
					success: (res) => {
						console.log(res.data);
						that.websiteListdata = res.data
					},
					fail: (err) => {
						console.error(err);
					},
				});
			},
			// getWebsiteName() {
			// 	let that = this
			// 	uni.request({
			// 		url: that.$baseUrl + "/navigation/getWebsiteName" +that.url ,
			// 		// url: that.$baseUrl + "/navigation/" + 1,
			// 		// url:'http://112.74.58.254:8080/navigation/list',
			// 		headers: {
			// 			'Content-Type': 'text/plain'
			// 		},

			// 		method: 'GET',
			// 		success: (res) => {
			// 			console.log(res.data);
			// 			that.websiteListdata = res.data
			// 		},
			// 		fail: (err) => {
			// 			console.error(err);
			// 		},
			// 	});
			// },
			goTogetWebsiteName(websiteUrl) {
				console.log(websiteUrl);
				// 跳转外部链接h5
				// #ifdef H5
				window.location.href = websiteUrl;
				// #endif
				// // #ifdef APP-PLUS
				// plus.runtime.openURL('websiteUrl') //不需要拼接
				// // plus.runtime.openURL(`http://${jumpUrl}`)//需要拼接
				// // #endif
			},
			goTopython() {
				let that = this
				uni.request({
					url: that.$baseUrl + "/user/execute-python",
					headers: {
						'Content-Type': 'text/plain;charset=UTF-8'
					},

					method: 'GET',
					success: (res) => {
						console.log(res);
						// that.websiteListdata = res.data
					},
					fail: (err) => {
						console.error(err);
					},
				});
			}
		},
		//生命周期
		created() {
			this.list()
			// this.websiteTypeId = this.tabContentId
			// this.websitelist()

		},
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

	.title {
		font-family: ysbth;
		color: #FFFFFF;
		font-size: 18px;
		line-height: 2em;
		font-weight: bold;
	}

	.VerticalNav.nav {
		// width: 200upx;
		white-space: initial;

	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: right;
		background-color: #171717;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
		color: #B3B3B3;
		font-family: Noto Serif SC;
	}

	.VerticalNav.nav .cu-item:hover {
		background-color: #333333;
		height: 36px;
		width: 90%;
		border-radius: 8px;
		margin-left: 8px;
		color: #FFFFFF;
		font-family: Noto Serif SC;
	}

	// .VerticalNav.nav .cu-item.cur {
	// 	background-color: #333333;
	// 	height: 36px;
	// 	width: 90%;
	// 	border-radius: 8px;
	// 	margin-left: 8px;
	// 	color: #FFFFFF;
	// 	font-family: Noto Serif SC;
	// }

	// .VerticalNav.nav .cu-item.cur::after {
	// 	content: "";
	// 	width: 8upx;
	// 	height: 30upx;
	// 	border-radius: 10upx 0 0 10upx;
	// 	position: absolute;
	// 	// background-color: currentColor;
	// 	background-color: #6000ac;
	// 	top: 0;
	// 	right: 0upx;
	// 	bottom: 0;
	// 	margin: auto;
	// }

	.VerticalBox {
		display: flex;

	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}

	.header {
		position: absolute;
		line-height: 50px;
		top: 0px;
		left: 0px;
		right: 0px;
		background-color: #2d3a4b;
	}

	.navbar {
		// position: absolute;
		width: 150px;
		top: 50px;
		/* 距离上面50像素 */
		left: 0px;
		bottom: 0px;
		overflow-y: auto;
		/* 当内容过多时y轴出现滚动条 */
		// background-color: #545c64;
		background-color: #171717;


		//设置滚动条
		overflow-x: scroll;
		white-space: nowrap;

		//隐藏滚动条
		::-webkit-scrollbar {
			width: 0 !important;
		}

		::-webkit-scrollbar {
			width: 0 !important;
			height: 0;
		}
	}

	.main {
		position: absolute;
		top: 50px;
		left: 170px;
		bottom: 0px;
		right: 20px;
		/* 距离右边0像素 */
		padding: 10px;

		// overflow-y: auto;
		// line-height: 16px;
		/* 当内容过多时y轴出现滚动条 */
		/* background-color: red; */
	}

	.tu {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		margin-top: 120px;
		border: 2px solid #ffffff;
	}

	.btn {
		height: 26px;
		width: 90px;
		background-color: #262626;
		color: #B3B3B3;
		font-family: 黑体;
		font-size: 12px;
		margin-top: -6px;
	}

	.btn1 {
		background-color: #000000;
		border: 1px solid #ffffff;
		border-radius: 10px;
	}

	.btn1:hover {
		background-color: #FFFFFF;
	}

	.bg-click1 {
		background-color: #E2E2E2 !important;
	}

	.btn2 {
		background-color: #57BD6A;
		// border: 1px solid #ffffff;
		border-radius: 10px;
	}

	.btn2:hover {
		background-color: #63DA7D;
	}

	.bg-click2 {
		background-color: #4EAA62 !important;
	}

	.btn3 {
		background-color: #0084FF;
		// border: 1px solid #ffffff;
		border-radius: 10px;
	}

	.btn3:hover {
		background-color: #349EFF;
	}

	.bg-click3 {
		background-color: #0070D7 !important;
	}

	.title1 {
		color: #FFFFFF;
		font-family: 黑体;
		font-size: 14px;
		// line-height: 1.5rem;
		/* 文本过长显示省略号，一般高度固定且不是auto */
		/** 对象作为伸缩盒子模型显示 **/
		display: -webkit-box;
		overflow: hidden;
		/* break-all(允许在单词内换行。) */
		// word-break: break-all;
		/* 超出部分省略号 */
		text-overflow: ellipsis;
		word-wrap: break-word;
		// white-space: pre-wrap;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-box-orient: vertical;
		/** 显示的行数 **/
		-webkit-line-clamp: 1;
	}

	.title1:hover {
		color: #050505;
	}

	.title2 {
		color: #FFFFFF;
		font-family: 黑体;
		font-size: 14px;
		// line-height: 1.5rem;
		/* 文本过长显示省略号，一般高度固定且不是auto */
		/** 对象作为伸缩盒子模型显示 **/
		display: -webkit-box;
		overflow: hidden;
		/* break-all(允许在单词内换行。) */
		// word-break: break-all;
		/* 超出部分省略号 */
		text-overflow: ellipsis;
		word-wrap: break-word;
		// white-space: pre-wrap;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-box-orient: vertical;
		/** 显示的行数 **/
		-webkit-line-clamp: 1;
	}

	.title3 {
		color: #FFFFFF;
		font-family: 黑体;
		font-size: 14px;
		// line-height: 1.5rem;
		/* 文本过长显示省略号，一般高度固定且不是auto */
		/** 对象作为伸缩盒子模型显示 **/
		display: -webkit-box;
		overflow: hidden;
		/* break-all(允许在单词内换行。) */
		// word-break: break-all;
		/* 超出部分省略号 */
		text-overflow: ellipsis;
		word-wrap: break-word;
		// white-space: pre-wrap;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-box-orient: vertical;
		/** 显示的行数 **/
		-webkit-line-clamp: 1;
	}
</style>
