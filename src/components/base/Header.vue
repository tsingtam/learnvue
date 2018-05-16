<template>
	<header id="headerTab">
		<img src="../../../static/img/icon/arrowBack.png" @click="onBack" v-show="isBack"/>
		<p>{{tabname}}</p>
	</header>
</template>

<script>
	export default {
		props: ['tabname','isBack'],
		data() {
			return {
			
			}
		},
		methods: {
			onBack() {
				if(this.isBack) {
					this.$router.back();
				} else {
					this.$router.push('./member');
				}

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
	img {
		width: 1.4rem;
		height: 1.4rem;
		left: .2rem;
		margin-top: .2rem;
		position: absolute;
	}
</style>