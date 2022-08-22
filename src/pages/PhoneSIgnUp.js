import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PhoneSignUp.css";
import { GrTwitter } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
function PhoneSIgnUp() {
  let navigate = useNavigate();
  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const [empty, setempty] = useState(true);
  const [imglink, setimglink] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name, phonenumber, password, confirm);
  };

  async function registeruser(event) {
    event.preventDefault();
    if (
      name === "" ||
      phonenumber === "" ||
      password === "" ||
      confirm === "" ||
      imglink === ""
    ) {
      alert("All fields are required");
      setempty(false);
    } else if (confirm !== password) {
      alert("Passwords do not match");
    } else {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phonenumber,
          password,
          imglink,
        }),
      });

      const data = await response.json();
      
      console.log(data);
      alert("Successfully registered. Click ok to go to Login Page");
      navigate("/", { replace: true });
    }
  }
  return (
    <div className="phone-signup">
      <div className="signup-form">
        <Link to="/">
          <AiOutlineClose style={{ color: "white", fontSize: "32px" }} />
        </Link>
        <h1>Sign Up </h1>

        <form className="form" onSubmit={registeruser}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder=" Phone Number or Email"
            name="phonenumber"
            onChange={(e) => setphonenumber(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder=" Password"
            password="password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Confirm Password"
            name="confirm"
            onChange={(e) => setconfirm(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Profile Pic URL"
            name="confirm"
            onChange={(e) => setimglink(e.target.value)}
          />
          <br />
          <input
            style={{
              padding: 0,
              height: "40px",
              borderRadius: "100px",
              backgroundColor: "#1DA1F2",
              fontSize: "20px",
            }}
            type="submit"
            value="submit"
          />
        </form>
        <p className="questext">
          Already Have an Account ?{" "}
          <Link to="/signin">
            <span style={{ color: "#1DA1F2" }}>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PhoneSIgnUp;
