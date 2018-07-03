<template>
	<div class="product">
		<headers tabname="铝大牛"></headers>
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
			<div class="page_row">
				<div class="nav">
					<div class="nav_item page_row on active">
						<div class="content">品种</div>
						<div class="ico_arrow"></div>
					</div>
				</div>
				<div class="nav">
					<div class="nav_item page_row on active">
						<div class="content">用途</div>
						<div class="ico_arrow"></div>
					</div>
				</div>
			</div>
			<div class='nav_centent_arr'>  
				<div class="nav_info">				
					<div class="allLi" data-name="全部">全部</div>  
					<div class='nav_centent'>
						<div class="typeName">1111</div>
						<div class="cont">  
								<span class="cont-item">2222</span>
						</div>
					</div> 
				</div>
			</div>
			<ul class="list-product">
				<li class="btnProductView" v-for="indexListItem in indexList">
					<div class="content">
						<div @click="onDetail(indexListItem,indexListItem.id)">
							<div class="proInfoL">
								<ul>
									<li class="proInfoL-item protitle">{{indexListItem.name}}</li>
									<li class="proInfoL-item brand">{{indexListItem.brand}}</li>
									<li class="proInfoL-item con">{{indexListItem.content}}</li>				
								</ul>
							</div>
							<div class="proInfoR">
								<div class="price">
									<span class="red">￥{{indexListItem.price}}</span>
								</div>
							</div>
						</div>
						<div class="cartIcon"></div>
					</div>
				</li>
			</ul>
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
.page_row {  
  width: 100%;  
  display: flex;  
  flex-direction: row;  
  align-items: center;
}
.nav {  
  height: 40px;  
  line-height: 40px;  
  width: 50%;  
  text-align: center;
  background-color: #fff;
  margin-bottom: 5px;
}
.nav_item {  
  border-bottom: 1px solid #ddd;
  justify-content:center;
} 
.nav .content{
  font-size:14px;
}
.ico_arrow{display: inline-block;transform: rotate(0deg);margin-left:6px;}
.ico_arrow:before{content:" ";display:inline-block;height:6px;width:6px;border-width:0 2px 2px 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-7px;}
.actived .ico_arrow:before{  
  border-width:2px 0 0 2px;
  margin-top:-2px;
  border-color:#ff6e00;
}
.nav_centent_arr {  
  position: absolute;
  display:none;
  z-index: 99;
  width: 100%;
  background: #fff;  
animation:mymoves 0.5s;  
}  
@keyframes mymove  
{  
from {height:0px;}  
to {height:500rpx;}  
}  
.nav_centents{  
  padding: 10px 8px 8px 10px;  
  font-size: 13px;  
  border-bottom: 1px solid #f2f2f2;  
}
.nav_centent:nth-child(even){
	background-color:#fff;
} 
.nav_centent .cont,.allLi{
	padding: 10px 8px 8px 10px;  
	font-size: 14px;  
	border-bottom: 1px solid #f2f2f2; 
} 
.cont .cont-item{
	margin-right:14px;
}
.typeName{
	padding: 10px 8px 8px 10px;  
	font-size: 14px;  
	border-bottom: 1px solid #f2f2f2;
	background-color:#eee;
	color:#999;
} 
.btnProductView:last-child{
	border-bottom:0rem;
}
.proInfoL{
	width:65%;
	float:left;
	padding-left:10px;
}
.proInfoL-item{
	height:1.5rem;
	line-height:1.5rem;
	font-size:14px;
}
.proInfoL-item.con{
	color:#999;
	font-size:13px;
}
.proInfoR{
	width:30%;
	display:inline-block;
	text-align:center;
}
.red{
	color:#ff6c00;
	font-size:15px;
}
.price{
	height:3rem;
	line-height:3rem;
}
.aloContent{
	margin-bottom:3rem;
}
.cartIcon{
	background: url('../../static/img/icon/buy.png');
	height: 2rem;
    width: 2rem;
    background-size: cover;
    margin-top: .2rem;
	float: right;
    margin-right: 2rem;
}

</style>
