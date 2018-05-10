import * as types from './mutation-types'
const matutaions = {
	add(state,n){
		state.count += n;
	},
	reduce(state){
		if(state.count > 0){
			state.count -=1;
		}else{
			state.count = 0;
		}
	}
}
 export default matutaions