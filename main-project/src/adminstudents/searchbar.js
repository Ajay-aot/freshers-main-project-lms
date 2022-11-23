import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useContext } from "react";
import { studentContext } from "../App";
import shortid from "shortid";

function Search({ searchTerm, setSearchterm }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [studentArray, setStudentarray] = useContext(studentContext);

  const [students, setStudents] = useState({
    key:"",
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudents({ ...students, [name]: value });
    console.log(students);
  };
  const handleAddstudent = () => {
    // localStorage.setItem('studentsdataKey', JSON.stringify(studentArray));
    checkingPassword();

    console.log(studentArray);

    setStudents({
     
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const [error, setError] = useState(false);

  const checkingPassword = () => {
    console.log("test");
    if (
      !students.name ||
      !students.email ||
      !students.password ||
      !students.confirmpassword ||
      students.password != students.confirmpassword
    ) {
      setError(true);
    }
    // else if(students.confirmpassword !== students.password){
    //   alert("Missmatching passwords")
    //   }
    else {
      handleClose();
      setStudentarray([
        ...studentArray,
        {
          key: shortid.generate(),
          name: students.name,
          email: students.email,
          password: students.password,
          confirmpassword: students.confirmpassword,
        },
      ]);
    }
  };

  const handleSearch = (e) => {
    setSearchterm(e.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="d-flex justify-content-between mt-4">
      <form className="col-6 ">
        <Form.Control
          type="search"
          placeholder="Search by student name or email "
          onChange={handleSearch}
        />
      </form>
      <Button
        className="border-0 hoverbutton"
        type="submit"
        onClick={handleShow}
      >
        Add New Student
      </Button>

      <Modal className="" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0 px-5 pt-4">
          <Modal.Title className="login">Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Form className="headings border-top border-bottom py-2 list">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                // value={students.name}
                onChange={handleInput}
                placeholder="Eg: John Doe"
                autoFocus
              />
              {error && !students.name ?  <p className="errormsg">Please enter Name</p>:""}
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="Email"
                // value={students.email}
                onChange={handleInput}
                placeholder="Eg: johndoe@gmail.com"
                // autoFocus
              />
              {error && !students.email ?  <p className="errormsg">Please enter Email</p>:""}
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                // value={students.password}
                onChange={handleInput}
                placeholder="********"
                // autoFocus
              />
              {error && !students.password ? <p className="errormsg">Please enter password</p>:""}
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmpassword"
                type="password"
                // value={students.confirmpassword}
                onChange={handleInput}
                placeholder="********"
                // autoFocus
              />
              {error && students.password != students.confirmpassword ? <p className="errormsg">Please confirm password</p>:""}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-5">
          <Button className="cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            className="border-0 hoverbutton"
            onClick={() => {
              handleAddstudent();
              setError(false);
            }}
          >
            Add student
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

<Search />;

export default Search;
