<template>
	<view class="list-content">
		<scroll-view scroll-y="true" class="list-scroll" >
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"list-scroll",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.list-content{
		height: 100%;
		background-color: #fff;
		// overflow: hidden;
	}
	.list-scroll{
		height: 100%;
	}
</style>