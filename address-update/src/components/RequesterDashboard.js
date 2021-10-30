import React, { Component } from "react";
import { GenericNavbar } from "./Navbar.js";
import AddressEntryForm from "./Requester/AddressEntryForm.js";
import StatusFeed from "./Requester/StatusFeed.js";
import AddressEditForm from "./Requester/AddressEditForm.js";
import AddressVerification from "./Requester/AddressVerification.js";

export class RequesterDashboard extends Component {
  render() {
    return (
      <div>
        <GenericNavbar logintype="Requester" />
        <h1>Hello Requester!</h1>
        <AddressEntryForm />
        <StatusFeed />
        <AddressEditForm />
        <AddressVerification />
      </div>
    );
  }
}

export default RequesterDashboard;
