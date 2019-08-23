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

    // method to select all items in a table:
    selectAll: (selectTable, cb) => {
        connection.query("SELECT * FROM ??", [selectTable], 
        function(err,data) {
            if (err) throw err
            cb(data) 
        })
    },

    // method to insert a new item into a table:
    insertSingleItem: (insertTable, colName, newInfo, cb) => {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [insertTable, colName, newInfo], 
        (err, data) => {
            if (err) throw err
            cb(data)
        })
    },

    // method to update the status of an existing item:
    updateSingleItem: (tableName, columnName, newValue, key, keyValue, cb) => {
        queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [tableName, columnName, newValue, key, keyValue],
        (err, data) => {
            if (err) throw err
            cb(data)
        })
    },

    // method to hard-delete a specific item in the table
    deleteSingleItem: (tableName, key, keyValue, cb) => {
        queryString = "DELETE FROM ?? WHERE ?? = ?"
        connection.query(queryString, [tableName, key, keyValue],
        (err,data) => {
            if (err) throw err
            cb(data)
        })
    }
    // this method is no longer used by the database, however I am leaving it here so that I 
    //   have it saved here for future reference. 
}

module.exports = ORMFunctions;