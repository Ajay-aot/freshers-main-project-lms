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
             Add New Book
             </Button>



             <Modal className="" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0 px-5 pt-4">
          <Modal.Title className="login">Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Form className="headings border-top border-bottom py-2 list">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Pride and Prejudice"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Auther</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: Jane Austen"
                autoFocus
              />
            </Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-3">
                <option>Select Language</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
             </Form.Select>
             <div className="d-flex gap-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total copies</Form.Label>
              <Form.Control
                type="text"
                placeholder="5"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Remaining</Form.Label>
              <Form.Control
                type="text"
                placeholder="2"
                autoFocus
              />
            </Form.Group>
            </div>
            

            
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-5">
          <Button className="cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="border-0 hoverbutton" onClick={handleClose}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
}

(<Search />);
    

export default Search