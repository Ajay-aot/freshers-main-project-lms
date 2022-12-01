import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState,useContext} from "react";
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate  } from "react-router-dom";
import { studentContext } from "./App";

export default function Loginform({ authfun,Studentauthentication }) {
 
  const navigate = useNavigate();
  
  const [studentArray, setStudentarray] = useContext(studentContext);

  const adminUser = {
    email: "newadmin@admin.com",
    password: "123",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [student, setstudent] = useState({ email: "", password: "" });

  const onloginInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onstudentLogin = (e)=>{
    setstudent({...student,[e.target.name]: e.target.value})
  }

  const matchCheck = () => {
    if (
      adminUser.email === user.email &&
      adminUser.password === user.password
    ) {
      authfun();
      console.log("matched");
    } else {
        toast.error("Incorrect mail or password",{position:"top-center"})
        console.log("not matching");
    }
  };

  const studentMatching = ()=> {
    studentArray.find((item)=>{
      if(item.email == student.email && item.confirmpassword == student.password)
        {
          Studentauthentication()
          console.log("student-matched")
        }
        else
        {
          toast.error("Incorrect mail or password",{position:"top-center"})
        }

    })

     
  }

  const onSubmit = (e) => {
    e.preventDefault();
    matchCheck();
    navigate("/")
  };
  const onSubmitstudent=(e)=>{
    e.preventDefault();
    studentMatching()
    navigate("/studentmybooks")
  }


  
  const [studentSection,setStudentsection] = useState(false)
  const studentLogin = () =>{
    setStudentsection(true)
    console.log("loginssss")
   
    }

  const adminLogin =() =>{
    setStudentsection(false)
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

            <Form.Group className="mb-3  border-bottom">
              <Form.Label className="login-labels me-5 mb-0 pb-2" 
              onClick={adminLogin}
              style={{
                borderBottom: !studentSection ? "3px solid #ED7966" : "none",
              }}
              >Admin
              </Form.Label>

              <Form.Label className="mb-0 login-labels pb-2"
               style={{
                borderBottom: studentSection ? "3px solid #ED7966" : "none",
                
              }} 
               onClick={studentLogin}
              >Student
              </Form.Label>
              {/* <hr></hr> */}
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label className="login-labels" for="exampleDropdownFormEmail1">Email address</Form.Label>
              <Form.Control
                id="exampleDropdownFormEmail1"
                type="email"
                name="email"
                value={studentSection?student.email:user.email}
                onChange={studentSection ?  onstudentLogin : onloginInput}
                
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="login-labels">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={studentSection?student.password:user.password}
                onChange={studentSection ? onstudentLogin : onloginInput}
                placeholder="Password"
              />
            </Form.Group>
            {/* <Link to="/"> */}
            <Button onClick={studentSection ? onSubmitstudent : onSubmit} className="loginbtn" type="submit">
              LOGIN
            </Button>
            {/* </Link> */}
            
            {studentSection&&<p className="account mt-3"> Don’t have an account?<span className="register">Register</span></p>}
          
          </Form>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
