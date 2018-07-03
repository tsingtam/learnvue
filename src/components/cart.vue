<template>
  <div class="page">
	<headers tabname="购物车"></headers>
	<div class="content">
		<div class="selectBar">
			<div class="select-item type">品类</div>
			<div class="select-item priceType">定价方式</div>
		</div>
		<div class="cart-content">
			<div class="content-item">
				<div class="comname">
					<input type="checkbox" value="checkbox" />
					<span>北京铝大牛科技有限公司</span>
				</div>
				<div class="cartInfo">
					<input type="checkbox" value="checkbox" />
					<div class="info">
						<span class="proName">精细品氧化铝</span>
						<div class="brand-num">
							<span>牌号：A-GG-A</span>
							<span>等级：低钠氧化铝</span>
							<span>包装：1吨</span>
						</div>
						<div class="price-num">
							<div class="price">现汇价：<span class="red">￥4100</span></div>
							<div class="num">
								<img src="../../static/img/icon/shop_cut.png"/>
								<input type="text" />
								<img src="../../static/img/icon/shop_add.png"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footers :urlRouter="$route.path" ref="footer"></footers>
  </div>
</template>

<script>
import {mapGetters, mapMutations } from 'vuex';
import Headers from './base/Header.vue';
import Footers from './base/Footer.vue';
export default {
	data () {
		return {
		  msg: 'Hello Vuex'
		}
	},
	components:{
		Headers,
		Footers
	},
	computed: {
		
	},
	methods: {
		...mapMutations([
		
			]),
			
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.selectBar{
	margin-top:2rem;
	.select-item{
		height:1.3rem;
		line-height:1.3rem;
		width:50%;
		float:left;
		text-align:center;
		background-color:#f0f0f0;
	}
}
.cart-content{
	padding:10px;
}
</style>
