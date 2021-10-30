import React, { Component } from "react";
import axios from "axios";
import Toast from "../ToastCode";
import Popup from "reactjs-popup";
class AddressEntryForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   toast: "",
    // };
    this.state = {
      toast: "",
      // addressedit: false,
    };
  }

  EntryInputRow({ name, placeholder, pattern }) {
    const topic = {
      display: "inline-block",
      width: 75,
      textAlign: "left",
      fontSize: "20px",
    };

    const row = {
      paddingBottom: "20px",
    };

    const input = {
      display: "inline-block",
      border: "0px",
      borderBottom: "1px solid black",
      outline: "none",
    };
    return (
      <div style={row}>
        <span style={topic}>{name}</span> :{" "}
        <input
          style={input}
          id={name}
          placeholder={placeholder}
          pattern={pattern}
          autoComplete="off"
          required
        />
      </div>
    );
  }

  render() {
    const box = {
      width: "400px",
      padding: "20px",
    };

    return (
      <div className="card" style={box}>
        <form autoComplete="off">
          <this.EntryInputRow
            name="Name"
            placeholder="Ramesh"
            pattern="[\w\s]+"
          />
          <this.EntryInputRow
            name="Email"
            placeholder="Ramesh@gmail.com"
            pattern=""
          />
          <this.EntryInputRow name="Address" placeholder="  ..." pattern=".+" />
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => {


              // this.props.addresseditcallback();
              const email = document.getElementById("Email").value;
              // const uid = document.getElementById("Aadhar").value;
              console.log(email);
              const options = {
                url: "http://localhost:8080/emailApi/sendEmail/" + email,
                method: "POST",
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

                  if (response.data === "success") {
                    this.setState({
                      toast: "true",
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
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddressEntryForm;
