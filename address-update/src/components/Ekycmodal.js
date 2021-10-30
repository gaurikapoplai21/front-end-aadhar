import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import tick from "./tick.png";

export class Ekycmodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDisplay: false,
    };
  }

  handleEkyc = () => {
    //axios request to handle ekyc request here
    let response = true;
    if (response) {
      //display
      this.setState({ imageDisplay: true });
    }
    /*else*/
  };
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          //onHide={false}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              E-KYC Verification
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Get your Ekyc done!</p>
            {this.state.imageDisplay ? <img src={tick} /> : null}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                this.handleEkyc();
              }}
            >
              Click here
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Ekycmodal;
