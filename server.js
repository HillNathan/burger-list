// SET EXPRESS ENVIRONMENT
const express = require('express')
const app = express()
var PORT = process.env.PORT || 7999;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVE UP STATIC FILES
app.use(express.static("public"));

//  SET UP HANDLEBARS
const expHandlebars = require('express-handlebars')
app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// SET UP THE ROUTER
const router = require('./controllers/burger_controller.js')
app.use(router);

// START THE SERVER
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });