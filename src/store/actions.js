/*export const actions = {
	addAction(context){
		context.commit('add',10)
	},
	reduceAction({commit}){
		commit('reduce')
	}
}*/
export const addAction = context => context.commit('add',10)
export const reduceAction = ({commit}) => commit('reduce') 
