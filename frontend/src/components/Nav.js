import React from 'react'; 
import {NavLink} from 'react-router-dom';
import './Nav.css';

function Nav() {
    return(
        <nav>
            <h1>Marcelo-Villalba
            </h1>
            <ul className='navLinks'>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                     <NavLink to="/data">Data</NavLink>
                </li>
                <li>
                     <NavLink to="/blog">Blog</NavLink>      
                </li>
                <li>
                     <NavLink to="/projects">Projects</NavLink>
                    
                </li>
    
            </ul>
        </nav>
    );
}
Nav.propTypes = {};

export default Nav;