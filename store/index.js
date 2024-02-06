import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: uni.getStorageInfoSync('userInfo') || {},
		historyList: uni.getStorageSync('search-history') || []
	},
	mutations: {
		handleUserInfo(state, histroy) {
			const { data } = histroy
			state.userInfo = data
			uni.setStorageSync('userInfo', data)
		},
		addHistoryList(state, history) {
			const { value } = history
			let {historyList} = state
			historyList.unshift(value)
			uni.setStorageSync('search-history', historyList)
		},
		removeHistoryList(state) {
			state.historyList = []
			uni.removeStorageSync('search-history')
		}
	}
})

export default store