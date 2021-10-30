import React, { Component } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import Toast from "./ToastCode";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toast: "",
      uid:"",
      txnid:"",
    };
  }
  input = {
    display: "inline-block",
    border: "0px",
    borderBottom: "1px solid black",
    outline: "none",
  };

  otp() {
    const box = {
      width: "100%",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center",
    };
    return (
      <form style={box}>
        <div>OTP</div>
        <div style={{ marginBottom: 10 }}>
          <input style={this.input} id="actual-otp" />
        </div>
        <div>
          <input
            className="btn btn-secondary"
            style={{ width: 200 }}
            type="submit"
            onClick={() => {
              this.submitOTP();
            }}
          />
        </div>
      </form>
    );
  }
  getOTP = () => {
    // axios POST request
    //generate txnID on the fly later
    //var ans = false;
    //  const uid = document.getElementById("Aadhar").value;
    //  console.log(uid);
    //  const options = {
    //    url: 'https://stage1.uidai.gov.in/onlineekyc/getOtp/',
    //    method: 'POST',
    //    headers: {
    //      'Content-Type': 'application/json;charset=UTF-8'
    //    },
    //    data: {
    //      "uid": uid,
    //      "txnId": "0acbaa8b-b3ae-433d-a5d2-51250ea8e970"
    //    }
    //  };
    const uid = document.getElementById("Aadhar").value;
    console.log(uid);
    const options = {
      url: "http://localhost:8080/requester/generateOtp/" + uid,
      method: "GET",
      // headers: {
        //  'Content-Type': 'application/json;charset=UTF-8',
        //  'Access-Control-Allow-Origin': '*'
      // },
      //  data: {
      //    "uid": uid,
      //    "txnId": "0acbaa8b-b3ae-433d-a5d2-51250ea8e970"
      //  }
    };

    axios(options).then(
      (response) => {
        console.log(response.data);
        // const obj = JSON.parse(response.data);  
        if (response.data.success === "Y") {
          this.setState({
            toast: "true",
            uid: response.data.uid,
            txnid: response.data.txnid
          });
        } else {
          this.setState({
            toast: "false",
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.state.toast);
  };
  submitOTP = () => {
    const otpinput = document.getElementById("actual-otp").value;
    console.log(otpinput);
    const options = {
      url: "http://localhost:8080/requester/verifyOtp/" +this.uid+"/"+this.txnid+"/"+ otpinput,
      method: "GET",
      headers: {
        //  'Content-Type': 'application/json;charset=UTF-8',
        //  'Access-Control-Allow-Origin': '*'
      },
      //  data: {
      //    "uid": uid,
      //    "txnId": "0acbaa8b-b3ae-433d-a5d2-51250ea8e970"
      //  }
    };

    axios(options).then(
      (response) => {
        // if(response.data.status === "Y" )
        // {
        //   this.setState({
        //     toast: "true"
        //   })
        // }
        // else
        // {
        //   this.setState({
        //     toast: "false"
        //   })
        // }
        console.log(response);

        if (response.data === "Authentication Successful") {
          console.log("auth complete");
        } else {
          console.log("auth NOT complete");
        }
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log(this.state.toast);
  };
  render() {
    const box = {
      margin: "auto",
      width: "400px",
      padding: "20px",
      borderRadius: "10px",
      border: "5px solid grey",
    };

    const topic = {
      display: "inline-block",
      width: 75,
      textAlign: "left",
      fontSize: "20px",
    };

    const row = {
      paddingBottom: "20px",
    };

    return (
      <div style={box}>
        <form autoComplete="off">
          <div style={row}>
            <span style={topic}>Name</span> :{" "}
            <input
              style={this.input}
              id="Name"
              placeholder="Ramesh"
              pattern="[\w\s]+"
              autoComplete="off"
              required
            />
          </div>
          <div style={row}>
            <span style={topic}>Aadhar</span> :{" "}
            <input
              id="Aadhar"
              style={this.input}
              placeholder="000000000000"
              pattern="\d{4}\d{4}\d{4}"
              autoComplete="off"
              required
            />
          </div>

          <div style={row}>
            {" "}
            {/*how not button, how 2 return statements*/}
            <input
              className="btn btn-secondary"
              style={{ width: 300 }}
              value="Generate OTP"
              onClick={() => {
                this.getOTP();
              }}
            />
          </div>
        </form>

        {this.state.toast === "true" ? (
          <Toast body="OTP sent successfully!" variant="Success" />
        ) : null}
        {this.state.toast === "false" ? (
          <Toast
            body="Please check your credentials and try again!"
            variant="Danger"
          />
        ) : null}
        <div>
          <Popup
            trigger={
              <button className="btn btn-secondary" style={{ width: 300 }}
              
              >
                Submit OTP
                
              </button>
            }
            modal
          >
            {this.otp()}

          </Popup>
        </div>
      </div>
    );
  }
}

export default Form;
