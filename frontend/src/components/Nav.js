import React from 'react'; 
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Nav.css';

function Nav() {
    return(

        // <Navbar bg="light" expand="lg">
        //         <Container>
        //             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>






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
// Nav.propTypes = {};

export default Nav;