import React, { useState } from 'react'
import "./Login.css";
import { Link } from "react-router-dom";
// import{useHistory} from "react-router-dom";
import logo from "../Images/cheetahh.png"
import {auth} from "../utils/firebase";
import { TextField, Button } from '@material-ui/core';


export default function Login() {
    const [payload, setPayload] = useState({
        email: "",
        password: ""
    });

    const handleChange = (props) => (e) => {
        setPayload({ ...payload, [props]: e.target.value });
    };
    // const history = useHistory ();

    const login = (e) => {
        e.preventDefault();
        if (!payload.email || !payload.password) {
            alert("Please fill in all the required fields")
        }
        else {
            auth.signInWithEmailAndPassword(payload.email, payload.password)
                .then((userCredential) => {
                    // Signed in
                    // var user = userCredential.user;
                    // ...
                    alert("You are now Signed In");


                })
                .catch((error) => {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage);

                });
        }
    }

    return (


        <div class="all">


            <form class="login-continent">
                <div class="login-contentt">
                    <img class="che" src={logo} alt="Logo" />
                
                <div class="heading">
                    <h1>
                        Log in to Cheewetah
                    </h1>
                </div>
                <div class="number">
                    <TextField className="one" id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleChange("email")} value={payload.email}
                        type="email" />
                    <br></br>  <br></br>

                    <TextField className="two" id="outlined-basic" label="Password" variant="outlined" name="password" onChange={handleChange("password")} value={payload.password}
                        type="password" />
                    <div class="wrapcolor">
                        <div>
                        <Button className="btn" variant="contained" color="primary" onClick={login}>Log in</Button>
                        </div>
                        <div class="forgot">
                            <Link className="link" to=""> Forgot Password?</Link>
                            <div className="link1">
                            <Link className="link1" to="register">Sign up for Cheewetah </Link>
                            </div>
                        </div>
                        <div class="sign">
                            
                        </div>
                    </div>
                </div>
                </div>

            </form>

        </div>


    )
}
