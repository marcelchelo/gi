const express = require("express");
require('dotenv').config()
const { reset } = require("nodemon");
const app = express();


var cors = require('cors')   
app.use (cors());

const port = process.env.PORT || 5000;


const { Sequelize } = require('sequelize');

  const sequelize = new Sequelize('Running', 'root', {password : process.env.DB_PASSWORD}, {
    host: 'localhost',
    dialect: 'mysql' 
  });
  
//sequelize test


  app.get('/api', function (req, res, next) {
    try {
      let dbName = sequelize.getDatabaseName();
      console.log(dbName + "This is from the backend. DB name using sequelize");
      res.send({dbName:dbName});
    } catch (error) {
      console.log(error);
    }
  })


  //Test connection to React FrontEnd
  app.get('/plzwork', (req, res) => { 
    res.send({ message: 'We did iT!' }); 
  });

  
  app.listen(port, () => console.log(`Listening on port ${port}`)); 