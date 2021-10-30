import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import sample from "../sample.jpg";

export class Profile extends Component {
  render() {
    const image = {
      height: "300px",
    };
    return (
      <Card style={{ width: "18rem" }}>
        {<Card.Img variant="top" style={image} src={sample} />}
        <Card.Body>
          <Card.Title>{/*this.props.name*/}Angelina Jolie</Card.Title>
          <Card.Text>
            Aadhar Card Number: {/*this.props.uid*/} 999902218749
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Profile;
