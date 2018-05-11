<template>
	<div class="product">
		<headers tabname="铝大牛"></headers>
		<ul class="menu-bar">
			<li class="active">精细氧化铝</li>
			<li data-type="2">企业服务</li>
		</ul>
		<nav class="img_nav">
		   <div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="bannerItem in bannerList">
						<img :src="bannerItem.img" />
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
    	</nav>
		<div class="select">
		
		</div>
		<ul class="list-product">
			<li class="btnProductView">
				<div class="content">
					<div class="proInfoL">
						<ul>
							<li class="proInfoL-item protitle">精细氧化铝精细氧化铝</li>
							<li class="proInfoL-item brand">牌号：A-GG-WE</li>
							<li class="proInfoL-item con">含量：99%</li>
							<li class="proInfoL-item rank">产品等级：低钠氧化铝</li>
						</ul>
					</div>
					<div class="proInfoR">
						<div class="price">
							<span class="red">4100</span>元/吨
						</div>
						<div class="cartIcon"></div>
					</div>
				</div>
			</li>
		</ul>
		<footers :urlRouter="$route.path" ref="footer"></footers>
	</div>
</template>

<script>
import Headers from './base/Header.vue';
import Footers from './base/Footer.vue';
import '../../static/css/swiper.min.css';
import Swiper from '../../static/js/swiper.min';
export default {
	data () {
		return {
			products:[],
			bannerList:[]
		}
	},
	components:{
		Headers,
		Footers
	},
	mounted(){
		this.getBannerList();
		setTimeout(() => {
			const swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				loop: true,
				spaceBetween: 30,
				autoplay: 5000,
				effect: 'fade'
			});
			}, 200);
	},
	methods: {
		getBannerList(){
			const that = this;
			this.$http.get('/api/bannerdata').then(function(res){
				that.bannerList = res.data.data;
			})
		}
	},
}
</script>

<style lang="less" scoped>
@import '../../static/less/variable.less';
.img_nav{
	height:10rem;
}
.swiper-slide img {
	width: 100%;
	height: 100%;
}
.btnProductView{
	padding:0 10px;
}
.proInfoL{
	width:70%;
	float:left;
}
.proInfoL-item{
	height:1.5rem;
	line-height:1.5rem;
}
.proInfoR{
	width:30%;
	display:inline-block;
}
.price{
	height:3rem;
	line-height:3rem;
}
.cartIcon{
	background: url('../../static/img/icon/tab_activity_select.png');
	height: 2rem;
    width: 2rem;
    background-size: cover;
    margin-top: .2rem;
}
</style>
