import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/home'

Vue.use(Router)

const Index = (resolve) => {
	import('@/components/product').then((module) => {
		resolve(module)
	})
}
const Cart = (resolve) => {
	import('@/components/cart').then((module) => {
		resolve(module)
	})
}
const Order = (resolve) => {
	import('@/components/order').then((module) => {
		resolve(module)
	})
}
const User = (resolve) => {
	import('@/components/user').then((module) => {
		resolve(module)
	})
}
const Detail = (resolve) => {
	import('@/components/detail/Detail').then((module) => {
		resolve(module)
	})
}
export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
	{
		path: '/order',
		component: Order
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/user',
		component: User
	},
	{
		path: '/detail',
		component: Detail
	}
  ]
})
