<script>
import { get_userInfo } from './common/api'
	export default {
		onLaunch() {
			this.getUserInfo()
		},
		methods:{
			getUserInfo(){
				get_userInfo().then(res => {
					const { data } = res
					this.$store.commit('handleUserInfo', {data})
				})
			}
		}
	}
</script>

<style>
	@import 'common/style/icons.css';
	@import 'common/style/base.scss';
	@import 'components/gaoyia-parse/parse.css';
</style>
