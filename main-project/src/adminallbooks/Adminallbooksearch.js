import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useContext } from "react";
import { adminallbooksContext } from "../App";
import shortid from "shortid";

function Search({allbooksearchTerm,setAllbooksearchterm}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [adallbooksArray, setAdallbooksarray] =
    useContext(adminallbooksContext);

  const [adallBooks, setAdallBooks] = useState({
    key:"",
    booktitle: "",
    auther: "",
    language: "",
    totalcopies: "",
    remaining:""
  });

  const handleInputallbooks = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value)
    setAdallBooks({ ...adallBooks, [name]: value });
    console.log(adallBooks);
  };
  
  const [error, setError] = useState(false);

  const handleAddallbooks = () => {
    if(!adallBooks.booktitle||
      !adallBooks.auther||
      !adallBooks.language||
      !adallBooks.totalcopies||
      !adallBooks.remaining)
      {
        setError(true);
      }
    else{
      
    setAdallbooksarray([
      ...adallbooksArray,
      {
        key: shortid.generate(),
        booktitle: adallBooks.booktitle,
        Auther: adallBooks.auther,
        languages: adallBooks.language,
        totalcopies: adallBooks.totalcopies,
        remaining: adallBooks.remaining,
      },
    ]);
  }

    console.log(adallBooks);
    
    setAdallBooks({
    
    booktitle: "",
    auther: "",
    language: "",
    totalcopies: "",
    remaining: "",
    })
    
  };

  const handleallbookSearch  = (e) =>{
    setAllbooksearchterm(e.target.value)
  }

  return (
    <div className="d-flex justify-content-between mt-4">
      <form className="col-6 ">
        <Form.Control
          type="email"
          placeholder="Search by student name or email "
          onChange={handleallbookSearch}
        />
      </form>
      <Button
        className="border-0 hoverbutton"
        type="submit"
        onClick={handleShow}
      >
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
                name="booktitle"
                type="text"
                // value={adallBooks.booktitle}
                onChange={handleInputallbooks}
                placeholder="Eg: Pride and Prejudice"
                autoFocus
              />
              {error && !adallBooks.booktitle ?  <p className="errormsg">Please enter Name</p>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Auther</Form.Label>
              <Form.Control
                name="auther"
                type="text"
                // value={adallBooks.auther}
                onChange={handleInputallbooks}
                placeholder="Eg: Jane Austen"
              />
               {error && !adallBooks.auther ?  <p className="errormsg">Please enter Auther</p>:""}
            </Form.Group>
            <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Select aria-label="Default select example"
              className="mb-3 "
              name="language"
              // value={adallBooks.language}
              onChange={handleInputallbooks}>
                <option>Open this select menu</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Italian">Italian</option>
            </Form.Select>
            {error && !adallBooks.language ?  <p className="errormsg">Please enter Auther</p>:""}
            </Form.Group>
            <div className="d-flex gap-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Total copies</Form.Label>
                <Form.Control
                  name="totalcopies"
                  type="number"
                  // value={adallBooks.totalcopies}
                  onChange={handleInputallbooks}
                  placeholder="0"
                />
                {error && !adallBooks.totalcopies ?  <p className="errormsg">Please enter Totalcopies</p>:""}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Remaining</Form.Label>
                <Form.Control
                  name="remaining"
                  type="number"
                  // value={adallBooks.remaining}
                  onChange={handleInputallbooks}
                  placeholder="0"
                />
                {error &&  !adallBooks.remaining ?  <p className="errormsg">Please enter Remaining</p>:""}
              </Form.Group>
            </div>
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
              handleAddallbooks();
              setError(false);
            }}
          >
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

<Search />;

export default Search;
