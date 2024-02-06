<template>
	<view class="popup">
		<view class="popup__header">
			<view @click="handleClose">取消</view>
			<view @click="handleSubmit">发布</view>
		</view>
		<view class="popup__content">
			<textarea class="popup__content__text" v-model="textareaVal" maxlength="200"
				placeholder="请输入评论内容"></textarea>
			<view class="popup__content__count">{{textareaVal.length}}/200</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "popup-comment",
		props: ['article_id', 'replyFormData'],
		data() {
			return {
				textareaVal: ''
			};
		},
		methods: {
			handleClose() {
				this.$emit('close')
			},
			handleSubmit() {
				const ask = /^\s+$/g
				if (!this.textareaVal || ask.test(this.textareaVal)) return uni.showToast({
					title: '内容不能为空',
					icon: 'none'
				})
				const formData = {
					article_id: this.article_id,
					content: this.textareaVal,
					...this.replyFormData
				}
				// 提交评论
				this.$emit('submit', formData)
				this.textareaVal = ''
				this.handleClose()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popup {
		width: 100%;
		background-color: #fff;

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 45px;
			padding: 0 15px;
			font-size: 14px;
			color: #333;
			border-bottom: 1px solid #f5f5f5;
		}

		&__content {
			padding: 15px;

			&__text {
				width: 100%;
				height: 250px;
				color: #333;
			}

			&__count {
				text-align: right;
				font-size: 12px;
				color: #666;
			}
		}
	}
</style>