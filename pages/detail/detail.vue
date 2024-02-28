<template>
	<view class="detail">
		<view class="skin" v-if="loading"></view>
		<h2 class="detail__title">{{detailData.title}}</h2>
		<view class="detail__author">
			<view class="detail__author__head">
				<image :src="author.avatar" mode="aspectFit"></image>
			</view>
			<view class="detail__author__info">
				<view class="detail__author__name">{{author.author_name}}</view>
				<view class="detail__author__tab">
					<view class="detail__author__tab__item">{{detailData.create_time}}</view>
					<view class="detail__author__tab__item">{{detailData.browse_count}} 浏览</view>
					<view class="detail__author__tab__item">{{detailData.thumbs_up_count}} 赞</view>
				</view>
			</view>
			<view class="detail__author__btn iconfont" @click="handleBtn(detailData._id)">
				{{ detailData.is_author_like ? '已关注' : '&#xeaf3;关注'}}
			</view>
		</view>

		<view class="detail__content">
			<view class="detail__content__text">
				<uParse :content="detailData.content" noData=""></uParse>
			</view>
		</view>

		<view class="detail__line"></view>

		<view class="comment-box">
			<view class="comment-box__title">精彩评论</view>
			<view class="comment-box__item" v-for="item in commentList" :key="item._id">
				<detail-comment :is_reply="false" :comment="item" @reply="reply"></detail-comment>
			</view>
		</view>
		<view v-if="commentList.length <= 0 || commentList.length > 5">
			<uni-load-more :status="status" iconType="auto" :contentText="{contentnomore: '暂无更多评论'}"></uni-load-more>
		</view>

		<view class="detail__tabbar">
			<view class="detail__tabbar__left" @click="handleOpen">
				<text class="detail__tabbar__left__input">谈谈你的看法</text>
				<text class="iconfont detail__tabbar__left__icon">&#xec88;</text>
			</view>
			<view class="detail__tabbar__right">
				<uni-badge :text="detailData.comments_count" absolute="rightTop" size="small" :customStyle="{
					'background': '#f07373',
					'min-width': '15px',
					'height': '15px',
					'line-height': '15px',
					'font-size': '10px',
					'right': '10px',
					'top': '-3px',
					'transform-origin': 'right'
					}">
					<view class="iconfont detail__tabbar__right__icon" @click="handleComment">&#xe687;</view>
				</uni-badge>
				<view class="iconfont detail__tabbar__right__icon" @click="handleCollect(detailData._id)"
					v-html="detailData.is_article_like ? '&#xe684;' : '&#xe643;'"></view>
				<view class="iconfont detail__tabbar__right__icon" @click="handleThumbs(detailData._id)"
					v-html="detailData.is_thumbs_up_article ? '&#xec8c;' : '&#xec7f;'">&#xec7f;</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" :maskClick="false">
			<popup-comment :article_id="detailData._id" :replyFormData="replyFormData" @submit="submit"
				@close="handleClose" />
		</uni-popup>

	</view>
</template>

<script>
	import {
		get_detail,
		set_comment,
		get_comment,
		set_author,
		list_like,
		set_thumbs
	} from '../../common/api'
	import uParse from '../../components/gaoyia-parse/parse.vue'
	export default {
		components: {
			uParse
		},
		data() {
			return {
				detailData: {},
				author: {},
				detail_id: '',
				commentList: [],
				replyFormData: {},
				loading: true,
				status: 'loading',
				page: 1,
				pageSize: 5
			}
		},
		onLoad(query) {
			this.detail_id = query.detail_id
			this.getDetail()
			this.getComment()
			uni.$on('comment_count', () => {
				this.detailData.comments_count += 1
			})
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
			handleComment() {
				uni.navigateTo({
					url: '/pages/comment/comment?detail_id=' + this.detail_id
				})
			},
			handleOpen() {
				this.$refs.popup.open()
			},
			handleClose() {
				this.$refs.popup.close()
			},
			handleBtn(article_id) {
				this.setAuthor({
					article_id
				})
			},
			handleCollect(article_id) {
				this.listLike({
					article_id
				})
			},
			handleThumbs(article_id) {
				this.setThumbs({
					article_id
				})
			},
			getDetail() {
				this.loading = true
				uni.showLoading()
				get_detail({
					detail_id: this.detail_id
				}).then(res => {
					this.detailData = res.data
					this.author = res.data.author
					uni.hideLoading()
					this.loading = false
				})
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
			setAuthor(article_id) {
				uni.showLoading()
				set_author(article_id).then(res => {
					this.detailData.is_author_like = !this.detailData.is_author_like
					uni.$emit('updateAuthor')
					uni.hideLoading()
					uni.showToast({
						title: this.detailData.is_author_like ? '关注成功' : '取消关注',
						icon: 'none'
					})
				})
			},
			listLike(article_id) {
				uni.showLoading()
				list_like(article_id).then(res => {
					this.detailData.is_article_like = !this.detailData.is_article_like
					uni.$emit('updateLike', 'detail')
					uni.hideLoading()
					uni.showToast({
						title: this.detailData.is_article_like ? '收藏成功' : '取消收藏',
						icon: 'none'
					})
				})
			},
			setThumbs(article_id) {
				uni.showLoading()
				set_thumbs(article_id).then(res => {
					this.detailData.is_thumbs_up_article = !this.detailData.is_thumbs_up_article
					this.detailData.is_thumbs_up_article ? this.detailData.thumbs_up_count += 1 : this.detailData
						.thumbs_up_count -= 1
					uni.hideLoading()
					uni.showToast({
						title: this.detailData.is_thumbs_up_article ? '点赞成功' : '取消点赞',
						icon: 'none'
					})
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
	.skin {
		z-index: 999;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
	}

	.detail {
		background-color: #fff;
		padding: 15px 0 54px;

		&__title {
			padding: 0 15px;
		}

		&__author {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 15px;
			margin: 10px 0;

			&__head {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			&__info {
				flex: 1;
				padding: 0 10px;
			}

			&__name {
				font-size: 12px;
				color: #333;
				margin-bottom: 4px;
			}

			&__tab {
				display: flex;
				align-items: center;
				font-size: 10px;
				color: #666;

				&__item {
					margin-right: 10px;
				}
			}

			&__btn {
				width: 60px;
				line-height: 27px;
				text-align: center;
				font-size: 14px;
				color: #fff;
				background-color: #ff5e5e;
				border-radius: 5px;
			}
		}

		&__content {
			min-height: 450px;
			margin-top: 10px;

			&__text {
				padding: 0 15px;
			}
		}

		&__tabbar {
			display: flex;
			align-items: center;
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 44px;
			border-top: 1px solid #f5f5f5;
			background-color: #fff;

			&__left {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 30px;
				border: 1px solid #ddd;
				border-radius: 5px;
				padding: 0 10px;
				margin-left: 15px;

				&__input {
					color: #666;
					font-size: 12px;
				}

				&__icon {
					color: #f07373;
					font-size: 14px;
				}
			}

			&__right {
				display: flex;

				&__icon {
					font-size: 20px;
					color: #f07373;
					margin: 0 15px;
				}
			}
		}

		&__line {
			border-bottom: 5px solid #efefef;
			margin: 10px 0;
		}
	}

	.comment-box {
		color: #333;
		margin-top: 20px;
		font-size: 14px;

		&__null {
			font-size: 12px;
			color: #666;
			text-align: center;
			padding: 50px;
		}

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