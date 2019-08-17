const mysql = require('mysql')

console.log('connection connected...')

exports.getConnection = (host, port, user, password, database) => {
    return mysql.createConnection({
        host, port, user, password, database
    })
};