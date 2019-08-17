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
    }

    

}

module.exports = burger;