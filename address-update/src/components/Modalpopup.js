import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Ekycmodal from "./Ekycmodal";

export class Modalpopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ekyc: false,
    };
  }

  handleoptions = (val) => {
    if (this.props.option === "Decline") {
      if (val) {
      } else {
        this.setState({ showModal: false });
      }
    } else {
      if (val) {
        console.log("do ekyc");
        this.setState({ ekyc: true });
      }
    }
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
              Confirmation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to {this.props.option} ?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">No</Button>
            <Button
              variant="primary"
              onClick={() => {
                this.handleoptions(true);
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        <Ekycmodal show={this.state.ekyc} />
      </div>
    );
  }
}

export default Modalpopup;
