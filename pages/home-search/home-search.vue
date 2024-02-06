<template>
	<view class="wrapper">
		<navBar :is_search="true" v-model="value" @searchBtn="searchBtn" @input="inputVal"></navBar>
		<view v-if="is_history" class="content">
			<view class="content__header">
				<view class="content__header__title">搜索历史</view>
				<view class="content__header__clear" @click="handleRemove">清空</view>
			</view>
			<view v-if="historyList.length > 0" class="content__list">
				<view class="content__list__item" v-for="(item,index) in historyList" :key="index" @click="handleHistory(item)">{{item}}</view>
			</view>
			<view v-else class="content__null">没有搜索历史</view>
		</view>
		<view v-else class="content">
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<list-scroll v-if="searchList.length > 0">
				<list-cart v-for="item in searchList" :key="item._id" :item="item"></list-cart>
			</list-scroll>
			<view v-if="searchList.length <= 0 && !loading"
			class="content__null">搜索无结果！</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex'
import { get_search } from '../../common/api'
	export default {
		data() {
			return {
				is_history: true,
				loading: false,
				searchList: [],
				value: ''
			}
		},
		computed: {
			...mapState(['historyList'])
		},
		methods: {
			searchBtn(search_value) {
				this.is_history = false
				this.searchList = []
				this.loading = true
				get_search({search_value}).then(res => {
					this.searchList = res.data
					if(!this.historyList.includes(search_value)) {
						this.$store.commit('addHistoryList',{ value: search_value })
					}
					this.loading = false
				})
			},
			inputVal(val){
				if(!val) this.is_history = true
			},	
			handleHistory(item) {
				this.value = item
			},
			handleRemove() {
				this.$store.commit('removeHistoryList')
			}
		}
	}
</script>

<style lang="scss">
.wrapper{
	height: 100vh;
	display: flex;
	flex-direction: column;
}
.content{
	overflow-y: auto;
	background-color: #fff;
	&__header{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		padding: 0 16px;
		font-size: 14px;
		border-bottom: 1px solid #ebebeb;
		&__title{
			color: #ff0000;
		}
		&__clear{
			color: #00aa00;
		}
	}
	&__list{
		display: flex;
		flex-wrap: wrap;
		padding: 16px;
		padding-bottom: 0;
		&__item{
			max-width: 100px;
			line-height: 20px;
			border: 1px solid #333;
			border-radius: 3px;
			text-align: center;
			font-size: 12px;
			color: #333;
			padding: 0 5px;
			margin: 0 16px 16px 0;
			
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	&__null{
		text-align: center;
		color: #666;
		padding: 100px 0;
		font-size: 12px
	}
}
</style>
