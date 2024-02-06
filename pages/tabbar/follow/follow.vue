<template>
	<view class="follow">
		<view class="follow__header">
			<view class="follow__nav">
				<view :class="{follow__nav__item:true,'follow__nav__item--active': activeIndex === 0}"
					@click="handleTab(0)">
					文章
				</view>
				<view :class="{follow__nav__item:true,'follow__nav__item--active': activeIndex === 1}"
					@click="handleTab(1)">
					作者
				</view>
			</view>
		</view>
		<view class="follow__list">
			<swiper class="follow__list__swiper" :current="activeIndex" @change="change">
				<swiper-item>
					<view class="follow__list__item">
						<uni-load-more v-if="articleList.length === 0 && !articleListNull" status="loading"
							iconType="snow"></uni-load-more>
						<view v-if="articleListNull" class="follow__list__null">空空如也</view>
						<list-scroll>
							<list-cart v-for="item in articleList" :key="item._id" :item="item" type="follow" />
						</list-scroll>

					</view>
				</swiper-item>
				<swiper-item>
					<view class="follow__list__item">
						<list-scroll>
							<uni-load-more v-if="authorList.length === 0 && !authorListNull" status="loading"
								iconType="snow"></uni-load-more>
							<view v-if="authorListNull" class="follow__list__null">空空如也</view>
							<view class="follow__author" v-for="item in authorList" :key="item._id">
								<view class="follow__author__img">
									<image :src="item.avatar" mode="aspectFit"></image>
								</view>
								<view class="follow__author__info">
									<view class="follow__author__name">{{item.author_name}}</view>
									<view class="follow__author__sketch">
										<view class="follow__author__sketch__item">{{item.professional}}</view>
										<view class="follow__author__sketch__item">
											<text>发帖 {{item.article_ids.length}}</text>
											<text>粉丝 {{item.fans_count}}</text>
										</view>
									</view>
								</view>
							</view>
						</list-scroll>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		get_follow, get_likeAuthor
	} from '../../../common/api'
	export default {
		data() {
			return {
				activeIndex: 0,
				articleList: [],
				authorList: [],
				articleListNull: false,
				authorListNull: false
			}
		},
		onLoad() {
			this.getArticle()
			this.getAuthor()
			uni.$on('updateLike', (type) => {
				this.getArticle()
			})
			uni.$on('updateAuthor', () => {
				this.getAuthor()
			})
		},
		methods: {
			handleTab(index) {
				this.activeIndex = index
			},
			change(e) {
				const {
					current
				} = e.detail
				this.activeIndex = current
			},
			getArticle() {
				get_follow().then(res => {
					this.articleList = res.data
					this.articleListNull = this.articleList.length === 0 ? true : false
				})
			},
			getAuthor() {
				get_likeAuthor().then(res => {
					this.authorList = res.data
					this.authorListNull = this.authorList.length === 0 ? true : false
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
		color: #333;
	}

	.follow {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-color: #fff;

		&__header {
			padding: 10px 0;
			border-bottom: 1px solid #f5f5f5;
		}

		&__nav {
			display: flex;
			align-items: center;
			border: 1px solid #36ab60;
			border-radius: 5px;
			font-size: 14px;
			margin: 0 20px;

			&__item {
				flex: 1;
				text-align: center;
				padding: 5px 0;

				&:first-child {
					border-right: 1px solid #36ab60;
				}

				&--active {
					color: #36ab60;
				}
			}
		}

		&__list {
			flex: 1;

			&__swiper {
				height: 100%;
			}

			&__item {
				height: 100%;
			}

			&__null {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				font-size: 14px;
				color: #777;
			}
		}

		&__author {
			display: flex;
			padding: 10px 0;
			border-bottom: 1px solid #f5f5f5;

			&__img {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				overflow: hidden;
				margin: 0 10px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			&__info {
				flex: 1;
				font-size: 12px;
				margin-right: 10px;
			}

			&__name {
				font-size: 14px;
				font-weight: bold;
			}

			&__sketch {
				display: flex;
				justify-content: space-between;
				margin-top: 4px;

				&__item {
					color: #555;

					&:last-child {
						color: #999;

						text:last-child {
							margin-left: 10px;
						}
					}
				}
			}
		}
	}
</style>