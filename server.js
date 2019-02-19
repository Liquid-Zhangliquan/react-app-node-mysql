const express = require('express')
const app = express()

//路由中间件
let userRouter = require('./routers/user.js')
let userdbRouter = require('./routers/user_db.js')

app.use('/user', userRouter);
app.use('/userdb', userdbRouter);

const port =8084;
//开启监听
app.listen(port, () => console.log('Example app listening on port'+port+' !'))