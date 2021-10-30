import React, { Component } from "react";
import { GenericNavbar } from "./Navbar.js";
import AddressEntryForm from "./Requester/AddressEntryForm.js";
import StatusFeed from "./Requester/StatusFeed.js";
import Profile from "./Profile";

class RequesterDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressupdate: false,
    };
  }

  enableAddressForm = () => {
    this.setState({ addressupdate: true });
  };

  enableStatus = () => {
    this.setState({ addressupdate: false });
  };

  render() {
    return (
      <div>
        <GenericNavbar
          logintype="Requester"
          addrupdtcallback={this.enableAddressForm}
          statuscallback={this.enableStatus}
        />

        <div style={{ display: "block" }}>
          <div
            style={{
              display: "inline-block",
              marginTop: "2%",
              verticalAlign: "top",
            }}
          >
            <Profile />
          </div>

          <div
            style={{
              display: "inline-block",
              verticalAlign: "top",
              marginTop: "2%",
              marginLeft: "10%",
            }}
          >
            {this.state.addressupdate ? (
              <AddressEntryForm addresseditcallback={this.enableAddressEdit} />
            ) : (
              <StatusFeed />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RequesterDashboard;
