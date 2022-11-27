import React, { useState } from "react"
import { MdOutlineAssignmentReturn } from 'react-icons/md'
import { adminissuedBook, adminallbooksContext, studentContext } from '../App'
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiCreativeCommonsSaLine } from "react-icons/ri";



function Issuedcontent() {

    const [returnKey, setReturnkey] = useState("")
    const [booksTitle, setBookstitle] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook)
    const [adallbooksArray, setAdallbooksarray] = useContext(adminallbooksContext);
    const [studentArray, setStudentarray] = useContext(studentContext);

    const handleReturn = () => {

        const Returning = adissuedBooksarray.map((item) => {
            if (item.key == returnKey) {

                item.return = true
                const returnDate = new Date()
                let date = returnDate.getDate() + '-' + parseInt(returnDate.getMonth() + 1) + '-' + returnDate.getFullYear()
                item.returndate = date
            }

            // console.log("hi")
            return (item)
        })



        const remainingCount = adallbooksArray.map((item) => {
            // console.log(item.remaining)
            if (item.key == booksTitle) {

                item.remaining = ++item.remaining

            }
            return (item)
        })
        setAdissuedbooksarray(Returning)
        setAdallbooksarray(remainingCount)
        //  returnDate()
    }





    return (


        adissuedBooksarray.map((item) => {
            if (item.return == false) {
                return (

                    <>
                        <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2" key={item.key}>
                            {adallbooksArray.map((allbooks) => {
                                if (allbooks.key == item.Booktitle) {
                                    return (<p className="col-2 ">{allbooks.booktitle}</p>)

                                }
                            })}
                            {studentArray.map((student) => {
                                if (student.key == item.Student) {
                                    return (<p className="col-2 m-0  text-start">{student.name}</p>)

                                }
                            })

                            }

                            <p className="col-2 m-0  text-start ">{item.Issuedate}</p>
                            <p className="col-2 m-0  text-start">{item.Duedate}</p>

                            <p className="col-2 m-0  text-start">{(item.Fine < 0) ? "-" : item.Fine}</p>


                            <div className="d-flex gap-3  mt-1 ash justify-content-center">
                                <MdOutlineAssignmentReturn onClick={() => { handleShow(); setReturnkey(item.key); setBookstitle(item.Booktitle) }} />
                            </div>
                        </ div>



                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton className="d-flex  border-0 px-5 pt-4">
                                <Modal.Title>Mark as returned?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="px-5">
                                Are you sure to mark this book as returned ?
                            </Modal.Body>
                            <Modal.Footer className="border-0 mt-3 d-flex">
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                    className="cancel"
                                >
                                    NO
                                </Button>
                                <Button
                                    className="hoverbutton border-0"
                                    onClick={() => {
                                        handleClose();
                                        handleReturn()
                                    }}
                                >
                                    YES
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </>)

            }
        })
    )
}
export default Issuedcontent