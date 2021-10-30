import React, { Component } from "react";

class StatusFeed extends Component {
  feed({ status, address }) {
    const row = {
      display: "block",
      textAlign: "left",
      marginBottom: 10,
      height: 50,
      paddingTop: 5,
    };
    return (
      <div className="card" style={row}>
        <div
          className="text-secondary"
          style={{ display: "inline-block", marginLeft: 10 }}
        >
          {address}
        </div>
        <div style={{ display: "inline-block", width: 80 }} />

        {status === 0 ? (
          <div className="text-danger" style={{ display: "inline-block" }}>
            Yet To Approve
          </div>
        ) : status === 1 ? (
          <div className="text-warning" style={{ display: "inline-block" }}>
            Consent Approved
          </div>
        ) : status === 2 ? (
          <button
            className="btn btn-secondary"
            style={{ display: "inline-block" }}
          >
            Address Processed
          </button>
        ) : status === 3 ? (
          <div className="text-success" style={{ display: "inline-block" }}>
            Completed
          </div>
        ) : undefined}
      </div>
    );
  }

  render() {
    const box = {
      margin: "auto",
      width: "400px",
      padding: "20px",
    };
    return (
      <div className="card" style={box}>
        <ul style={{ margin: 0, padding: 0 }}>
          <this.feed status={0} address={"Address1 here"} />
          <this.feed status={1} address={"Address2 here"} />
          <this.feed status={2} address={"Address3 here"} />
          <this.feed status={3} address={"Address4 here"} />
        </ul>
      </div>
    );
  }
}

export default StatusFeed;
