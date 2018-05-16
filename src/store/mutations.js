import * as types from './mutation-types'
const matutaions = {
	[types.SET_TABINDEX](state,tabindex){ //首页切换状态
		state.tabindex = tabindex;
	},
	[types.CHECK_DETAIL](state,detail){ //查看详情
		state.detail = detail
	}
}
 export default matutaions