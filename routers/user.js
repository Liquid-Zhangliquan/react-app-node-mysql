const express = require('express');
const bodyParser = require("body-parser");
const connection = require('../conf/mysqlconf');
connection.connect(function (err) {
    if (err) {
        console.log('连接失败' + err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

const router = express.Router();
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
let jsonParser = bodyParser.json();

router.post('/login', urlencodedParser, (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    console.log(req.body);
    let _data=JSON.parse(req.body.data);
    console.log(_data);
    let UserName = _data.userName;
    let PassWord = _data.passWord;
    let sql = "SELECT * FROM `user` WHERE `UserName`='" + UserName + "' AND `PassWord`='" + PassWord + "'";
    console.log(sql);
    connection.query(sql, function (err, rows, fields) {
        if (err) throw err
        res.send(rows);
    })
})

module.exports = router