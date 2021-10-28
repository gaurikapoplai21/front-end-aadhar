import React, { Component } from "react";
import Navbar from "./Navbar.js";
import Form from "./Form.js";

export class Login extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            logintype: "Requester"
        };
        //this.handleCallback = this.handleCallback.bind(this)

    }
    handleCallback = (childData) => {
        //console.log("here")
        console.log(childData)
        this.setState({ logintype: childData })
    }

  render() {
    return (
      <div>
        <Navbar logintype={this.handleCallback}/>
        <div style={{"margin-top":"30px"}}>Login as</div>
        <div style={{ marginBottom: "30px", fontSize: "40px" }}>{this.state.logintype}</div>        
        <Form />
      </div>
    );
  }
}

export default Login;
