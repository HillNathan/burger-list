const ORM = require('../config/orm.js')

console.log('model online...')
ORM.dbConnect()

const burger = {
    getAllBurgers: function(callback) {
        // burger model function to select all burgers
        console.log('Burger model hit to return all records from table "burgers".')
        ORM.selectAll('burgers', callback)
    },

    newBurger: function(newData, callback) {
        // burger model function to add a new burger
        console.log("data received from controller:")
        console.log(newData)
        ORM.insertSingleItem('burgers', 'name', newData , callback)
        console.log(`Inserted "${newData}" into table "burgers" in column "name".`)
    },

    updateBurger: function(devouredID, callback) {
        // burger model function to update a specific burger to have devoured=true
        console.log("data received from controller:")
        console.log(devouredID)
        ORM.updateSingleItem('burgers', 'devoured', true, 'id', parseInt(devouredID),callback)
        console.log(`Changed record in table "burgers" with id="${devouredID}" so that column devoured = true.`)
    },

    removeBurger: function(burgerID, callback) {
        console.log("data received from controller:")
        console.log(burgerID)
        // new ORM call for soft-delete
        ORM.updateSingleItem('burgers', 'deleted', true, 'id', parseInt(burgerID), callback)
        console.log(`Soft-deleted record with id="${burgerID}" in table "burgers".`)

        // old ORM call to hard delete
        // ORM.deleteSingleItem('burgers', 'id', parseInt(burgerID), callback)
        // console.log(`Deleted record with id="${burgerID}" in table "burgers".`)
    }
}

module.exports = burger;