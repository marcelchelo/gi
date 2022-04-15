import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {
    return(
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/about' className="nav-item nav-link ">About</Link>
                    <Link to='/blog' className="nav-item nav-link">Blog</Link>
                    <Link to='/runningStats' className="nav-item nav-link">Running</Link>

                </div>
            </div>
        </nav>
    );
}

export default Nav;