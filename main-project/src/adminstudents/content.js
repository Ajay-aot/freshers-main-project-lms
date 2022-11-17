import { useContext } from "react"
import {RiPencilFill} from 'react-icons/ri'
import {BsTrashFill,BsEye} from 'react-icons/bs'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import { studentContext}  from  '../App'
import { Link } from "react-router-dom"

function Content(){
    const [studentArray,setStudentarray] = useContext(studentContext)

    // const comment = JSON.parse(localStorage.getItem('studentArray'));
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    localStorage.setItem('studentsdataKey', JSON.stringify(studentArray));


    const handleDelete = (deleteId) =>{
        console.log(deleteId)
        setStudentarray(studentArray.filter((item) =>
        deleteId !== item.key
        ))   
    }
    
    return(
        

        studentArray.map((item)=>{
            return( 
                <>
                <div className="d-flex mt-3  items border-bottom list  " key={item.key}>
                    <p className="col-5 m-0 px-4">{item.name}</p>
                    <p className="col-3">{item.email}</p>
                    <div className="d-flex gap-3  mt-2 col-4 m-0 justify-content-center ">
                    <RiPencilFill className="ash"/>
                    <BsTrashFill className="trash" onClick={handleShow} />
                    <Link to ="/viwestudent">
                    <BsEye className="ash mb-3"/>
                    </Link>
                    </div>  
                </ div>
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
                        <Button variant="secondary" onClick={handleClose} className="cancel">
                            Close
                        </Button>
                        <Button  className="hoverbutton border-0" onClick={() => {handleDelete(item.key);handleClose();}} >Delete</Button>
                        </Modal.Footer>
                    </Modal>
                    

               
                 
                </>)

           


        })

     
      
      


    )
}
export default Content