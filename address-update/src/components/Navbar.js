import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown,Container }  from "react-bootstrap"

export class NavBar extends Component 
{
        constructor(props) {
            super(props);
            this.state = {
                logintype: "Landlord"
            };
        }
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Address-Update</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            
                            <Nav>
                
                                <Nav.Link  style={{"margin-left":"60vw"}} onClick={this.props.handlecallback}>Login as {this.state.logintype}</Nav.Link>
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
