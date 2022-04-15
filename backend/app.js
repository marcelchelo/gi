const express = require("express");
const { reset } = require("nodemon");
const app = express();
const { Sequelize } = require('sequelize');


  const sequelize = new Sequelize('Running', 'root', 'imagine', {
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
