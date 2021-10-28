import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Form from "./Form.js";

export class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>Login as</div>
        <div style={{ marginBottom: "30px", fontSize: "40px" }}>Requester</div>
        <Form />
      </div>
    );
  }
}

export default Login;
