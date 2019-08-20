const ORM = require('../config/orm.js')

console.log('model online...')
ORM.dbConnect()

const burger = {
    getAllBurgers: function(callback) {
        ORM.selectAll('burgers', callback)
    },

    newBurger: function(newData, callback) {
        console.log("data received from controller:")
        console.log(newData)
        ORM.insertSingleItem('burgers', 'name', newData , callback)
    },

    updateBurger: function(devouredID, callback) {
        console.log("data received from controller:")
        console.log(devouredID)
        ORM.updateSingleItem('burgers', 'devoured', true, 'id', parseInt(devouredID),callback)
    },

    removeBurger: function(burgerID, callback) {
        console.log("data received from controller:")
        console.log(burgerID)
        ORM.deleteSingleItem('burgers', 'id', parseInt(burgerID), callback)
    }
}

module.exports = burger;