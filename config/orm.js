const myConnection = require('./connection.js')

// connect to the database
const connection = myConnection.getConnection('localhost', 3306, 'root', keys.mysql.password, 'burger_db')

function Functions() {
    // method to select all burgers:
    this.selectAll = () => {

    }

    // method to insert a new burger:
    this.insertBurger = () => {

    }

    // method to update the status of an existing burger:
    this.updateBurger = () => {

    }
}



module.exports = Functions;