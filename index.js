var express = require("express")
const session = require('express-session');
var app = express()
//el puerto puede ser otro
let port = 3003
app.set("view engine", "ejs");
app.use(express.static('public'));

// app.use(express.json())
// const {urlencoded, json} =  require('express')
// app.use(urlencoded({ extended: false }));

// const { request } = require('http')

app.listen(port, function () {
  console.log("Servidor listo en puerto " + port)
  console.log("http://localhost:" + port);
});


app.use(session({
  secret: 'mi-secreto',
  resave: false,
  saveUninitialized: true,
}));
app.use(express.urlencoded({ extended: true }));
var router = require('./routes/routes');
app.use('/', router);
