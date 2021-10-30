import React, { Component } from "react";
import { GenericNavbar } from "./Navbar.js";
import AddressEntryForm from "./Requester/AddressEntryForm.js";
import StatusFeed from "./Requester/StatusFeed.js";

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
        <div style={{ height: 50 }}></div>
        {this.state.addressupdate ? (
          <AddressEntryForm addresseditcallback={this.enableAddressEdit} />
        ) : (
          <StatusFeed />
        )}
      </div>
    );
  }
}

export default RequesterDashboard;
