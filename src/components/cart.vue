<template>
  <div class="page">
	<headers tabname="购物车"></headers>
    
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
		...mapState(["count"]),
		count(){
			return this.$store.getters.count;
		}
	},
	methods: {
		...mapMutations([
		
			]),
			
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
