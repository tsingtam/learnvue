const mongoose = require('mongoose')
const db = "mongodb://localhost/learnvue-db"
const glob = require('glob')
const {resolve} = require('path')

mongoose.Promise = global.Promise

exports.connect = ()=>{
	mongoose.connect(db)
	
	let maxConnectNum = 0
	
	return new Promise((res,rej)=>{
		mongoose.connection.on('disconnected',()=>{
			console.log('***********数据库断开***********')
			if(maxConnectNum < 3){
				maxConnectNum++
				mongoose.connect(db)
			}else{
				rej()
				throw new Error('error')
			}
		})
		
		mongoose.connection.on('error',err =>{
			console.log('***********数据库错误***********')
			if(maxConnectNum < 3){
				maxConnectNum++
				mongoose.connect(db)
			}else{
				rej()
				throw new Error('error')
			}
		})
		
		mongoose.connection.once('open',()=>{
			console.log('MongoDB Connected successfully')
			res()
		})
	})
	
}

exports.initSchemas = () =>{
	glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
}