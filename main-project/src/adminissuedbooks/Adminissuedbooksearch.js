import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useContext, useEffect } from "react";
import { adminissuedBook, adminallbooksContext, studentContext } from "../App";
import shortid from "shortid";

function Search() {
  const [fine, setFine] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);

  const [adallbooksArray, setAdallbooksarray] = useContext(adminallbooksContext);

  const [studentArray, setStudentarray] = useContext(studentContext);

  const [adissuedBooks, setAdissuedBooks] = useState({
    key: "",
    booktitle: "",
    Studentname: "",
    Issuedate: "",
    Duedate: "",


  });
  const [booksissuedTitle, setBooksissuedtitle] = useState("")
  const [booksissuedDuedate, setBooksissuedduedate] = useState("")

  const handleIssuedbookstitle = (e) => {
    setBooksissuedtitle(e.target.value)
    let name = e.target.name;
    let value = e.target.value;
    setAdissuedBooks({ ...adissuedBooks, [name]: value })

  }
  const handleIssuedbooks = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAdissuedBooks({ ...adissuedBooks, [name]: value });
    //  console.log(adissuedBooks)
  }
  const handleIssuedbooksduedate = (e) => {
    setBooksissuedduedate(e.target.value)
    let name = e.target.name;
    let value = e.target.value;
    setAdissuedBooks({ ...adissuedBooks, [name]: value })

  }


  const handleAddissuedbook = () => {

    setAdissuedbooksarray([
      ...adissuedBooksarray,
      {
        key: shortid.generate(),
        Booktitle: adissuedBooks.booktitle,
        Student: adissuedBooks.Studentname,
        Issuedate: adissuedBooks.Issuedate,
        Duedate: adissuedBooks.Duedate,
        returndate: "",
        Fine: fine,
        return: false,

      },
    ]);
    // console.log(studentArray)
  };





  const handleRemaining = () => {
    console.log("hai")

    setAdallbooksarray(adallbooksArray.map((books) => {
      if (books.key === booksissuedTitle) {
        return {
          ...books,
          remaining: books.remaining - 1

        }
      }
      return (books)
    }))


  }


  const handleFine = () => {
    console.log("haaaaaaaaaaaaaai")
    const today = new Date()
    const duedate = booksissuedDuedate

    // To calculate the no. of days between two dates
    const Difference = Math.round((today.getTime() - new Date(duedate)) / (1000 * 3600 * 24))
   
    setFine(Math.round(Difference * 10))
    //  if(fine< 0){
    //   setFine("-")
    //  }



  }
  useEffect(() => {
    handleFine();
  })





  return (
    <div className="d-flex justify-content-between mt-4">
      <form className="col-6 ">
        <Form.Control
          type="email"
          placeholder="Search by student name or email "
        />
      </form>
      <Button
        className="border-0 hoverbutton"
        type="submit"
        onClick={handleShow}
      >
        Issue Book
      </Button>

      <Modal className="" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0 px-5 pt-4">
          <Modal.Title className="login">Issue Book</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-5">
          <Form className="headings border-top border-bottom py-2 list  ">
            <Form.Label>Book</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              name="booktitle"
              onChange={handleIssuedbookstitle}
            >
              <option> select title</option>
              {adallbooksArray.map((item) => {
                if (item.remaining != 0)
                  return <option value={item.key}>{item.booktitle}</option>;
              })}
            </Form.Select>

            <Form.Label>Student</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              name="Studentname"
              onChange={handleIssuedbooks}
            >
              <option>select name</option>
              {studentArray.map((item) => {
                return <option value={item.key}>{item.name}</option>;
              })}
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Issue Date</Form.Label>
              <Form.Control
                name="Issuedate"
                type="date"
                onChange={handleIssuedbooks}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                name="Duedate"
                type="date"
                onChange={handleIssuedbooksduedate}
              />
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
              handleClose();
              handleAddissuedbook();
              handleRemaining();
              // handleFine();

            }}
          >
            Issue Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

<Search />;

export default Search;
