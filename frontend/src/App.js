
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
      
<<<<<<< HEAD
      <img className='App-picture'src={mePic} alt="myFace"  ></img>
=======
        <img className='App-picture'
           src={mePic} alt="myFace"  >

        </img>
>>>>>>> parent of 4fb4e13 (Axios connection from frontend to backend + Sequelize)
        
        <p>
         -Trying to be better than yesterday
        </p>

        
       
        
        

       
       
    </header>
    </div>
    </Router>
  );
}

export default App;
