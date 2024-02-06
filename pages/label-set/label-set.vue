<template>
	<view class="laber">
		<view class="laber-box">
			<view class="laber-box__title">
				<view class="laber-box__title__left">我的标签</view>
				<view class="laber-box__title__right" @click="handleEdit">{{is_edit ? '编辑' : '提交'}}</view>
			</view>
			<view class="laber-box__content">
				<uni-load-more v-if="loading" class="loading" status="loading" iconType="snow"></uni-load-more>
				<view class="laber-box__content__item" v-for="(item, index) in my_laberList" :key="item._id">
					{{item.name}}
					<view v-if="!is_edit" class="laber-box__content__icon-del iconfont"
					@click="handleDel(index)">&#xe7ee;</view>
				</view>
				<view v-if="my_laberList <= 0 && !loading" class="laber-box__content__null">暂无标签</view>
			</view>
		</view>
		<view class="laber-box">
			<view class="laber-box__title">
				<view class="laber-box__title__left">标签推荐</view>
			</view>
			<view class="laber-box__content">
				<uni-load-more v-if="loading" class="loading" status="loading" iconType="snow"></uni-load-more>
				<view class="laber-box__content__item" v-for="(item, index) in sell_laberList" :key="item._id">
					{{item.name}}
					<view v-if="!is_edit" class="laber-box__content__icon-add iconfont"
					@click="handleAdd(index)">&#xe63a;</view>
				</view>
				<view v-if="sell_laberList <= 0 && !loading" class="laber-box__content__null">暂无标签</view>
			</view>
		</view>
	</view>
</template>

<script>
import { get_label, set_label } from '../../common/api'
	export default {
		data() {
			return {
				is_edit: true,
				loading: false,
				my_laberList: [],
				sell_laberList: []
			}
		},
		onLoad() {
			this.loading = true
			get_label({
				type: 'all'
			}).then(res => {
				const { data } = res
				this.my_laberList = data.filter(item => item.current)
				this.sell_laberList = data.filter(item => !item.current)
				this.loading = false
			})
		},
		methods: {
			handleEdit() {
				if(this.is_edit) return this.is_edit = false
				uni.showLoading({
					mask: true
				})
				let label_ids = []
				this.my_laberList.forEach(item => {
					label_ids.push(item._id)
				})
				set_label({ label_ids }).then(res => {
					this.is_edit = true
					uni.$emit('setLabel', 'label变化了')
					uni.hideLoading()
					uni.showToast({
						title: '成功',
					})
				}).catch(e => {
					uni.hideLoading()
					uni.showToast({
						title: '失败',
						icon: 'error'
					})
				})
			},
			handleDel(index) {
				this.sell_laberList.push(this.my_laberList[index])
				this.my_laberList.splice(index,1)
			},
			handleAdd(index) {
				this.my_laberList.push(this.sell_laberList[index])
				this.sell_laberList.splice(index,1)
			}
		}
	}
</script>

<style lang="scss" scoped>
.laber{
	width: 100%;
	height: 100vh;
	font-size: 14px;
	overflow-y: auto;
}
.loading{
	width: 100%;
	text-align: center;
	padding: 50px 0;
}
.laber-box{
	background-color: #fff;
	margin-bottom: 10px;
	
	&__title{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		border-bottom: 1px solid #ebebeb;
		&__left{
			margin-left: 15px;
		}
		&__right{
			color: #00aa00;
			margin-right: 15px;
		}
	}
	&__content{
		display: flex;
		flex-wrap: wrap;
		padding: 10px 15px 0;
		&__item{
			position: relative;
			padding: 2px 8px;
			border: 1px solid #666;
			border-radius: 5px;
			margin: 0 10px 10px 0;
		}
		&__icon-del,
		&__icon-add{
			position: absolute;
			top: -8px;
			right: -8px;
			font-size: 20px;
		}
		&__icon-del{
			color: #ff0000;
		}
		&__icon-add{
			color: #00aa00;
		}
		&__null{
			width: 100%;
			text-align: center;
			padding: 50px 0;
			color: #666;
		}
	}
}
</style>
