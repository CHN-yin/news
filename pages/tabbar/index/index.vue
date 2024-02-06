<template>
	<view class="wrap">
		<uni-load-more v-if="loading" class="loading" status="loading" iconType="snow"></uni-load-more>
		<view v-else class="content">
			<navBar></navBar>
			<tab :list="tabList" :activeIndex="activeIndex" @tab="tab"></tab>
			<list class="list" :tab="tabList" :activeIndex="activeIndex" @change="handleSwiper"></list>
		</view>
	</view>
</template>

<script>
import { get_label } from '../../../common/api'
	export default {
		data() {
			return {
				tabList: [],
				activeIndex: 0,
				loading: false
			}
		},
		onLoad() {
			this.loading = true
			uni.$on('setLabel', (res) => {
				this.getLabel()
			})
			this.getLabel()
		},
		methods: {
			tab(opt) {
				const {item,index} = opt
				this.activeIndex = index
			},
			handleSwiper(current) {
				this.activeIndex = current
			},
			getLabel() {
				get_label().then(res => {
					const { data } = res
					data.unshift(
					{
						name: '全部'
					})
					this.tabList = data
					this.loading = false
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
	}
	.loading{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	.wrap,
	.content{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.list{
		flex: 1;
	}
</style>
