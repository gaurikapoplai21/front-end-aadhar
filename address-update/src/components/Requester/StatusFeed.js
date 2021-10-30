import React, { Component } from "react";
import AddressVerification from "./AddressVerification.js";
import AddressEditForm from "./AddressEditForm.js";

class StatusFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Address index
      addressshow: -1,
      // Addresses and Status
      addresses: [
        ["Address 1", 0],
        ["Address 2", 1],
        ["Address 3", 3],
        ["Address 4", 2],
        ["Address 5", 1],
        ["Address 6", 2],
        ["Address 7", 0],
        ["Address 8", 3],
      ],
      edit: false,
    };
  }

  resetAddressShow = () => {
    this.setState({ addressshow: -1 });
  };

  enableEdit = () => {
    this.setState({ edit: true });
  };

  disableEdit = () => {
    this.setState({ edit: false });
  };

  feed = ({ status, index, address }) => {
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
          <div
            className="btn btn-secondary"
            onClick={() => {
              this.state.addressshow != index
                ? this.setState({ addressshow: index })
                : this.resetAddressShow();
            }}
            style={{ display: "inline-block" }}
          >
            Address Processed
          </div>
        ) : status === 3 ? (
          <div className="text-success" style={{ display: "inline-block" }}>
            Completed
          </div>
        ) : undefined}
      </div>
    );
  };

  getAddressComponent = () => {
    var lists = [];
    for (var i = 0; i < this.state.addresses.length; i++) {
      lists.push(
        <this.feed
          status={this.state.addresses[i][1]}
          index={i + 1}
          address={this.state.addresses[i][0]}
        />
      );
    }
    return lists;
  };

  render() {
    const box = {
      margin: "auto",
      width: "500px",
      padding: "10px",
      overflow: "auto",
    };
    return (
      <div>
        <div className="card" style={box}>
          <ul
            style={{
              maxHeight: 600,
              height: "auto",
              margin: 0,
              padding: 0,
            }}
          >
            {this.getAddressComponent()}
          </ul>
        </div>
        {this.state.addressshow !== -1 ? (
          this.state.edit ? (
            <AddressEditForm hideeditcallback={this.disableEdit} />
          ) : (
            <AddressVerification
              index={this.state.addressshow}
              address={this.state.addresses[this.state.addressshow - 1][0]}
              showeditcallback={this.enableEdit}
            />
          )
        ) : undefined}
      </div>
    );
  }
}

export default StatusFeed;
