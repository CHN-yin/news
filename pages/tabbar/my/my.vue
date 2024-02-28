<template>
	<view class="my">
		<view class="my__header">
			<view class="my__header__backgroud">
				<image :src="userInfo.avatar" mode="aspectFill"></image>
			</view>
			<view class="my__header__head-img">
				<image :src="userInfo.avatar" mode="aspectFit"></image>
			</view>
			<view class="my__header__name">{{userInfo.author_name}}</view>
			<view class="my__header__info">
				<view class="my__header__item">
					<text>关注</text>
					<text>{{userInfo.author_likes_ids.length}}</text>
				</view>
				<view class="my__header__item">
					<text>粉丝</text>
					<text>{{userInfo.fans_count}}</text>
				</view>
				<view class="my__header__item">
					<text>积分</text>
					<text>{{userInfo.integral_count}}</text>
				</view>
			</view>
		</view>
		<view class="my__main">
			<view class="my__main__item" @click="handleMyArticle">
				<text>
					<text class="my__main__item__icon iconfont">&#xf1ab;</text>
					我的文章
				</text>
				<text class="my__main__item__to iconfont">&#xe665;</text>
			</view>
			<view class="my__main__item" @click="handleFeedBack">
				<text>
					<text class="my__main__item__icon iconfont">&#xe64c;</text>
					意见反馈
				</text>
				<text class="my__main__item__to iconfont">&#xe665;</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			handleMyArticle() {
				uni.navigateTo({
					url: '/pages/my-article/my-article'
				})
			},
			handleFeedBack() {
				uni.navigateTo({
					url: '/pages/feedback/feedback'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my {
		&__header {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-direction: column;
			background: #fff;
			border-bottom: 1px solid #f5f5f5;
			height: 200px;

			&__backgroud {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				opacity: 0.3;
				filter: blur(3px);

				image {
					width: 100%;
					height: 100%;
				}
			}

			&__head-img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				overflow: hidden;
				margin-top: 25px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			&__name {
				font-weight: bold;
			}

			&__info {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
			}

			&__item {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;

				text:first-child {
					font-size: 14px;
					margin-bottom: 2px;
				}

				text:last-child {
					font-size: 12px;
					color: #999;
				}
			}
		}

		&__main {
			&__item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10px 10px;
				background: #fff;
				margin-bottom: 8px;
				font-size: 14px;

				&__icon {
					margin-right: 5px;
				}

				&__to {
					font-size: 20px;
					color: #999;
				}
			}
		}
	}
</style>