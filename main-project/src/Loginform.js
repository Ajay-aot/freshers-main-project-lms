import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState,useContext} from "react";
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default function Loginform({ authfun }) {

  // const [studentArray, setStudentarray] = useContext(studentContext);
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
      // toast.success("Login successfully",{position:"top-center"})
      console.log("matched");
    } else {
        toast.error("Incorrect mail or password",{position:"top-center"})
      console.log("not matching");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    matchCheck();
  };

  // const studentloginmailInput = (e)=>{
  //   setStudentloginmailInputs(e.target.value)
  //   console.log(studentloginmailInputs)}

  const [studentloginmailInputs,setStudentloginmailInputs] = useState("")
  const [studentloginpasswordInputs,setStudentloginpasswordInputs] = useState("")
  const [studentSection,setStudentsection] = useState(false)
  const studentLogin = () =>{
    setStudentsection(true)
    console.log("loginssss")
   
    }

  const adminLogin =() =>{
    // setStudentsection(false)
    console.log("loginadd")
  }

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
              <Form.Label className="login-labels me-5 mb-0" onClick={adminLogin}>Admin</Form.Label>
              <Form.Label className="mb-0"  onClick={studentLogin}>Student</Form.Label>
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
            <Link to="/">
            <Button onClick={onSubmit} className="loginbtn" type="submit">
              LOGIN
            </Button>
            </Link>
          </Form>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
