<template>
	<view>
		<view class="follow__list__item">
			<uni-load-more v-if="articleList.length === 0" status="loading"
					iconType="snow"></uni-load-more>
				<!-- <view v-if="articleListNull" class="follow__list__null">空空如也</view> -->
			<list-scroll>
				<list-cart v-for="item in articleList" :key="item._id" :item="item" type="follow" />
			</list-scroll>
		</view>
	</view>
</template>

<script>
import { get_myArticle } from '../../common/api';
	export default {
		data() {
			return {
				articleList: []
			};
		},
		onLoad() {
			this.getMyArticlle()
		},
		methods: { 
			getMyArticlle() {
				get_myArticle().then(res => {
					this.articleList = res.data
				})
			}
		}
	}
</script>

<style lang="scss">

</style>