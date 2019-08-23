const mysql = require('mysql')

console.log('connection connected...')

exports.getConnection = (host, port, user, password, database) => {
    if (process.env.JAWSDB_URL) {
        return mysql.createConnection(process.env.JAWSDB_URL)
    }
    else {
        return mysql.createConnection({ host, port, user, password, database })
    }
};