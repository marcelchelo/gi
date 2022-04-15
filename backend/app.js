const express = require("express");
const app = express();
const { Sequelize } = require('sequelize');

app.get('/', function (req, res) {
    res.send('Hello 123')
  })



app.listen(5000);
