import React, { Component } from "react";

class AddressVerification extends Component {
  render() {
    const box = {
      margin: "auto",
      width: "400px",
      padding: "20px",
    };

    return (
      <div className="card" style={box}>
        <form autoComplete="off">
          <div style={{ fontSize: 20, marginBottom: 10 }}>Address</div>
          <div className="text-secondary" style={{ marginBottom: 10 }}>
            Address here ...
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ display: "inline-block" }}
          >
            Edit
          </button>
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ display: "inline-block", marginLeft: 20 }}
          >
            Geographic verification
          </button>
        </form>
      </div>
    );
  }
}

export default AddressVerification;
