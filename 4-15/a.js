const express = require('express')//引入接口模块
const mysql = require('mysql')//引入mysql模块
const app = express();//调用express
const port = 2007;//定义端口+++

//连接数据库
let connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"root",
	database:"vue2008"
})

//查询10条用户信息接口
app.get("/user",(req,res)=>{
	let sql = "SELECT * FROM p_users limit 1";
	connection.query(sql,(error,results,fields)=>{
		res.send(results);
	})
})


//find查找某个用户接口
app.get("/find",(req,res)=>{
	let sql = "SELECT * FROM p_users";
	connection.query(sql,(error,results,fields)=>{
		res.send(results[1]);
	})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})