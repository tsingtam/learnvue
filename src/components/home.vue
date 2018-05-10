<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<hr/>
	<h3>{{$store.state.count}}</h3>
	<div>
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
</div>
  </div>
</template>

<script>
import { mapState,mapGetters, mapMutations,mapActions } from 'vuex'
export default {
	data () {
		return {
		  msg: 'Hello Vuex'
		}
	},
	computed: {
		...mapState(["count"]),
		count(){
			return this.$store.getters.count;
		}
	},
	methods: {
		...mapMutations([
				'add','reduce'
			]),
		...mapActions(['addAction','reduceAction'])
			
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
