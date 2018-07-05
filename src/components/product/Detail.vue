<template>
  <div class="page">
		<headers tabname="产品详情" isBack="true">
		</headers>
		<div class="content-detail">
			<div class="detail-price">
				<p class="name">{{$store.state.detail.name}}</p>
				<div class="price"><span class="red">¥{{$store.state.detail.price}}</span>/出厂价</div>
				<div class="number"></div>
			</div>
			<div class="detail-info">
				<div class="title">产品属性</div>
				<ul>
					<li>
						<div class="nameL">品种</div>
						<div class="contentR">{{$store.state.detail.category.name}}</div>
					</li>
					<li>
						<div class="nameL">牌号</div>
						<div class="contentR">{{$store.state.detail.name}}</div>
					</li>
					<li class="quotaLi">
						<div class="nameL">指标</div>
						<div class="contentR">{{$store.state.detail.quota}}</div>
					</li>
					<li>
						<div class="nameL">使用行业</div>
						<div class="contentR">{{$store.state.detail.uses}}</div>
					</li>
					<li>
						<div class="nameL">工艺</div>
						<div class="contentR">{{$store.state.detail.technology}}</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="detail-bottom flex-align-center flex-around">
			<div class="toCart">
				<span class="tabbar-label">联系卖方</span>
			</div>
			<div class="addCart" @click="buy">
				<span class="tabbar-label">加入购物车</span>
			</div>
			<div class="external addPay" @click="buy">
				<span class="tabbar-label">立即购买</span>
			</div>
		</div>
		<transition name="slide-up" >
			<div class="model" v-show="addCartModel" v-cloak>
				<div class="model-content addCart-content">
					<div class="cartModel-box flex">		
						<div class="cartModel-text">
							<div class="flex-between">
								<p class="goods-name">{{$store.state.detail.name}}</p>	
								<img src="../../../static/img/icon/close.png" class="cartClose" @click.stop="addCartModel=false" />
							</div>
							<p class="goods-price">¥{{$store.state.detail.price}}</p>
						</div>
					</div>
					<div class="cartModel-bottom">
						<div class="cart-item">
							<p>交货方式</p>
							<div class="product-model">
								<span class="active">自提</span><span>物流</span>
							</div>
						</div>
						<div class="cart-item">
							<p>提货地</p>
							<div class="product-grade">
								<span>北京</span><span class="active">上海</span>
							</div>
						</div>
						<div class="cart-item">
							<p>包装规格</p>
							<div class="product-grade">
								<span class="active">50kg</span><span>100kg</span><span>1吨</span>
							</div>
						</div>
						<div class="cart-item minus-plus">
							<p>购买数量</p>
							<div class="product-grade">
								<div class="minus" @click="onMinus()">-</div>
								<input class="buyNum" :value="buynumber" />
								<div class="plus" @click="onAdd()">+</div>
							</div>
						</div>
					</div>
					<div @click.stop="onBuy">
					<p class="cartModel-addCart">确定</p>
					</div>
				</div>

			</div>
		</transition>
	</div>
</template>

<script>
import Headers from '../base/Header.vue';
import { mapGetters,mapMutations } from 'vuex';
export default {
	data () {
		return {
			addCartModel:false,
			buynumber:1
		}
	},
	computed: {
		...mapGetters([
			'this.$store.state.detail',
			'this.$store.state.cart'
		])
	},
	mounted(){
		console.log(this.$store.state.detail);
	},
	components:{
		Headers
	},
	methods: {
		buy(){
			this.addCartModel = true;
		},
		onBuy(){
			this.addCartModel = false;
			this.setCart(this.$store.state.detail);
		},
		onAdd(){
			this.buynumber++;
		},
		onMinus(){
			if(this.buynumber > 1){
				this.buynumber--;
			}
		},
		...mapMutations({
			setCart:'SET_CART'
		})
	},
}
</script>
<style lang="less" scoped>
@import '../../../static/less/variable.less';
.content-detail{
	padding-top:2rem;
	padding-bottom:2.5rem;
}
.detail-price{
	border-bottom:.1rem solid #f0f0f0;
	padding-bottom:.8rem;
	padding-left:.8rem;
	.name{
		padding-top:.5rem;
		font-size:.8rem;
		margin-bottom:1rem;
	}
	.price{
		width:60%;
		display:inline-block;
		.red{
			color:red;
			font-size:1.2rem;
		}
	}
	.number{
		width:38%;
		display:inline-block;
	}
}
.detail-info{
	padding-top:.5rem;
	padding-left:.8rem;
	.title{
		font-size:.8rem;
		margin-bottom:.5rem;
	}
}
.detail-info li{
	width:100%;
	font-size:.7rem;
	.nameL{
		width:35%;
		display:inline-block;
	}
	.contentR{
		width:62%;
		display:inline-block;
	}
}
.detail-bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 2.5rem;
		background: @theme_background;
		color: @base_color;
		font-size: .8rem;
		img {
			width: .4rem;
			height: .4rem;
		}
	}
	.toCart{
		position: relative;
		p{
			position: absolute;
			text-align: center;
			top: -.2rem;
			right: -.2rem;
			background: @base_color;
			color:@theme_background;
			width: .4rem;
			height: .4rem;
			line-height: .4rem;
			border-radius: .8rem;
		}
	}
	.addCart-content{
		position: absolute;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding-top: .2rem;
		background: @base_color;
	}
	.cartModel-box{
		padding:0 1rem;
	}
	.product-model{
		span{}
	}
	.cartModel-text{
		width: 100%;
		padding: .2rem;
	}
	.cartClose{
		width: 1.2rem;
		height: 1.2rem;
	}
	.goodsOp{
		input{
			font-size: .24rem;
			border: none;
			width: .6rem;
			text-align: center;
		}
		img{
			width: .32rem;
			height: .32rem;
		}
	}
	.cartModel-bottom{
		padding: .2rem 1rem;
		font-size: .24rem;
		border-top: 1px solid #ccc;
		p{
			line-height:1.5rem;
			height:1.5rem;
			font-size:14px;
		}
		span{
			line-height:2rem;
			height:2rem;
			border:1px solid #f0f0f0;
			border-radius:.5rem;
			padding:.2rem;
			margin-right:.5rem;
		}
		.active{
			background:#3672dc;
			color:#fff;
		}
		.cart-item{
			padding:5px 0px;
		}
		.minus-plus .product-grade{
			display:flex;
		}
		.buyNum{
			height:1.5rem;
			line-height:1.5rem;
			text-align:center;
			width:5rem;
			margin:0 .5rem;
		}
		.minus,.plus{
			width:2rem;
			height:2rem;
			line-height:2rem;
			border-radius:.5rem;
			background-color:#3672dc;
			text-align:center;
			font-size:1rem;
			color:#fff;
		}
	} 
	.cartModel-addCart{
		background: @theme_background;
		height: 2rem;
		color:@base_color;
		line-height: 2rem;
		text-align:center;
		font-size: .8rem;
	}
</style>