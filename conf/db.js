var mysql = require('mysql');

// 创建 mysql 连接池资源
var pool = mysql.createPool({
    host: "39.108.100.163",
    user: "root",
    password: "qwer",
    database: "thematic"
});

exports.query = function (sql, arr, callback) {
    //建立链接
    pool.getConnection(function (err, connection) {
        if (err) { throw err; return; }
        connection.query(sql, arr, function (error, results, fields) {
            //将链接返回到连接池中，准备由其他人重复使用
            connection.release();
            if (error) throw error;
            //执行回调函数，将数据返回
            callback && callback(results, fields);
        });
    });
};