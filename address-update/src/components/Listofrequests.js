import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "./Modalpopup";

export class Listofrequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      option: "",
    };
  }

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item variant="warning">
            Gaurika Poplai{" "}
            <Button
              variant="danger"
              style={{ float: "right" }}
              onClick={() => {
                this.setState({ showModal: true, option: "Decline" });
              }}
            >
              Decline
            </Button>
            <Button
              variant="success"
              style={{ float: "right" }}
              onClick={() => {
                this.setState({ showModal: true, option: "Accept" });
              }}
            >
              Accept
            </Button>
          </ListGroup.Item>
          <ListGroup.Item variant="warning">
            Prithwish Nag{" "}
            <Button variant="danger" style={{ float: "right" }}  onClick={() => {
                this.setState({ showModal: true, option: "Decline" });
              }}>
              Decline
            </Button>
            <Button variant="success" style={{ float: "right" }}  onClick={() => {
                this.setState({ showModal: true, option: "Accept" });
              }}>
              Accept
            </Button>
          </ListGroup.Item>
          <ListGroup.Item variant="warning">
            Shubham Gupta{" "}
            <Button variant="danger" style={{ float: "right" }}  onClick={() => {
                this.setState({ showModal: true, option: "Decline" });
              }}>
              Decline
            </Button>
            <Button variant="success" style={{ float: "right" }}  onClick={() => {
                this.setState({ showModal: true, option: "Accept" });
              }}>
              Accept
            </Button>
          </ListGroup.Item>
          <ListGroup.Item variant="warning">
            Rahul KR{" "}
            <Button variant="danger" style={{ float: "right" }}  onClick={() => {
                this.setState({ showModal: true, option: "Decline" });
              }}>
              Decline
            </Button>
            <Button variant="success" style={{ float: "right" }}  onClick={() => {
                this.setState({ showModal: true, option: "Accept" });
              }}>
              Accept
            </Button>
          </ListGroup.Item>
          <ListGroup.Item variant="warning">
            Rikesh{" "}
            <Button variant="danger" style={{ float: "right" }} onClick={() => {
                this.setState({ showModal: true, option: "Decline" });
              }}>
              Decline
            </Button>
            <Button variant="success" style={{ float: "right" }}  onClick={() => {
                this.setState({ showModal: true, option: "Accept" });
              }}>
              Accept
            </Button>
          </ListGroup.Item>
        </ListGroup>
        <Modal show={this.state.showModal} option={this.state.option} />
      </div>
    );
  }
}

export default Listofrequests;
