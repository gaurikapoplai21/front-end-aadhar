import React, { Component } from "react";

export class Form extends Component {
  render() {
    const box = {
      margin: "auto",
      width: "300px",
      padding: "20px",
      borderRadius: "10px",
      border: "5px solid grey",
    };

    const input = {
      display: "inline-block",
      border: "0px",
      borderBottom: "1px solid black",
      outline: "none",
    };

    const submit = {
      width: 250,
      padding: 10,
      borderRadius: 10,
    };

    const topic = {
      display: "inline-block",
      width: 75,
      //   backgroundColor: "red",
      textAlign: "left",
      fontSize: "20px",
    };

    const row = {
      paddingBottom: "20px",
    };

    return (
      <form style={box} autoComplete="off">
        <div style={row}>
          <span style={topic}>Name</span> :{" "}
          <input
            style={input}
            placeholder="Ramesh"
            pattern="[\w\s]+"
            autoComplete="off"
            required
          />
        </div>
        <div style={row}>
          <span style={topic}>Aadhar</span> :{" "}
          <input
            style={input}
            placeholder="0000 0000 0000"
            pattern="\d{4}\s\d{4}\s\d{4}"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <input type="submit" style={submit} value="Request for OTP" />
        </div>
      </form>
    );
  }
}

export default Form;
