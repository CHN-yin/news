<template>
	<view class="comment">
		<view class="comment-box">
			<view class="comment-box__title">全部评论</view>
			<view class="comment-box__item" v-for="item in commentList" :key="item._id">
				<detail-comment :is_reply="false" :comment="item" @reply="reply"></detail-comment>
			</view>
			<view v-if="commentList.length <= 0 || commentList.length >= 10">
				<uni-load-more :status="status" iconType="auto"
					:contentText="{contentnomore: '暂无更多评论'}"></uni-load-more>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" :maskClick="false">
			<popup-comment :article_id="detail_id" :replyFormData="replyFormData" @submit="submit"
				@close="handleClose" />
		</uni-popup>
	</view>
</template>

<script>
	import {
		get_comment,
		set_comment
	} from '../../common/api';
	export default {
		data() {
			return {
				detail_id: '',
				commentList: [],
				status: 'loading',
				replyFormData: {},
				page: 1,
				pageSize: 10
			};
		},
		onLoad(query) {
			this.detail_id = query.detail_id
			this.getComment()
		},
		onReachBottom() {
			if (this.status === 'noMore') return
			this.page++
			this.getComment()
		},
		methods: {
			reply(e) {
				this.replyFormData = {
					comment_id: e.comment._id,
					is_reply: e.is_reply
				}
				if (e.is_reply) {
					this.replyFormData.reply_id = e.reply_id
				}
				this.handleOpen()
			},
			submit(formData) {
				this.setComment(formData)
			},
			handleOpen() {
				this.$refs.popup.open()
			},
			handleClose() {
				this.$refs.popup.close()
			},
			getComment() {
				get_comment({
					detail_id: this.detail_id,
					page: this.page,
					pageSize: this.pageSize
				}).then(res => {
					if (res.data.length === 0) return this.status = 'noMore'
					if (this.page === 1) this.commentList = []
					let data = JSON.parse(JSON.stringify(this.commentList))
					data.push(...res.data)
					this.commentList = data
				})
			},
			setComment(formData) {
				uni.showLoading()
				set_comment(formData).then(res => {
					uni.hideLoading()
					uni.$emit('comment_count')
					this.page = 1
					this.status = 'loading'
					this.replyFormData = {}
					uni.showToast({
						title: '评论成功'
					})
					this.getComment()
				})
			}
		}
	}
</script>

<style lang="scss">
	.comment-box {
		background-color: #fff;
		color: #333;
		font-size: 14px;
		padding-top: 10px;

		&__title {
			position: relative;
			padding: 0 15px;
			margin-bottom: 20px;
			font-weight: bold;

			&::after {
				content: "";
				position: absolute;
				top: 2px;
				bottom: 1px;
				left: 5px;
				width: 4px;
				background-color: #36AB60;
			}
		}
	}
</style>