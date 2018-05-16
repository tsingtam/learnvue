<template>
  <div class="page">
		<headers tabname="产品详情" isBack="true">
		</headers>
		<div class="content-detail">
			<div class="detail-price">
				<p class="name">{{$store.state.detail.name}}</p>
				<div class="price"><span class="red">¥{{$store.state.detail.price}}</span>/现汇价</div>
				<div class="number">100kg 起批</div>
			</div>
			<div class="detail-info">
				<div class="title">产品属性</div>
				<ul>
					<li>
						<div class="nameL">牌号</div>
						<div class="contentR">{{$store.state.detail.brand}}</div>
					</li>
					<li>
						<div class="nameL">产地</div>
						<div class="contentR">{{$store.state.detail.production}}</div>
					</li>
					<li>
						<div class="nameL">AL2O3</div>
						<div class="contentR">{{$store.state.detail.content}}</div>
					</li>
					<li>
						<div class="nameL">中位粒径</div>
						<div class="contentR">{{$store.state.detail.width}}μm</div>
					</li>
					<li>
						<div class="nameL">SiO2</div>
						<div class="contentR">{{$store.state.detail.si}}</div>
					</li>
					<li>
						<div class="nameL">Fe2O3</div>
						<div class="contentR">{{$store.state.detail.Fe}}</div>
					</li>
					<li>
						<div class="nameL">生产厂家</div>
						<div class="contentR">{{$store.state.detail.company}}</div>
					</li>
					<li>
						<div class="nameL">批号</div>
						<div class="contentR">{{$store.state.detail.batch}}</div>
					</li>
					<li>
						<div class="nameL">执行质量标准</div>
						<div class="contentR">{{$store.state.detail.quality}}</div>
					</li>
					<li>
						<div class="nameL">用途</div>
						<div class="contentR">{{$store.state.detail.use}}</div>
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
								<p class="goods-name">耐火材料</p>	
								<img src="../../../static/img/icon/close.png" class="cartClose" @click.stop="addCartModel=false" />
							</div>
							<p class="goods-price">¥4100.00</p>
						</div>
					</div>
					<div class="cartModel-bottom">
						<p>产品型号</p>
						<div class="product-model">
							<span class="active">A-C</span><span>A-GG-A</span>
						</div>
						<p>产品等级</p>
						<div class="product-grade">
							<span>低钠氧化铝</span><span class="active">超低钠铝粉</span>
						</div>
						<p>包装规格</p>
						<div class="product-grade">
							<span class="active">50kg</span><span>100kg</span>
						</div>
						<p>定价方式</p>
						<div class="product-grade">
							<span class="active">现汇</span><span>承兑</span>
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
			addCartModel:false
		}
	},
	computed: {
		...mapGetters([
			'this.$store.state.detail'
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
		}
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
	line-height:2.2rem;
	height:2.2rem;
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
			line-height:1rem;
			height:1rem;
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