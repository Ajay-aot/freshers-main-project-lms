import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Loginform({ authfun }) {
  const adminUser = {
    email: "newadmin@admin.com",
    password: "123",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  // const [error,setError] = useState("")

  const onloginInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const matchCheck = () => {
    if (
      adminUser.email === user.email &&
      adminUser.password === user.password
    ) {
      authfun();
      console.log("matched");
    } else {
        toast.error("Incorrect mail or password",{position:"top-center"})
        // alert("please Email and Password")
      console.log("not matching");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    matchCheck();
  };

  return (
    <>
      <Sidebar />
      <div className="d-flex justify-content-center">
        <div style={{ width: "406px" }} className=" ">
          <Form>
            <Form.Label className="login">Login</Form.Label>
            <br></br>
            <Form.Label className="mb-3">
              Welcome back! Please enter your details.
            </Form.Label>

            <Form.Group className="mb-0">
              <Form.Label className="login-labels me-5 mb-0">Admin</Form.Label>
              <Form.Label className="mb-0">Student</Form.Label>
              <hr></hr>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="login-labels">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={onloginInput}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="login-labels">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={onloginInput}
                placeholder="Password"
              />
            </Form.Group>

            <Button onClick={onSubmit} className="loginbtn" type="submit">
              LOGIN
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
