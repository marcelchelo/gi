const express = require("express");
require('dotenv').config()
const { reset } = require("nodemon");
const app = express();


var cors = require('cors')
const port = process.env.PORT || 5000;


const { Sequelize } = require('sequelize');

  const sequelize = new Sequelize('Running', 'root', {password : process.env.DB_PASSWORD}, {
    host: 'localhost',
    dialect: 'mysql' 
  });
  
//sequelize test

app.use (cors());
  app.get('/api', function (req, res, next) {
    try {
      let dbName = sequelize.getDatabaseName();
      console.log(dbName);
      res.send(dbName);
    } catch (error) {
      console.log(error);
    }
  })


  //Test connection to React FrontEnd
  app.get('/express_backend', (req, res) => { 
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
  });

  
  app.listen(port, () => console.log(`Listening on port ${port}`)); 