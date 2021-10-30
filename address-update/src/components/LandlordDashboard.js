import React, { Component } from "react";
import { GenericNavbar } from "./Navbar.js";

export class LandlordDashboard extends Component {
  render() {
    return (
      <div>
        <GenericNavbar logintype="Landlord" />
        <h1>Hello Landlord!</h1>
      </div>
    );
  }
}

export default LandlordDashboard;
