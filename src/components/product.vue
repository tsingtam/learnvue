<template>
	<div class="product">
		<headers tabname="铝大牛"></headers>
		<div class="menu-bar">
			<span :class="{active:1 == $store.state.tabindex}" data-type="1" @click="selectBar('1')">精细氧化铝</span>
			<span :class="{active:2 == $store.state.tabindex}" data-type="2" @click="selectBar('2')">企业服务</span>
		</div>
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
		<div class="aloContent" v-if="$store.state.tabindex == 1" v-cloak>
			<div class="select">
				<div class="select-item area">地区</div>
				<div class="select-item use">用途</div>
				<div class="select-item type">种类</div>
				<div class="select-item alContent">Al2O3含量</div>
			</div>
			<div class="select-content">
				<ul>
					<li>华东</li>
					<li>华南</li>
					<li>东北</li>
					<li>西南</li>
				</ul>
			</div>
			<ul class="list-product">
				<li class="btnProductView" v-for="indexListItem in indexList">
					<div class="content">
						<div @click="onDetail(indexListItem,indexListItem.id)">
						<div class="proInfoL">
							<ul>
								<li class="proInfoL-item protitle">{{indexListItem.name}}</li>
								<li class="proInfoL-item brand">牌号：{{indexListItem.brand}}</li>
								<li class="proInfoL-item con">含量：{{indexListItem.content}}</li>
								<li class="proInfoL-item rank">产品等级：{{indexListItem.grade}}</li>
							</ul>
						</div>
						<div class="proInfoR">
							<div class="price">
								<span class="red">{{indexListItem.price}}</span>元/吨
							</div>
						</div>
						</div>
						<div class="cartIcon"></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="companyContent" v-if="$store.state.tabindex == 2" v-cloak>
			<div class="industryInfo">
				<div class="title">行业资讯</div>
				<ul>
					<li>北京铝大牛公司的相关信息等等</li>
					<li>北京铝大牛公司的相关信息等等</li>
					<li>北京铝大牛公司的相关信息等等</li>
					<li>北京铝大牛公司的相关信息等等</li>
					<li>北京铝大牛公司的相关信息等等</li>
				</ul>
			</div>
			<div class="productDes">
				<div class="title">产品介绍</div>
				<ul>
					<li v-for="product in productDesc">
						<figure>
							<img :src="product.image" alt="产品图片">
							<p>{{product.name}}</p>
						</figure>
					</li>
				</ul>
			</div>
			<div class="partner">
				<div class="title">合作伙伴</div>
				<a>北京铝大牛公司</a>
				<a>北京铝大牛公司</a>
				<a>北京铝大牛公司</a>
				<a>北京铝大牛公司</a>
				<a>北京铝大牛公司</a>
			</div>
		</div>
		<footers :urlRouter="$route.path" ref="footer"></footers>
	</div>
</template>

<script>
import Headers from './base/Header.vue';
import Footers from './base/Footer.vue';
import '../../static/css/swiper.min.css';
import Swiper from '../../static/js/swiper.min';
import { mapGetters, mapMutations } from 'vuex';
export default {
	data () {
		return {
			products:[],
			bannerList:[],
			productDesc:[],
			indexList:[]
		}
	},
	components:{
		Headers,
		Footers
	},
	computed: {
		...mapGetters([
			'this.$store.state.tabindex'
		])
	},
	mounted(){
		if(this.$store.state.tabindex == undefined) {
				this.setTabindex(1);
		}else{
			this.getProductDes();
		}
		this.getBannerList();
		this.getIndexList();
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
		},
		getIndexList(){
			const that = this;
			this.$http.get('/api/indexData').then(function(res){
				that.indexList = res.data.data;
			})
		},
		getProductDes(){
			const that = this;
			this.$http.get('/api/productdata').then(function(res){
				console.log(res.data.data);
				that.productDesc = res.data.data;
			})
		},
		onDetail(item,id){
			this.$router.push({
				path:'/detail',
				query:{
					id:id
				}
			});
			this.checkDetail(item);
		},
		selectBar(index){
			const that = this;
			this.setTabindex(index);
		},
		...mapMutations({
			setTabindex: 'SET_TABINDEX',
			checkDetail: 'CHECK_DETAIL'
		})
	},
}
</script>

<style lang="less" scoped>
@import '../../static/less/variable.less';
.menu-bar{
	margin-top:2rem;
}
.menu-bar .active{
	background-color:#48a3ec;
	color:#fff;
}
.select{
	height:1.5rem;
	line-height:1.5rem;
	padding:0 10px;
	border-bottom: .1rem solid #f0f0f0;
}
.select-item{
	line-height:1.5rem;
	height:1.5rem;
	width:24%;
	text-align:center;
	display:inline-block;
}
.select-content{
	width:100%;
	position:absolute;
	z-index:99;
	display:none;
}
.select-content li{
	line-height:1.5rem;
	height:1.5rem;
	padding-left:2.5rem;
	background-color:#f0f0f0;
	border-bottom:.1rem solid #e0d8d8;
}
.menu-bar span{
	height:1.5rem;
	line-height:1.5rem;
	width:49.5%;
	display:inline-block;
	text-align:center;
}
.img_nav{
	max-height:10rem;
}
.swiper-slide img {
	width: 100%;
	height: 100%;
}
.btnProductView{
	padding:0 10px;
	border-bottom: .1rem solid #f0f0f0;
	.content{
		height:6.5rem;
	}
}
.btnProductView:last-child{
	border-bottom:0rem;
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
.aloContent{
	margin-bottom:3rem;
}
.cartIcon{
	background: url('../../static/img/icon/tab_activity_select.png');
	height: 2rem;
    width: 2rem;
    background-size: cover;
    margin-top: .2rem;
	float: right;
    margin-right: 3rem;
}
.companyContent{
	padding:0 10px;
	margin-bottom:3rem;
}
.companyContent .title{
	font-size:.8rem;
	color:#333;
	text-decoration: underline;
	margin-bottom:.5rem;
}
.industryInfo,.productDes{
	margin-bottom:1rem;
}
.industryInfo li{
	width:100%;
	line-height:1.5rem;
	height:1.5rem;
}
.productDes li{
	width:49%;
	display:inline-block;
}
.productDes img{
	width:100%;
	height:100%;
}
.productDes figure p{
	text-align:center;
}
</style>
