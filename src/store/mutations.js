import * as types from './mutation-types'
const cartList = []
const matutaions = {
	[types.SET_TABINDEX](state,tabindex){ //首页切换状态
		state.tabindex = tabindex;
	},
	[types.CHECK_DETAIL](state,detail){ //查看详情
		state.detail = detail;
	},
	[types.SET_CART](state,cart){ //购物车
		cartList.push(cart)
		state.cart = cartList;
	}
}
 export default matutaions