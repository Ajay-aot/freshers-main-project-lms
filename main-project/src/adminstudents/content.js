import { useContext } from "react";
import { RiPencilFill } from "react-icons/ri";
import { BsTrashFill, BsEye } from "react-icons/bs";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { studentContext } from "../App";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Content({searchTerm,setSearchterm}) {
  const [studentArray, setStudentarray] = useContext(studentContext);

  // const comment = JSON.parse(localStorage.getItem('studentArray'));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const [shows, setShowedit] = useState(false);
  const handleCloseedit = () => setShowedit(false);
  const handleShowedit = () => setShowedit(true);

  const [getStudentkey, setStudentkey] = useState("");
 
  const [getStudentName, setStudentname] = useState("");

  const [getStudentmail, setStudentmail] = useState("");

  const [getStudentpassword, setStudentpassword] = useState("");

  const [getStudentconfirmpassword, setStudentconfirmpassword] = useState("");
 
  const handlemailEdit = (e) => {
    setStudentmail(e.target.value)
    };

  const handlenameEdit = (e) => {
    setStudentname(e.target.value);
  };
  const handlepasswordEdit = (e) => {
    setStudentpassword(e.target.value);
  };
  const handleconfirmpasswordEdit = (e) => {
    setStudentconfirmpassword(e.target.value);
  };


  const updateStudents = () =>{
    // newPasswordcheck()
    setStudentarray(
        studentArray.map((students) => {
            
            if(students.key === getStudentkey){
                if(getStudentpassword !== getStudentconfirmpassword){
                    alert("Password missmatching")
                }
                else{
              return{
                ...students,
                name:getStudentName,
                email:getStudentmail,
                password:getStudentpassword,
                confirmpassword:getStudentconfirmpassword,
              }
            }
            }

            return students
        }

        )
    )
  }




  const handleDelete = (deleteId) => {
    console.log(deleteId);
    setStudentarray(studentArray.filter((item) => deleteId !== item.key));
  };

  return studentArray.filter((value)=>{
    if(searchTerm ==""){
        return value
    }else if(value.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return value
    }
  }).map((item) => {
    return (
    
      <>
        <div className="d-flex mt-3  items border-bottom list  " key={item.key}>
          <p className="col-5 m-0 px-4">{item.name}</p>
          <p className="col-3">{item.email}</p>
          <div className="d-flex gap-3  mt-2 col-4 m-0 justify-content-center ">
            <RiPencilFill
              className="ash"
              onClick={() => {
                handleShowedit();
                setStudentkey(item.key)
                setStudentname(item.name);
                setStudentmail(item.email);
                setStudentpassword(item.password);
                setStudentconfirmpassword(item.confirmpassword)
              }}
            />
            <BsTrashFill className="trash" onClick={handleShow} />
            <Link to="/viwestudent">
              <BsEye className="ash mb-3" />
            </Link>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton className="border-0 px-5 pt-4">
            <Modal.Title>Are You Sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-5">
            Are you sure you want to delete the Student ?
          </Modal.Body>
          <Modal.Footer className="border-0 mt-3">
            <Button
              variant="secondary"
              onClick={handleClose}
              className="cancel"
            >
              Close
            </Button>
            <Button
              className="hoverbutton border-0"
              onClick={() => {
                handleDelete(item.key);
                handleClose();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        {/* modal for deleting ending */}

        {/* modal for editing */}
        <Modal className="" show={shows} onHide={handleCloseedit}>
          <Modal.Header closeButton className="border-0 px-5 pt-4">
            <Modal.Title className="login">Edit Student</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-5">
            <Form className="headings border-top border-bottom py-2 list">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={getStudentName}
                  onChange={handlenameEdit}
                  placeholder="Eg: John Doe"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="Email"
                  value={getStudentmail}
                  onChange={handlemailEdit}
                  placeholder="Eg: johndoe@gmail.com"
                  // autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={getStudentpassword}
                  onChange={handlepasswordEdit}
                  placeholder="********"
                  // autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="confirmpassword"
                  type="password"
                  value={getStudentconfirmpassword}
                  onChange={handleconfirmpasswordEdit}
                  placeholder="********"
                  // autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="border-0 px-5">
            <Button className="cancel" onClick={handleCloseedit}>
              Cancel
            </Button>
            <Button
              variant="primary"
              className="border-0 hoverbutton"
              onClick={() => {
                handleCloseedit();
                updateStudents();


                // handleAddstudent();
              }}
            >
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  });
}
export default Content;
