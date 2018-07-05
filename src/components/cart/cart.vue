<template>
  <div class="page">
	<headers tabname="购物车"></headers>
	<div class="content">
		<div class="selectBar"></div>
		<div class="cart-content">
			<div class="content-item">
				<div class="comname">
					<input type="checkbox" value="checkbox" class="select_box" />
					<span>北京铝大牛科技有限公司</span>
				</div>
				<div class="cartInfo" v-for="(cartItem,cartIndex) in $store.state.cart">
					<input type="checkbox" class="select_box" value="checkbox" />
					<div class="info">
						<div class="brand-num">
							<div class="brands">牌号：{{cartItem.brand}}</div>
							<div class="pack">包装：1吨</div>
						</div>
						<div class="price-num">
							<div class="price">单价：<span class="red">￥{{cartItem.price}}</span></div>
							<div class="num">
								<div class="minus">-</div>
									<input type="text" class="cartnum" value="1" />
								<div class="plus">+</div>
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
import Headers from '../base/Header.vue';
import Footers from '../base/Footer.vue';
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
		...mapGetters([
			'this.$store.state.cart'
		])
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
.comname{
	.select_box{
		margin:.6rem .2rem .2rem 1rem;
	}
	font-size:1rem;
	height:2rem;
	line-height:2rem;
}
.cartInfo{
	.select_box{
		margin:1rem 1rem 0rem 1rem;
	}
	margin-bottom:.3rem;
	display:flex;
	font-size: .8rem;
	background-color:#f0f0f0;
	.info{
		width:20rem;
	}
	.brand-num{
		height:2rem;
		line-height:2rem;
		display:flex;
		.brands {
			width: 70%;
		}
		.pack{
			width:26%;
		}
	}
	.price-num{
		display:flex;
		height:2rem;
		line-height:2rem;
		.price{
			width:70%;
		}
		.num{
			display:flex;
		}
		.cartnum{
			width:4rem;
			margin:0rem .5rem;
			text-align:center;
			line-height:1.3rem;
			height:1.3rem;
		}
		.minus,.plus{
			width:1.5rem;
			height:1.5rem;
			line-height:1.5rem;
			border-radius:.5rem;
			background-color:#3672dc;
			text-align:center;
			font-size:1rem;
			color:#fff;
		}
	}
}
</style>
