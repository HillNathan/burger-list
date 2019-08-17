// SET EXPRESS ENVIRONMENT FROM SERVER.JS
const express = require('express')
const router = express.Router()
console.log('router imported...')

// IMPORT THE BURGER CONTROL MODULE DO ACCESS THE DATABASE CALLS
const burger = require('../models/burger.js')

// router for the app goes here

// get route for all burgers
router.get("/", function(req, res) {
    console.log('Get Route Hit...')
    burger.getAllBurgers(response => {
        let burgerObj = { burgers: response }
        res.render("index", burgerObj);
        // res.json(burgerObj)
    })
});

//post route to update a burger
router.post("/", function(req, res) {
    burger.newBurger(req.body.name, response => {
        console.log(response.affectedRows + " rows added to database")
    })
    res.redirect('/')
});

// post route to add a new burger
router.post("/add", function(req, res) {
    burger.updateBurger(req.body.id, response => {
        console.log(response.affectedRows + " rows updated in the database")
    })
    res.redirect('/')
});


module.exports = router;
