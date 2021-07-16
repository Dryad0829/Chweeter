import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import { auth, db } from "../utils/firebase";
import { Link } from "react-router-dom";
import logo from "../Images/cheetahh.png";
import { TextField, Button } from "@material-ui/core";
export default function Register() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
    firstname: "",
    lastname: "",
    id: ""
  });

  const handleChange = (props) => (e) => {
    setPayload({ ...payload, [props]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();

    if (
      !payload.email ||
      !payload.password ||
      !payload.confirmpassword ||
      !payload.firstname ||
      !payload.lastname ||
      !payload.username
    ) {
      alert("Please fill in all the required fields");
    } else if (payload.password !== payload.confirmpassword) {
      alert("Password did not Match");
    } else {
      auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const currentUser = auth.currentUser;
          db.collection("users")
            .doc(currentUser.uid)
            .collection("informations")
            .add({
              email: payload.email,
              username: payload.username,
              firstname: payload.firstname,
              lastname: payload.lastname,
              created_At: Date(Date.now()),
              id: currentUser.uid
            });

          alert("You are now Signed In");
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <div class="register-wrap">
      <div class="register-container">
        <form className="content">
          <img class="register-logo" src={logo} alt="Logo" />

          <div class="register-head">
            <h1>
              Create your account <br></br>
            </h1>
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="username"
              onChange={handleChange("username")}
              value={payload.username}
              className="register-inp1"
              type="text"
              label="Username "
            />
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="firstname"
              onChange={handleChange("firstname")}
              value={payload.firstname}
              className="register-inp1"
              type="text"
              label="First name "
            />
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="lastname"
              onChange={handleChange("lastname")}
              value={payload.lastname}
              className="register-inp1"
              type="text"
              label="Last name "
            />
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="email"
              onChange={handleChange("email")}
              value={payload.email}
              className="register-inp1"
              type="email"
              label="Email "
            />
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="password"
              onChange={handleChange("password")}
              value={payload.password}
              className="register-inp1"
              type="password"
              label="Password "
            />
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="confirmpassword"
              onChange={handleChange("confirmpassword")}
              value={payload.confirmpassword}
              className="register-inp1"
              type="password"
              label="Confirm Password "
            />
          </div>

          <div className="register-inp4">
            {" "}
            <Button
              className="register-inp4"
              variant="contained"
              color="primary"
              onClick={register}
            >
              Register
            </Button>
          </div>
          <div>
            <br></br>{" "}
            <Link to="/login" className="register-inp5">
              Go to Log in Page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
