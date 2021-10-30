import React, { Component } from "react";

class AddressEditForm extends Component {
  constructor(props) {
    super(props);
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
      width: "500px",
      padding: "20px",
      marginTop: "20px",
    };

    return (
      <div className="card" style={box}>
        <form autoComplete="off">
          <this.EntryInputRow name="Address" placeholder="  ..." pattern=".+" />
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ display: "inline-block" }}
          >
            Submit
          </button>
          <button
            className="btn btn-secondary"
            style={{ display: "inline-block", marginLeft: 20 }}
            onClick={() => {
              this.props.hideeditcallback();
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default AddressEditForm;
