import Nav from './Nav'
import React from 'react'; 
import axios from "axios";


function Data() {
    
    const fetchData = () => {
        return axios.get("http://localhost:5000/api")
              .then((response) => console.log(response.data));}


    return(
       
        <div>
             <Nav/>
            {fetch('/api')}
        </div>
    )
}

export default Data;

