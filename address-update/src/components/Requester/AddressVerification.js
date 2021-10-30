import React, { Component } from "react";

class AddressVerification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const box = {
      width: "500px",
      padding: "20px",
      marginTop: "20px",
    };

    return (
      <div className="card" style={box}>
        <div style={{ fontSize: 20, marginBottom: 10 }}>
          {this.props.index}. Address
        </div>
        <div className="text-secondary" style={{ marginBottom: 10 }}>
          {this.props.address}
        </div>
        <div style={{ display: "block" }}>
          <div
            className="btn btn-secondary"
            style={{ width: "200", display: "inline-block" }}
            onClick={() => {
              this.props.showeditcallback();
            }}
          >
            Edit
          </div>
          <div
            className="btn btn-secondary"
            style={{ width: "200", display: "inline-block", marginLeft: 20 }}
          >
            Geographic verification
          </div>
        </div>
      </div>
    );
  }
}

export default AddressVerification;
