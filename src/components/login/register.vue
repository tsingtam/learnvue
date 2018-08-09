<template>
  <div class="hello">
	<headers tabname="注册" isBack="true"></headers>
	<div class="register">
		<div class="item">
			<div class="name">用户名:</div>
			<input class="username" v-model="username" />
		</div>
		<div class="item">
			<div class="name">密码:</div>
			<input class="password" v-model="password" />
		</div>
		<button class="btnRegister" @click="registerUser">注册</button>
	</div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState,mapGetters, mapMutations,mapActions } from 'vuex';
import Headers from '../base/Header.vue';
import Footers from '../base/Footer.vue';
import url from '@/server.config.js';
export default {
	data () {
		return {
			username:'',
			password:''
		}
	},
	components:{
		Headers,
		Footers
	},
	computed: {
		
	},
	methods: {
		registerUser(){
			axios({
				url:url.register,
				method:'post',
				data:{
					username:this.username,
					password:this.password
				}
			}).then(response =>{
				console.log(response)
			}).then((error) => {
				console.log(error)
			})
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.register{
		margin:45px 10px;;
		padding: 0 10px;
	}
	.item{
		display:flex;
		margin-bottom:20px;
	}
	.name{
		width:40px;
		text-align:right;
	}
	.btnRegister{
		width:100px;
		height:30px;
		line-height:30px;
		text-align:center;
		margin-left:50px;
	}
</style>
