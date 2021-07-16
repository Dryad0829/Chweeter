import React,{useState} from 'react'
import "./Register.css";
// import{useHistory} from "react-router-dom";
import firebase from "../utils/firebase";
import {Link} from "react-router-dom";
import logo from "../Images/cheetahh.png"
import { TextField , Button } from '@material-ui/core';
export default function Register() {
    
    const [payload,setPayload]= useState({
        email: "",
        password: "",
        confirmpassword: ""
    });

    const handleChange =(props) => (e) => {
        setPayload({...payload,[props]:e.target.value});
    };
    // const history = useHistory ();

    const register = (e) => {
        e.preventDefault();

        if (!payload.email || !payload.password || !payload.confirmpassword)
        {
            alert ("Please fill in all the required fields")
        }
        else if(payload.password !== payload.confirmpassword)
        {
            alert ("Password did not Match")
        }
        else 
        {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then((userCredential) => {
              // Signed in 
            //   var user = userCredential.user;
              // ...
              alert("You are now Registered")
            })
            .catch((error) => {
            //   var errorCode = error.code;
              var errorMessage = error.message;
              // ..
              alert (errorMessage);
            });
        }

        
    }

    return (
        
<div class="wrap">
        <div  class="container">    
                    <form className="content">
                        <img class="logo" src={logo} alt="Logo" />

                            <div class="head">
                                <h1>
                                    Create you account <br></br>
                                </h1>
                            </div>

                            <div > <TextField id="outlined-basic" variant="outlined" name="email" onChange={handleChange("email")} value={payload.email}
                            className="inp1" type="email"  label="Email "/></div>

                            <div > <TextField id="outlined-basic" variant="outlined" name="password" onChange={handleChange("password")} value={payload.password}
                            className="inp2" type="password"  label="Password "/></div>

                            <div > <TextField id="outlined-basic" variant="outlined" name="confirmpassword" onChange={handleChange("confirmpassword")} value={payload.confirmpassword}
                            className="inp3" type="password"  label="Confirm Password "/></div>
                
                            <div> <Button className="inp4" variant="contained" color="primary" onClick={register}>Register</Button ></div>
                            <div ><br></br> <Link to="/login" className="inp5">Go to Log in Page</Link></div>
                    </form>  
        </div>
</div>     
    )
}
