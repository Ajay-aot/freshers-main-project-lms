import React, { useState } from "react";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { adminissuedBook, adminallbooksContext, studentContext } from "../App";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { RiCreativeCommonsSaLine } from "react-icons/ri";
import DateDiff from 'date-diff';

function Issuedcontent({ searchTerm, setSearchterm }) {
  const [returnKey, setReturnkey] = useState("");
  const [booksTitle, setBookstitle] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [adissuedBooksarray, setAdissuedbooksarray] =
    useContext(adminissuedBook);
  const [adallbooksArray, setAdallbooksarray] =
    useContext(adminallbooksContext);
  const [studentArray, setStudentarray] = useContext(studentContext);

  const handleReturn = () => {
    const Returning = adissuedBooksarray.map((item) => {
      if (item.key == returnKey) {
        item.return = true;
        const returnDate = new Date();
        let date =
          returnDate.getDate() +
          "-" +
          parseInt(returnDate.getMonth() + 1) +
          "-" +
          returnDate.getFullYear();
        item.returndate = date;
      }

      // console.log("hi")
      return item;
    });

    const remainingCount = adallbooksArray.map((item) => {
      // console.log(item.remaining)
      if (item.key == booksTitle) {
        item.remaining = ++item.remaining;
      }
      return item;
    });
    setAdissuedbooksarray(Returning);
    setAdallbooksarray(remainingCount);
    //  returnDate()
  };
  console.log("hai");
  const issuedTemparray = adissuedBooksarray.map((issued) => {
    // console.log(issued.Booktitle)
    if (issued.return == false) {
      let newObj = {
        key: issued.key,
        title: issued.Booktitle,
        issueDate: issued.Issuedate,
        dueDate: issued.Duedate,
        return: issued.return,
        // fine:issued.Fine
      };
      adallbooksArray.map((books) => {
        if (books.key == issued.Booktitle) {
          newObj.booktitle = books.booktitle;
        }
      });
      studentArray.map((student) => {
        if (student.key == issued.Student) {
          newObj.name = student.name;
        }
      });
      var date1 = new Date();
      var date2 = new Date(issued.Duedate);
      var diff = new DateDiff(date1, date2); 
      newObj.fine = Math.round(diff.days())*10

      return newObj;
    }
  });
  console.log(issuedTemparray);

  return issuedTemparray
    .filter((value) => {
      if (searchTerm == "") {
        return value;
      } else if (
        value.booktitle.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return value;
      } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value;
      }
    })
    .map((item) => {
      return (
        <>
          <div
            className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2"
            key={item.key}
          >
            <p className="col-2 ">{item.booktitle}</p>

            <p className="col-2 m-0  text-start">{item.name}</p>

            <p className="col-2 m-0  text-start ">{item.issueDate}</p>
            <p className="col-2 m-0  text-start">{item.dueDate}</p>

            <p className="col-2 m-0  text-start">
              {item.fine < 0 ? "-" : item.fine}
            </p>

            <div className="d-flex gap-3  mt-1 ash justify-content-center">
              <MdOutlineAssignmentReturn
                onClick={() => {
                  handleShow();
                  setReturnkey(item.key);
                  setBookstitle(item.Booktitle);
                }}
              />
            </div>
          </div>

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
                  handleReturn();
                }}
              >
                YES
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    });
}
export default Issuedcontent;
