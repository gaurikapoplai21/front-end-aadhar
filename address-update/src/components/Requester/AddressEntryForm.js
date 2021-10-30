import React, { Component } from "react";

class AddressEntryForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   addressedit: false,
    // };
  }

  EntryInputRow({ name, placeholder, pattern }) {
    const topic = {
      display: "inline-block",
      width: 75,
      textAlign: "left",
      fontSize: "20px",
    };

    const row = {
      paddingBottom: "20px",
    };

    const input = {
      display: "inline-block",
      border: "0px",
      borderBottom: "1px solid black",
      outline: "none",
    };
    return (
      <div style={row}>
        <span style={topic}>{name}</span> :{" "}
        <input
          style={input}
          id={name}
          placeholder={placeholder}
          pattern={pattern}
          autoComplete="off"
          required
        />
      </div>
    );
  }

  render() {
    const box = {
      width: "400px",
      padding: "20px",
    };

    return (
      <div className="card" style={box}>
        <form autoComplete="off">
          <this.EntryInputRow
            name="Name"
            placeholder="Ramesh"
            pattern="[\w\s]+"
          />
          <this.EntryInputRow
            name="Email"
            placeholder="Ramesh@gmail.com"
            pattern=""
          />
          <this.EntryInputRow name="Address" placeholder="  ..." pattern=".+" />
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => {
              this.props.addresseditcallback();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddressEntryForm;
