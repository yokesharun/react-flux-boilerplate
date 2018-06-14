import React, { Component } from 'react';
import { 
    Navbar, 
    Nav , 
    NavItem, 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class AppNavBar extends Component {

    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React Flux BoilerPlate</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem componentClass={Link} href="/" to="/" active={window.location.pathname === '/'}>
                    React + Flux
                    </NavItem>
                    <NavItem componentClass={Link} href="/page" to="/page" active={window.location.pathname === '/page'}>
                    React + React Router
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
