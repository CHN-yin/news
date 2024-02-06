<template>
	<view class="list__like" @click.stop="handleLike">
		<view class="iconfont list__like__icon" v-html="is_like ? '&#xe627;' : '&#xe804;'"></view>
	</view>
</template>

<script>
import { list_like } from '../../common/api';
	export default {
		name:"list-like",
		props: ['item','type'],
		data() {
			return {
				is_like: false
			};
		},
		created() {
			this.is_like = this.item.is_like
		},
		methods: {
			handleLike() {
				this.httpLike()
				this.is_like = !this.is_like
			},
			httpLike() {
				uni.showLoading()
				list_like({
					article_id: this.item._id
				}).then(res => {
					uni.$emit('updateLike', this.type)
					uni.hideLoading()
					uni.showToast({
						title: this.is_like ? '收藏成功' : '取消收藏',
						icon: 'none'
					})
					uni.showt
				}).catch(() => {
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style lang="scss">
.list__like{
	position: absolute;
	top: 0;
	right: 0;
	&__icon{
		font-size: 20px;
		color: #f07373;
	}
}
</style>