<template>
	<view>
		<view class="navBar" @click="handleOpenSearch">
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<view class="search" :style="{height: navBarHeight+'px',width: searchWidth+'px'}">
				<view v-if="is_search" class="search__back iconfont" @click.stop="handleBack">&#xe624;</view>
				<view v-if="!is_search" class="search__item">
					<text class="search__item__icon iconfont">&#xe741;</text>
					<text class="search__item__rehearsal">uniapp</text>
				</view>
				<view v-else class="search__box">
					<input type="text" class="search__box__rehearsal"
					v-model="val" placeholder="请输入要搜索的内容" @input="handleInput" />
					<view class="search__box__btn" @click="handleBtn">搜索</view>
				</view>
			</view>
		</view>
		<view :style="{height: statusBarHeight + navBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"navBar",
		props: ['is_search', 'value'],
		watch: {
			value(newVal) {
				this.val = newVal
			}
		},
		data() {
			return {
				val: '',
				statusBarHeight: 20,
				navBarHeight: 45,
				searchWidth: 375,
			};
		},
		created() {
			//获取状态栏高度
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight
			// #ifndef MP
			this.searchWidth = window.innerWidth
			// #endif
			
			//获取胶囊位置
			// #ifndef APP-PLUS || WEB
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight)
			+ (menuButtonInfo.top - info.statusBarHeight)
			this.searchWidth = menuButtonInfo.left
			// #endif
		},
		methods: {
			handleOpenSearch() {
				if (this.is_search) return
				uni.navigateTo({
					url: '/pages/home-search/home-search'
				})
			},
			handleBack() {
				uni.navigateBack()
			},
			handleInput(e) {
				const { value } = e.detail
				this.$emit('input', value)
			},
			handleBtn() {
				const ask = /^\s+$/g
				if(!this.val || ask.test(this.val)) return
				this.$emit('searchBtn',this.val)
			}
		}
	}
</script>

<style lang="scss">
	.navBar{
		z-index: 999;
		position: fixed;
		left: 0;right: 0;
		top: 0;
		width: 100%;
		background-color: #36ab60;
		.search{
			display: flex;
			align-items: center;
			justify-content: center;
			height: 45px;
			&__back{
				font-size: 20px;
				color: #fff;
				margin-left: 16px;
			}
			&__box,
			&__item{
				flex: 1;
				display: flex;
				align-items: center;
				width: 100%;
				height: 30px;
				color: #bcbcbc;
				background-color: #fff;
				margin: 0 16px;
				&__icon{
					vertical-align: top;
					font-size: 20px;
					padding: 0 8px;
				}
				&__rehearsal{
					flex: 1;
					padding: 0 5px;
					font-size: 14px;
				}
				&__btn{
					width: 50px;
					line-height: 25px;
					background-color: #36ab60;
					text-align: center;
					color: #fff;
					margin-right: 2.5px;
					border-radius: 5px;
				}
			}
			&__box{
				border-radius: 5px;
			}
			&__item{
				border-radius: 100px;
			}
		}
	}
</style>