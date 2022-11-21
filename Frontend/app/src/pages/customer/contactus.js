import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import config from "../../config";

export default function Contactus() {
  // const style = {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    if (name.length === 0) {
      toast.warning("Please enter your name");
    } else if (email.length === 0) {
      toast.warning("Please enter your email");
    } else if (mobile.length === 0) {
      toast.warning("Please enter your mobile no");
    } else if (message.length === 0) {
      toast.warning("Please enter your valueable message");
    } else {
      axios
        .post(config.customerURL + "/contact_us", {
          name,
          email,
          mobile,
          message,
        })
        .then((response) => {
          // console.log(response);
          toast.success("We got your message. We'll contact you soon.");
        })
        .catch((error) => {
          // console.log("error");
          // console.log(error);
          toast.error("Something went wrong");
        });
    }
  };

  return (
    <div>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "5%", fontSize: "21px" }}
      >
        <div style={{ width: "70%", textAlign: "center" }}>
          <div
            className="mb-3 input-group-lg"
            style={{ fontSize: "30px", color: "#11851b", fontWeight: "bold" }}
          >
            <label>YOUR MESSAGE IS VALUABLE FOR US</label>
          </div>

          <div className="mb-3 input-group-lg">
            {/* <label>Your Name</label> */}
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3 input-group-lg">
            {/* <label>Email</label> */}
            <input
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3 input-group-lg">
            {/* <label>Mobile</label> */}
            <input
              type="tel"
              onChange={(event) => {
                setMobile(event.target.value);
              }}
              className="form-control"
              placeholder="Mobile No"
            />
          </div>
          <div className="mb-3">
            {/* <label>Message</label> */}
            <textarea
              className="form-control"
              rows="5"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              placeholder="Type your message here..."
              style={{ resize: "none" }}
            />
          </div>
          <div className="mb-3 input-group-lg" style={{ textAlign: "center" }}>
            <button
              className="btn bg-success"
              onClick={send}
              style={{ width: "100%" }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

