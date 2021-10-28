import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export class Form extends Component {
  input = {
    display: "inline-block",
    border: "0px",
    borderBottom: "1px solid black",
    outline: "none",
  };

  otp() {
    const box = {
      width: "100%",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center",
    };
    return (
      <form style={box}>
        <div>OTP</div>
        <div style={{ marginBottom: 10 }}>
          <input style={this.input} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    );
  }

  render() {
    const box = {
      margin: "auto",
      width: "400px",
      padding: "20px",
      borderRadius: "10px",
      border: "5px solid grey",
    };

    const submit = {
      width: 250,
      padding: 10,
      borderRadius: 10,
    };

    const topic = {
      display: "inline-block",
      width: 75,
      textAlign: "left",
      fontSize: "20px",
    };

    const row = {
      paddingBottom: "20px",
    };

    return (
      <div style={box}>
        <form autoComplete="off">
          <div style={row}>
            <span style={topic}>Name</span> :{" "}
            <input
              style={this.input}
              placeholder="Ramesh"
              pattern="[\w\s]+"
              autoComplete="off"
              required
            />
          </div>
          <div style={row}>
            <span style={topic}>Aadhar</span> :{" "}
            <input
              style={this.input}
              placeholder="0000 0000 0000"
              pattern="\d{4}\s\d{4}\s\d{4}"
              autoComplete="off"
              required
            />
          </div>
          <div style={row}>
            <input type="submit" style={submit} value="Generate OTP" />
          </div>
        </form>
        <div>
          <Popup trigger={<button style={submit}>Submit OTP</button>} modal>
            {this.otp()}
          </Popup>
        </div>
      </div>
    );
  }
}

export default Form;
