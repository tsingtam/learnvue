import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/home'

Vue.use(Router)

const Index = (resolve) => {
	import('@/components/product/product').then((module) => {
		resolve(module)
	})
}
const Cart = (resolve) => {
	import('@/components/cart/cart').then((module) => {
		resolve(module)
	})
}
const Order = (resolve) => {
	import('@/components/order/order').then((module) => {
		resolve(module)
	})
}
const User = (resolve) => {
	import('@/components/user/user').then((module) => {
		resolve(module)
	})
}
const Detail = (resolve) => {
	import('@/components/product/Detail').then((module) => {
		resolve(module)
	})
}
const Login = (resolve) => {
	import('@/components/login/login').then((module) => {
		resolve(module)
	})
}
const Register = (resolve) => {
	import('@/components/login/register').then((module) => {
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
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/register',
		component: Register
	}
  ]
})
