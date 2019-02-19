const mysql = require('mysql')
let connection = mysql.createConnection({
    host:"localhost",
    user:"****",
    password:"****",
    database:"****"
});

module.exports =connection;