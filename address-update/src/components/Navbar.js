import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

class LoginNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logintype: "Landlord",
    };
  }

  loginchange = () => {
    if (this.state.logintype === "Landlord") {
      this.setState({ logintype: "Requester" });
    } else {
      this.setState({ logintype: "Landlord" });
    }
    this.props.logintype(this.state.logintype);
  };

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Address-Update</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link
                  style={{ "margin-left": "60vw" }}
                  onClick={this.loginchange}
                >
                  Login as {this.state.logintype}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export { LoginNavbar };
