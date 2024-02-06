<template>
	<swiper class="list-swiper" :current="activeIndex" @change="handleSwiper">
		<swiper-item v-for="(item,index) in tab" :key="index">
			<list-scroll>
				<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
				<list-cart v-for="listItem in list[item.name]" :key="listItem._id" :item="listItem"></list-cart>
			</list-scroll>
		</swiper-item>
	</swiper>
</template>

<script>
	import {
		get_list
	} from '../../common/api/index.js'
	export default {
		name: "list",
		props: ['tab', 'activeIndex'],
		data() {
			return {
				classify: '全部',
				loading: false,
				page: 1,
				pageSize: 10,
				list: {}
			};
		},
		created() {
			this.getList()
			uni.$on('updateLike', (type) => {
				if (type) {
					this.list = {}
					this.getList()
				}
			})
		},
		methods: {
			getList() {
				this.loading = true
				get_list({
					name: this.classify,
					page: 1,
					pageSize: this.pageSize
				}).then(res => {
					// this.list[this.classify] = res.data
					this.$set(this.list, this.classify, res.data)
					this.loading = false
				})
			},
			handleSwiper(e) {
				const {
					current
				} = e.detail
				this.classify = this.tab[current].name
				if (!this.list[this.classify] || this.list[this.classify].length === 0) {
					this.getList()
				}
				this.$emit('change', current)
			}
		}
	}
</script>

<style lang="scss">
	.list-swiper {
		height: 100%;
	}
</style>