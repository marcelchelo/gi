//import logo from './logo.svg';
import mePic from './profile.jpeg'
import './App.css';
import Nav from './components/Nav'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>

    
    <div className="App">
      <header className="App-header">
        <Nav />
        

     

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
