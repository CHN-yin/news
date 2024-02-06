<template>
	<view class="wrapper">
		<view class="box">
			<scroll-view scroll-x="true" class="tab-box">
				<view class="tab-box__list">
					<view class="tab-box__list__item" v-for="(item,index) in list" :key="index">
						<text :class="{'active': index === activeIndex}"
						@click="() =>handleTab(item.name,index)">
						{{ item.name }}
						</text>
					</view>
				</view>
			</scroll-view>
			<view class="tab-set" @click="handleLaberSet">
				<text class="iconfont tab-set__icon">&#xe803;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"tab",
		props: ['list', 'activeIndex'],
		data() {
			return {
				activeTab: 0,
				};
		},
		methods: {
			handleTab(item,index) {
				this.activeTab = index
				this.$emit('tab',{item,index})
			},
			handleLaberSet() {
				uni.navigateTo({
					url: '/pages/label-set/label-set'
				})
			}
		}
	}
</script>

<style lang="scss">
	.box{
		display: flex;
		border-bottom: 1px solid #f5f5f5;
	}
	.tab-box{
		flex: 1;
		background-color: #fff;
		&__list{
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			height: 45px;
			&__item{
				flex-shrink: 0;
				margin: 0 9px;
			}
		}
	}
	.active{
		color: #36ab60;
	}
	.tab-set{
		position: relative;
		width: 45px;
		line-height: 45px;
		text-align: center;
		background-color: #fff;
		&__icon{
			font-size: 25px;
		}
		&::after{
			content: "";
			position: absolute;
			top: 12px;
			bottom: 12px;
			left: 0;
			width: 1px;
			background-color: #ddd;
		}
	}
</style>