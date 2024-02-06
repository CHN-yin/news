<template>
	<view class="list-cart" @click="handleList">
		<!-- 基础卡片 -->
		<view v-if="item.mode === 'base'" class="base">
			<image class="base__img" :src="item.cover[0]" mode="aspectFill"></image>
			<view class="base__content">
				<view class="base__content__title">{{item.title}}
					<list-like :item="item" :type="type"></list-like>
				</view>
				<view class="base__content__des">
					<view class="base__content__des__label">{{item.classify}}</view>
					<view class="base__content__des__scan">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		<!-- 多图卡片 -->
		<view v-if="item.mode === 'many'" class="many">
			<view class="many__content">
				<view class="many__content__title">{{item.title}}
					<list-like :item="item" :type="type"></list-like>
				</view>
				<view class="many__content__imgs">
					<image v-for="i in 3" :key="i" class="many__content__img"
					:src="item.cover[i]" mode="aspectFill"/>
				</view>
				<view class="many__content__des">
					<view class="many__content__des__label">{{item.classify}}</view>
					<view class="many__content__des__scan">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		<!-- 大图卡片 -->
		<view v-if="item.mode === 'big'" class="big">
			<view class="big__content">
				<image class="big__content__big-img" :src="item.cover[0]" mode="aspectFill" />
				<view class="big__content__title big-margin">{{item.title}}
					<list-like :item="item" :type="type"></list-like>
				</view>
				<view class="big__content__des">
					<view class="big__content__des__label">{{item.classify}}</view>
					<view class="big__content__des__scan">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-cart",
		props: ['item','type'],
		data() {
			return {
			};
		},
		methods: {
			handleList() {
				const { item } = this
				uni.navigateTo({
					url: '/pages/detail/detail?detail_id='+ item._id
				})
			}
		}
	}
</script>

<style lang="scss">
	.base,
	.many,
	.big{
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color:#000000,$alpha:0.1);
		&__img{
			width: 70px;
			height: 70px;
			object-fit: cover;
			margin-right: 10px;
			border-radius: 5px;
		}
		&-margin{
			margin: 10px 0;
		}
		&__content{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&__title{
				position: relative;
				font-size: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				white-space: normal !important;
				word-wrap: break-word;
				padding-right: 25px;
			}
			&__des{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				&__label{
					border-radius: 50px;
					border: 1px solid #36ab60;
					color: #36ab60;
					padding: 0 5px;
				}
				&__scan{
					color: #bbb;
				}
			}
			&__imgs{
				display: flex;
				margin: 10px 0;
			}
			&__img{
				width: 100%;
				height: 70px;
				object-fit: cover;
				margin-left: 10px;
				border-radius: 5px;
				&:first-child{
					margin-left: 0;
				}
			}
			&__big-img{
				width: 100%;
				height: 100px;
				object-fit: cover;
				border-radius: 5px;
			}
		}
	}
</style>