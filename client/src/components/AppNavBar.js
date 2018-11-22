
// Implementing React-Strap

import React, { Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container, 
    NavbarBrand 
} from 'reactstrap';


class AppNavBar extends Component {

    // NavBar Hamburger Icon State
    state = {
        isOpen: false // Sets Hamburger Icons State To Closed(false)
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen  
        });
    };


    // NavBar 
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className='mb-5'>
                    <Container>
                        <NavbarBrand href="/">Camrone Hassell</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                <NavLink className="nk" href="https://google.com" rel="noopener noreferrer" target="_blank">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavBar;
