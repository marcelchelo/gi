
import mePic from './profile.jpeg'
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
// import Data from './components/Data';
import axios from 'axios';

function App() {

  const helloFromApi = 
   axios
      .get('/api')
      .then(res => res.data);

  let data = helloFromApi.then();

  return (
    <Router>
      
    <div className="App">
    <Nav />
      <header className="App-header">
      
        <img className='App-picture'
           src={mePic} alt="myFace"  >

        </img>
        
        <p>
         -Trying to be better than yesterday
        </p>

        
       
        
        

       
       
      </header>
    </div>
    </Router>
  );
}

export default App;
