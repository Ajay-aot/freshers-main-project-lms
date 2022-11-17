import { useContext } from "react"
import {RiPencilFill} from 'react-icons/ri'
import {BsTrashFill} from 'react-icons/bs'
import { adminallbooksContext } from '../App'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 
import { useState } from "react";

function Content(){

    const [adallbooksArray,setAdallbooksarray] = useContext(adminallbooksContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (deleteId) =>{
        console.log(deleteId)
        setAdallbooksarray(adallbooksArray.filter((item) =>
        deleteId !== item.key
        ))   
    }
localStorage.setItem('allbookdataKey', JSON.stringify(adallbooksArray));
    return(
        

        adallbooksArray.map((item)=>{
            return( 
                <>
                <div className="d-flex mt-3  items border-bottom list px-4" key={item.key}>
                    <p className="col-2 ">{item.booktitle}</p>
                    <p className="col-2 m-0 text-center">{item.Auther}</p>
                    <p className="col-2 m-0 text-center">{item.languages}</p>
                    <p className="col-2 m-0 text-center">{item.totalcopies}</p>
                    <p className="col-2 m-0 text-center">{item.remaining}</p>
                    <div className="d-flex gap-3 mt-1 col-2 m-0 justify-content-center">
                    <RiPencilFill className="ash"/>
                    <BsTrashFill className="trash" onClick={handleShow}  />
    
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