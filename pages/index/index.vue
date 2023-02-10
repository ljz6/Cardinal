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
						<view :class="item">{{item.typeName}}</view>
					</view>
				</scroll-view>
			</view>
			<view class="flex padding justify-center align-center">
				<image class="tu" :src="tuurl"></image>
			</view>
			<view class="flex padding justify-center align-center">
				<view class="round btn flex padding justify-center align-center">AtnibamAitay</view>
			</view>
		</div>
		<div class="main ">
			<view class="button0 flex  padding justify-end" @tap="showModal" data-target="DrawerModalR">
				<view class="button flex  padding justify-end align-center">
					<!-- <text class="button1 cuIcon-back"></text> -->
					<image :src="url0" style="height: 30px; width: 30px;"></image>
				</view>
			</view>
			<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''">
				<view class="button2 flex  justify-center align-center justify-between padding" @tap.stop="">
					<image :src="url00" style="width: 30px; height: 30px;" @tap="hideModal"></image>
					<image :src="url1" style="height: 30px; width: 30px;" @tap="showModal1" data-target="Modal1"></image>
					<image :src="url2" style="height: 30px; width: 30px;" v-if="!isEdit" @tap="editContent"></image>
					<image :src="url3" style="height: 30px; width: 30px;"></image>
					<image :src="url4" style="height: 30px; width: 30px;" @click="goTopython" v-model="fileName">
					</image>
					<image :src="url5" style="height: 30px; width: 30px;" @click="goBackTologin"></image>
				</view>
			</view>
			<view class="cu-modal" :class="modalName1=='Modal1'?'show':''">
				<view class="cu-dialog " style="left: 336px;top: 10px; ">
					<view class="content flex padding justify-start">
						<text class="web">网站</text>
						<text class="msg">信息</text>
					</view>
					<view class="pick padding flex align-center justify-between" v-model="FormData.websiteTypeId=1">
						<picker @change="bindPickerChange" :value="index1" :range="array" >
							<view class="uni-input">{{array[index1]}}</view>
						</picker>
						<text class="cuIcon-unfold"></text>
					</view>
					<view class="web1  padding flex align-center " v-model="FormData.url=url">
						<input type="text" placeholder="网址" v-model="url" style="width: 100%;text-align: left;"></input>
					</view>
					<view class="web1  padding flex align-center ">
						<input type="text" placeholder="网站名" v-model="FormData.websiteName=websiteNamedata"
							style="width: 100%;text-align: left;"></input>
						<image :src="url6" style="height: 22px; width: 26px;" @click="getWebsiteName(url)"></image>
					</view>
					<view class="content flex padding justify-start">
						<text class="web">访问</text>
						<text class="msg">要求</text>
					</view>
					<view class=" flex justify-between justify-center align-center " v-model="FormData.accessRequirement=number">
						<button class="button3" 
							 @click="change(0)" :class="{ newStyle: 0 === number }" plain>正常</button>
						<button class="button31"
							style="color: #FFFFFF;background-color: #171717;border: 1px solid #FFFFFF;"
							 @click="change(1)" :class="{ newStyle: 1 === number }" plain>校园网</button>
						<button class="button32"
							style="color: #FFFFFF;background-color: #171717;border: 1px solid #FFFFFF"
							 @click="change(2)" :class="{ newStyle: 2 === number }" plain>魔法上网</button>
					</view>
					<view class=" flex justify-center align-center padding">
						<view class="button4 flex justify-center align-center padding"
							style="border-radius: 16px 0px 0px 16px;border-right: 1px solid #3C3C3C;" @click="save()">确定</view>
						<view class="button4 flex justify-center align-center padding"
							style="border-radius: 0px 16px 16px 0px;" @tap="hideModal1">取消</view>
					</view>
				</view>
			</view>
			</view>
			<view>
				<view v-if="tabContentId == websiteTypeId">
					<checkbox-group @change="CheckboxChange1">
					<view class=" flex  grid  col-5   ">
						<view class="padding-xs" v-for="(item,index) in websiteListdata" :key="item.id">
							<view v-if="item.accessRequirement==0">
								<view class="radius  padding btn1" hover-class="bg-click1">
									<text class=" title1 "
										@click="goTogetWebsiteName(item.url)">{{item.websiteName}}</text>
								</view>
							</view>
							<view v-if="item.accessRequirement==1">
								<view class="radius padding btn2" hover-class="bg-click2">
									<text class=" title2 "
										@click="goTogetWebsiteName(item.url)">{{item.websiteName}}</text>
								</view>
							</view>
							<view v-if="item.accessRequirement==2">
								<view class="radius padding btn3" hover-class="bg-click3">
									<text class=" title3 "
										@click="goTogetWebsiteName(item.url)">{{item.websiteName}}</text>
								</view>
							</view>
						</view>
					</view>
					</checkbox-group>
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
				number:'',
				index: -1,
				website: '',
				websiteName: '',
				websiteNamedata: '',
				checked: true,
				fileName: '',
				isEdit: false, //是否处于编辑状态
				FormData: {
					accessRequirement: '',
					url:'',
					websiteName: '',
					websiteTypeId: '',	
				},
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				url0: '/static//nav/last.png',
				url00: '/static//nav/next.png',
				url1: '/static//nav/add.png',
				url2: '/static//nav/edit.png',
				url3: '/static//nav/white.png',
				url4: '/static//nav/thumb.png',
				url5: '/static//nav/out.png',
				url6: '/static//nav/refresh.png',
				modalName: null,
				url: '',
				modalName1: null,
				tabList: ["cuIcon-appreciate", "cuIcon-appreciate", "cuIcon-appreciate", "cuIcon-appreciate"],
				tabContentId: 1,
				tabCur: 1,
				mainCur: 1,
				verticalNavTop: 0,
				load: true,
				tabListdata: [{
					sort: '',
					websiteTypeId: 1,
					websiteTypeName: ''
				}],
				websiteListdata: [{

				}],
				websiteId: '',
				array: ['中国', '美国', '巴西', '日本'],
				 title: 'picker',
				index1: 0,
				// sort: 1,
				// index:-1,
				websiteTypeId: 1,
				currentIndex: 1,
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
			editContent() {
				this.isEdit = !this.isEdit;
				// uni.navigateTo({
				// 	url:"/pages/service/sidebar/content/manage"
				// })
			},
			CheckboxChange1(e) {
				var items = this.videocollectionList 
				var values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					var flag = false;
					const item = items[i]
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (parseInt(values[j]) === item.id) {
							flag = true;
							break;
						}
					}
					if (flag) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			bindPickerChange: function(e) {
				console.log(e);
				this.index1 = e.detail.value
				console.log('picker发送选择改变，携带值为', e.detail.value)
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			showModal1(e) {
				this.modalName1 = e.currentTarget.dataset.target
			},
			hideModal1(e) {
				this.modalName1 = null
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			 change(index) {
			         console.log(index,'--index')
			        this.number = index
					
				
			    },
			// goBackTologin(){
			// 	uni.navigateTo({
			// 		url:'/pages/login/login'
			// 	})
			// },
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				// this.tabContentId=this.mainCur
				// console.log(this.mainCur);
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
					url: that.$baseUrl + "/Navigation/getWebsiteTypeList",
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
					url: that.$baseUrl + "/Navigation/" + that.websiteTypeId,
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
			getWebsiteName(url) {
				let that = this
				uni.request({
					url: that.$baseUrl + "/Navigation/getWebsiteName?url= " + that.url,
					// url: that.$baseUrl + "/navigation/" + 1,
					// url:'http://112.74.58.254:8080/navigation/list',
					headers: {
						'Content-Type': 'text/plain'
					},
					data: {
						url: that.url,
						// verifyCode :that.verifyCode 
						// email: "826697618@qq.com",
						// code:"655810"
					},
					method: 'GET',
					success: (res) => {
						console.log(res.data.data);
						that.websiteNamedata = res.data.data
					},
					fail: (err) => {
						console.error(err);
					},
				});
			},
			// 保存网站
			save() {
				let that = this
				uni.request({
					url: that.$baseUrl + "/Navigation/website/save " ,
					// url: that.$baseUrl + "/navigation/" + 1,
					// url:'http://112.74.58.254:8080/navigation/list',
					headers: {
						'Content-Type': 'text/plain'
					},
					method: 'POST',
					data: {
						accessRequirement: that.FormData.accessRequirement,
						url: that.FormData.url,
						websiteName: that.FormData.websiteName,
						websiteTypeId: that.FormData.websiteTypeId,
					},
					success(res) {
						console.log(res)
					
						// 验证是否成功
						if (res.data.status != '200') {
							uni.showToast({
								title: res.data.msg,
								icon: 'fail'
							});
						} else {
							uni.showToast({	
								title: res.data.msg,
								icon: 'success'
							});
						}
					},
					fail: (err) => {
						console.error(err);
					
					},
				});
			},
			goTogetWebsiteName(url) {
				console.log(url);
				// 跳转外部链接h5
				// #ifdef H5
				// window.location.href = url;
				window.open(url)
				// plus.runtime.openWeb(url);
				// location.assign(url)
				// #endif
				// // #ifdef APP-PLUS
				// plus.runtime.openURL('websiteUrl') //不需要拼接
				// // plus.runtime.openURL(`http://${jumpUrl}`)//需要拼接
				// // #endif
			},
			goTopython() {
				let that = this
				uni.request({
					url: that.$baseUrl + "/tool/runPython",
					headers: {
						'Content-Type': 'text/plain;charset=UTF-8'
					},
					data: {
						fileName: that.fileName
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
			},
			goBackTologin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		},
		//生命周期
		created() {
			this.list()
			// this.websiteTypeId = this.tabContentId
			this.websitelist()
			this.goTopython()
			// this.save()
			// this.getWebsiteName(url)
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
		// font-family: Noto Serif SC;
		// font-family:NotoSerifSC-Bold;
		// font-family:NotoSerifSC-Regular;
		font-family: NotoSerifSC-Regular;
		src: url('../../font/NotoSerifSC-Regular.otf');
		// src: url('../../font/NotoSerifSC-Bold.otf');
	}

	@font-face {
		font-family: NotoSerifSC-Bold;
		src: url('../../font/NotoSerifSC-Bold.otf');
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
		margin: 2px 0px 0px 0px;
		// margin-top: 2px;
		border: none;
		height: 50px;
		position: relative;
		color: #B3B3B3;
		font-family: NotoSerifSC-Regular;
		font-size: 16px;
	}

	.VerticalNav.nav .cu-item:hover {
		background-color: #333333;
		height: 36px;
		line-height: 2rem;
		width: 90%;
		border-radius: 8px;
		margin-left: 8px;
		color: #FFFFFF;
		font-family: NotoSerifSC-Bold;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #333333;
		height: 36px;
		width: 90%;
		border-radius: 8px;
		line-height: 2rem;
		margin-left: 8px;
		color: #FFFFFF;
		font-family: NotoSerifSC-Bold;
	}

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
		// overflow-y: auto;
		/* 当内容过多时y轴出现滚动条 */
		// background-color: #545c64;
		background-color: #171717;


		//设置滚动条
		// overflow-x: scroll;
		// white-space: nowrap;

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
		top: 28px;
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
		width: 48px;
		height: 48px;
		border-radius: 50%;
		margin-top: 100px;
		border: 2px solid #ffffff;
	}

	.btn {
		color: #B3B3B3;
		font-family: NotoSerifSC-Regular;
		font-size: 14px;
		margin-top: -26px;
	}

	//功能收缩
	.button0 {
		margin-right: -40px;
		margin-bottom: -10px;
	}

	// .button0 :active {
	// 	opacity: 1;
	// 	visibility: 1;
	// 	width: 300px;
	// 	 transition: width 0.4s ease-out;
	// 	// transition:margin-right 2s;
	// }
	.cu-dialog {
		background-color: #171717;
		width: 26%;
		height: 64%;
		border-radius: 12px;

		// height: 460px;
		// margin-right: 100px;
		// width: 300px;
		// height: 46px;
		// background-color: #171717;
		// border-radius: 30px 0px 0px 30px;
		// transition: all linear 1s;
		// position: absolute;
	}

	.button2 {
		width: 300px;
		height: 46px;

		background-color: #171717;
		border-radius: 30px 0px 0px 30px;
		transition: all linear 2s;
		position: absolute;
		margin-top: 52px;
		transform: translateX(-5px);
	}

	.img {
		// height: 100px;
		// width: 100px;

	}

	// .button0:active+.button2{
	// 	transform: translateX(-100px);
	// 	// transition:margin-right 2s;
	// }
	.button {
		width: 50px;
		height: 46px;
		background-color: #171717;
		border-radius: 30px 0px 0px 30px;

	}



	.btn1 {
		background-color: #000000;
		border: 1px solid #ffffff;
		border-radius: 10px;
	}

	.btn1:hover {
		background-color: #FFFFFF;
		color: #050505;
	}

	.bg-click1 {
		background-color: #E2E2E2 !important;
		// color: #050505 !important;
	}
	
	.btn2 {
		background-color: #57BD6A;
		// border: 1px solid #ffffff;
		border-radius: 10px;
	}

	.btn2:hover {
		background-color: #63DA7D;
		color: #FFFFFF;
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
		color: #FFFFFF;
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

	.content {
		color: #FFFFFF;
		font-family: 黑体;
		margin-top: -2px;
	}

	.web {
		border-bottom: 3px solid #FFFFFF;
		line-height: 1.5rem;
	}

	.msg {
		line-height: 1.5rem;
	}

	.cu-form-group .title0 {
		min-width: calc(4em + 15px);
	}

	.web1 {
		height: 34px;
		width: 93%;
		border: 1px solid #797979;
		border-radius: 10px;
		margin-left: 10px;
		// margin-right: 10px;
		margin-top: 10px;
	}

	.button3 {
		font-family: 黑体;
		font-size: 13px;
		width: 82px;
		height: 32px;
		color: #333333;
		background-color: #FFFFFF;
	}
	

	.button3:hover {
		background-color: #E2E2E2 !important;
	}

	.button31 {
		font-family: 黑体;
		font-size: 13px;
		width: 82px;
		height: 32px;
	}

	.button31:hover {
		background-color: #63DA7D !important;
		color: #FFFFFF !important;
	}

	.button32 {
		font-family: 黑体;
		font-size: 13px;
		width: 82px;
		height: 32px;
	}

	.button32:hover {
		background-color: #349EFF !important;
		color: #FFFFFF !important;
	}

	.button4 {
		font-family: 黑体;
		font-size: 13px;
		width: 50%;
		height: 32px;
		color: #FFFFFF;

		background-color: #262626;
	}

	.button4:hover {
		background-color: #171717 !important;

	}

	.uni-input {
		// height: 10px;
		font-size: 16px;
		color: #FFFFFF;
		font-family: 黑体;

	}

	.pick {
		height: 34px;
		width: 93%;
		border: 1px solid #797979;
		border-radius: 10px;
		margin-left: 10px;
		// margin-right: 10px;
		margin-top: 10px;

	}
 
	
</style>
