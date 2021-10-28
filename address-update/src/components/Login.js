import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Form from "./Form.js";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logintype: "Requester",
    };
  }
  handleCallback = (childData) => {
    this.setState({ logintype: childData });
  };

  render() {
    return (
      <div>
        <Navbar logintype={this.handleCallback} />
        <div style={{ marginTop: "30px" }}>Login as</div>
        <div style={{ marginBottom: "30px", fontSize: "40px" }}>
          {this.state.logintype}
        </div>
        <Form />
      </div>
    );
  }
}

export default Login;
