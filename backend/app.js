const express = require("express");
require('dotenv').config()
const { reset } = require("nodemon");
const app = express();
const { Sequelize } = require('sequelize');


  const sequelize = new Sequelize('Running', 'root', {password : process.env.DB_PASSWORD}, {
    host: 'localhost',
    dialect: 'mysql' 
  });
  

  app.get('/', function (req, res) {
    try {
      let dbName = sequelize.getDatabaseName();
      console.log(dbName);
      res.send(dbName);
    } catch (error) {
      console.log(error);
    }
  })



  // function  tryDB (){
  //   try {
  //     await sequelize.authenticate();
  //     console.log('Connection has been established successfully.');
  //   } catch (error) {
  //     console.error('Unable to connect to the database:', error);
  //   }

  // }
  

app.listen(5000);
