const myConnection = require('./connection.js')
require("dotenv").config()
// const keys = require('../keys.js')

console.log('orm online...')
// connect to the database
const connection = myConnection.getConnection('localhost', 3306, 'root', 'QWEasd!2', 'burger_db')

const ORMFunctions = {
    dbConnect: () => {
        connection.connect(function(err) {
            if (err) {
              console.error("error connecting: " + err.stack);
              return;
            }
            console.log("connected as id " + connection.threadId);
        });
    },

    // method to select all burgers:
    selectAll: (selectTable, cb) => {
        connection.query("SELECT * FROM ??", [selectTable], 
        function(err,data) {
            if (err) throw err
            cb(data) 
        })
    },

    // method to insert a new burger:
    insertSingleItem: (insertTable, colName, newInfo, cb) => {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [insertTable, colName, newInfo], 
        (err, data) => {
            if (err) throw err
            cb(data)
        })
    },

    // method to update the status of an existing burger:
    updateSingleItem: (tableName, columnName, newValue, key, keyValue, cb) => {
        queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [tableName, columnName, newValue, key, keyValue],
        (err, data) => {
            if (err) throw err
            cb(data)
        })
    }
}

module.exports = ORMFunctions;