<template>
	<view class="feedback">
		<view class="feedback__text">
			<view class="feedback__text__title">意见反馈：</view>
			<view class="feedback__text__content">
				<textarea v-model="feedbackVal" placeholder="请输入您要反馈的问题"></textarea>
			</view>
		</view>
		<view class="feedback__imgs">
			<view class="feedback__imgs__title">反馈图片：</view>
			<view class="feedback__imgs__content">
				<view class="feedback__imgs__item" v-for="(item,index) in imgList" :key="index">
					<view class="feedback__imgs__close iconfont" @click="handleDelImg(index)">&#xe785;</view>
					<view class="feedback__imgs__item-box">
						<image :src="item.url" mode="aspectFill"></image>
					</view>
				</view>
				<view class="feedback__imgs__item" v-if="imgList.length < 5">
					<view class="feedback__imgs__item-box" @click="handleAddImg()">
						<view class="feedback__imgs__add iconfont">&#xeaf3;</view>
					</view>
				</view>
			</view>
		</view>
		<view class="feedback__submit">
			<view class="feedback__submit__btn" @click="handleSubmit">提交反馈</view> 
		</view>
	</view>
</template>

<script>
import { set_feedback } from '../../common/api'
	export default {
		data() {
			return {
				feedbackVal: '',
				imgList: []
			}
		},
		methods: {
			handleAddImg() {
				const count = 5 - this.imgList.length
				uni.chooseImage({
					count,
					success: (res) => {
						const { tempFilePaths } = res
						tempFilePaths.forEach((item,index) => {
							if(index < count) {
								this.imgList.push({
									url: item
								})
							}
						})
					}
				})
			},
			handleDelImg(index) {
				this.imgList.splice(index,1)
			},
			async handleSubmit() {
				const ask = /^\s+$/g
				if (!this.feedbackVal || ask.test(this.feedbackVal)) return uni.showToast({
					title: '请填写反馈内容',
					icon: 'none'
				})
				uni.showLoading()
				let imgPath = []
				for(let i = 0; i < this.imgList.length; i++) {
					const cloudPath = `${new Date().getTime()}${i}.jpg`
					let filePath = this.imgList[i].url
					filePath = await this.uploadFiles(filePath,cloudPath)
					imgPath.push(filePath)
				}
				set_feedback({feedbackVal: this.feedbackVal,imgPath})
				uni.hideLoading()
				uni.showToast({
					icon: 'none',
					title: '提交成功',
					mask: true
				})
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/tabbar/my/my'
					})
				}, 2000)
			},
			async uploadFiles(filePath,cloudPath) {
				const result = await uniCloud.uploadFile({
					filePath,
					cloudPath
				})
				return result
			}
		}
	}
</script>

<style lang="scss" scoped>
	.feedback {
		background-color: #fff;
		height: 100vh;
		&__text {
			&__title {
				font-size: 16px;
				padding: 10px 15px;
			}

			&__content {
				font-size: 14px;
				padding: 5px;
				margin: 0 15px;
				border: 1px solid #f5f5f5;
				textarea{
					width: 100%;
				}
			}
		}

		&__imgs {
			padding: 0 10px;

			&__title {
				font-size: 16px;
				padding: 10px 5px;
			}

			&__content {
				display: flex;
				flex-wrap: wrap;
			}

			&__item {
				position: relative;
				width: 33.33%;
				height: 0;
				padding-top: 33.33%;

				&-box {
					display: flex;
					align-items: center;
					justify-content: center;
					position: absolute;
					top: 5px;
					bottom: 5px;
					left: 5px;
					right: 5px;
					border: 1px solid #f5f5f5;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			&__add {
				color: #f5f5f5;
				font-size: 50px;
			}

			&__close {
				position: absolute;
				top: 0;
				right: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 20px;
				height: 20px;
				color: #fff;
				background-color: #fc0107;
				border-radius: 50%;
				z-index: 2;
			}
		}

		&__submit {
			height: 45px;
			margin: 15px 15px;
			&__btn{
				font-size: 16px;
				color: #fff;
				text-align: center;
				line-height: 45px;
				background-color: #36AB60;
				border-radius: 5px;
			}
		}
	}
</style>