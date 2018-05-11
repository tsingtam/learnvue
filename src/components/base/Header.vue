<template>
	<header id="headerTab">
		<p>{{tabname}}</p>
	</header>
</template>

<script>
	export default {
		props: ['tabname'],
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../../../static/less/base.less';
	@import '../../../static/less/variable.less';
	header {
		height: 2rem;
		text-align: center;
		background: @theme_background;
		color: @base_color;
		font-size: 1rem;
		line-height: 2rem;
		width: 100%;
		z-index: 10;
		position: fixed;
		top: 0;
		left:0;
	}
</style>