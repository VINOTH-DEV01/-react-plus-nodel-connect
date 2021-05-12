const express = require("express");
const app = express();

// const morgan = require('morgan');


//  Body parser  req getting  // 
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static("public"));
app.set("view engine", "ejs");

const homeRoute = require('./home');

app.use('/', homeRoute);



module.exports = app;

