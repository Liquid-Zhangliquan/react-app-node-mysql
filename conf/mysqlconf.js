const mysql = require('mysql')
let connection = mysql.createConnection({
    host:"39.108.100.163",
    user:"root",
    password:"qwer",
    database:"thematic"
});

module.exports =connection;