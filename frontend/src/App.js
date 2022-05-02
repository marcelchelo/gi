
import mePic from './profile.jpeg'
import './App.css';

import Nav from './components/Nav';
import  Data from './components/Data';
import  About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Blog from './components/Blog';


function App() {

  

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

      {/* <Routes path="/data" element={<Data/>} />
      <Routes path="/about" element={<About/>} />
      <Routes path="/" element={App} /> */}

      <Routes>

      <Route path="/about" element={<About/>} ></Route>
      <Route path="/data" element={<Data/>} ></Route>
      <Route path="/blog" element={<Blog/>} ></Route> 
      

      </Routes>
      
        
       
        

       
       
    </header>
    </div>
    </Router>
  );
}
export default App;
