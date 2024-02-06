<template>
	<view>
		<view class="comment-box__head">
			<image class="comment-box__head__img" :src="comment.author.avatar" mode="aspectFit"></image>
			<view class="comment-box__head__info">
				<view class="comment-box__head__name">{{comment.author.author_name}}</view>
				<view class="comment-box__head__time">{{comment.time | dateFormat}}</view>
			</view>
		</view>
		<view class="comment-box__content">
			<view>
				<text v-if="is_reply">
					<text class="comment-box__content__to-name">回复</text>{{comment.to}}：
				</text>
				{{comment.content}}
			</view>
			<view class="comment-box__btn" @click="handleReply({comment,is_reply})">回复</view>
			<view class="comment-box__reply" v-for="item in comment.replys" :key="item._id">
				<detail-comment :is_reply="true" :comment="item" @reply="handleReply"></detail-comment>
			</view>
		</view>
		<view v-if="!is_reply" class="comment-box__line"></view>
	</view>
</template>

<script>
	import detailComment from '@/components/detail-comment/detail-comment.vue'
	export default {
		name: "detailComment",
		components: {
			detailComment
		},
		props: ['comment', 'is_reply'],
		data() {
			return {};
		},
		methods: {
			handleReply(comment) {
				// 区分父回复id、子回复id
				if (comment.is_reply) {
					comment.reply_id = comment.comment._id
					comment.comment._id = this.comment._id
				}
				this.$emit('reply', comment)
			}
		}
	}
</script>

<style lang="scss">
	.comment-box {
		&__line {
			border-bottom: 1px solid #e6e6e6;
			margin: 10px 0;
		}

		&__head {
			display: flex;
			align-items: center;
			padding: 0 15px;

			&__img {
				width: 36px;
				height: 36px;
				border-radius: 50%;
				object-fit: cover;
			}

			&__info {
				flex: 1;
				padding-left: 10px;
			}

			&__name {
				margin-bottom: 4px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				white-space: normal !important;
				word-wrap: break-word;
			}

			&__time {
				font-size: 11px;
				color: #666;
			}
		}

		&__content {
			padding: 0 15px;
			margin-top: 10px;

			&__to-name {
				margin-right: 5px;
				font-weight: bold;
			}
		}

		&__btn {
			display: inline-block;
			font-size: 12px;
			border: 1px solid #ccc;
			color: #999;
			border-radius: 20px;
			padding: 2px 10px;
			margin-top: 15px;
		}

		&__reply {
			margin-top: 10px;
			padding: 15px 0;
			border: 1px solid #eee;
		}

		&__item {
			margin-bottom: 10px;
		}
	}
</style>