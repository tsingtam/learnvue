const BASEURL = "http://localhost:8080/api/product/"
const LOCALURL = "http://localhost:3000/"
const URL = {
	getProductInfo:BASEURL + 'get-products',
	register:LOCALURL + 'user/register'
}

module.exports = URL