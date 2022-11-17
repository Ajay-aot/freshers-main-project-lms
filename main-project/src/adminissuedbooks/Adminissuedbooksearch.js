import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import React, { useState,useContext } from 'react';
import adminissuedBook from '../App'
import shortid from "shortid"

function Search(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [adissuedBooksarray,setAdissuedbooksarray] = useContext(adminissuedBook)




    // const [adissuedBooks,setAdissuedBooks] = useState({
    //   name:"", email:"", password:"", confirmpassword:""
    // })

    // const handleInput = (e) =>{
    //  let name = e.target.name
    //  let value = e.target.value
    //  setStudents({...students, [name]:value})
    //  console.log(students)
    // }
    // const handleAddstudent = () =>{
    //   setStudentarray([...studentArray,{key:shortid.generate(),name:students.name,email:students.email,password:students.confirmpassword}])
    //   console.log(studentArray)
    // }





    return(
        <div className="d-flex justify-content-between mt-4">
            <form className="col-6 ">
             <Form.Control type="email" placeholder="Search by student name or email " />
            
             </form>  
             <Button className="border-0 hoverbutton" type="submit" onClick={handleShow}>
             Issue Book
             </Button>



             <Modal className="" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0 px-5 pt-4">
          <Modal.Title className="login">Issue Book</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Form className="headings border-top border-bottom py-2 list  ">
          <Form.Label>Book</Form.Label>
          <Form.Select aria-label="Default select example" className="mb-3">
          
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
          </Form.Select>

           
          <Form.Label>Student</Form.Label>
          <Form.Select aria-label="Default select example" className="mb-3">
          
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
          </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Issue Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="name@example.com"
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="name@example.com"
                
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-5">
          <Button className="cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="border-0 hoverbutton" onClick={handleClose}>
          Issue Book
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
}

(<Search />);
    

export default Search