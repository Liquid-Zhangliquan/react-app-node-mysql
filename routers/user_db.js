const express = require('express');
const bodyParser = require("body-parser");
const db = require('../conf/db');

const router = express.Router();
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
let jsonParser = bodyParser.json();

router.get('/getall', urlencodedParser, (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    let sql = "SELECT * FROM `user` ";
    db.query(sql, function (err, rows, fields) {
        if (err) throw err
        res.send(rows);
    })
})

router.post('/register', urlencodedParser, (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    let _data=JSON.parse(req.body.data);
    console.log(_data);
    let sql = "INSERT INTO `user`(UserName,PassWord,Email) VALUES('"+_data.username+"','"+_data.password+"','"+_data.email+"')";
    console.log(sql);
    db.query(sql, function (err, rows, fields) {
        if (err) throw err
        res.send(rows);
    })
})

router.post('/login', urlencodedParser, (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //解决跨域问题
    console.log(req.body);
    let _data=JSON.parse(req.body.data);
    console.log(_data);
    let UserName = _data.userName;
    let PassWord = _data.passWord;
    let sql = "SELECT * FROM `user` WHERE `UserName`='" + UserName + "' AND `PassWord`='" + PassWord + "'";
    console.log(sql);
    db.query(sql, function (err, rows, fields) {
        if (err) throw err
        res.send(rows);
    })
})





module.exports = router