
import mePic from './profile.jpeg'
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import About from './components/About'

 import Axios from 'axios';

function App() {

  Axios({
    method: "GET",
    url: "http://localhost:5000/api",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.dbName + " this from frontend");
  });


  return (
    <Router>
      
    <div className="App">
    <Nav />
      <header className="App-header">
      
      <img className='App-picture'src={mePic} alt="myFace"  ></img>
        
        
        <About/>

        
       
        
        

       
       
    </header>
    </div>
    </Router>
  );
}

export default App;
