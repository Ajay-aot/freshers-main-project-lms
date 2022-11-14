import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function Search(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="d-flex justify-content-between mt-4">
            <form className="col-6 ">
             <Form.Control type="email" placeholder="Search by student name or email " />
            
             </form>  
             <Button className="border-0 hoverbutton" type="submit" onClick={handleShow}>
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
                type="text"
                placeholder="Eg: John Doe"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Eg: johndoe@gmail.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-5">
          <Button className="cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="border-0 hoverbutton" onClick={handleClose}>
            Add student
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
}

(<Search />);
    

export default Search