import { useContext } from "react";
import { RiPencilFill } from "react-icons/ri";
import { BsTrashFill } from "react-icons/bs";
import { adminallbooksContext } from "../App";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";

function Content({allbooksearchTerm,setAllbooksearchterm}) {
  const [adallbooksArray, setAdallbooksarray] =
    useContext(adminallbooksContext);

  const [getAllbookskey,setGetallbookskey] = useState("") 
  const [getAllbookstitle,setGetallbookstitle] = useState("")  
  const [getAllbooksauther,setGetallbooksauther] = useState("") 
  const [getAllbookslanguage,setGetallbookslanguage] = useState("")
  const [getAllbookstotalcopies,setGetallbookstotalcopies] = useState("")
  const [getAllbooksremaining,setGetallbooksremaining] = useState("")

 const handleallbookstitleEdit = (e) =>{
    setGetallbookstitle(e.target.value)
 }
 const handleallbooksautherEdit = (e) =>{
    setGetallbooksauther(e.target.value)
 }

 const handleallbookslanguageEdit = (e) =>{
    setGetallbookslanguage(e.target.value)
 }

 const handleallbookstotalcopiesEdit = (e) =>{
    setGetallbookstotalcopies(e.target.value)
 }
 const handleallbooksremainingEdit = (e) =>{
    setGetallbooksremaining(e.target.value)
 }


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShowedit] = useState(false);
  const handleCloseedit = () => setShowedit(false);
  const handleShowedit = () => setShowedit(true);

  const handleDelete = (deleteId) => {
    console.log(deleteId);
    setAdallbooksarray(adallbooksArray.filter((item) => deleteId !== item.key));
  };

 const updateAddallbooks = () =>{
    // console.log("hai")
    setAdallbooksarray(
    adallbooksArray.map((allbooks) => {
        if(allbooks.key === getAllbookskey ){
            return{
                ...allbooks,
                booktitle:getAllbookstitle,
                Auther:getAllbooksauther,
                languages:getAllbookslanguage,
                totalcopies:getAllbookstotalcopies,
                remaining:getAllbooksremaining
        }
    }
    return allbooks
}
    ))}


//   localStorage.setItem("allbookdataKey", JSON.stringify(adallbooksArray));
  
  return adallbooksArray.filter((value)=>{
    if(allbooksearchTerm ==""){
        return value
    }else if(value.booktitle.toLowerCase().includes(allbooksearchTerm.toLowerCase())){
        return value
    }
  }).map((item) => {
    // console.log(item.key)
    return (
      <>
        <div
          className="d-flex mt-3  items border-bottom list px-4"
          key={item.key}
        >
          
          <p className="col-2 ">{item.booktitle}</p>
          <p className="col-2 m-0 text-center">{item.Auther}</p>
          <p className="col-2 m-0 text-center">{item.languages}</p>
          <p className="col-2 m-0 text-center">{item.totalcopies}</p>
          <p className="col-2 m-0 text-center">{item.remaining}</p>
          <div className="d-flex gap-3 mt-1 col-2 m-0 justify-content-center">
            <RiPencilFill className="ash"
            onClick={() =>
                {handleShowedit()
                setGetallbookskey(item.key)
                setGetallbookstitle(item.booktitle)
                setGetallbooksauther(item.Auther)
                setGetallbookslanguage(item.languages)
                setGetallbookstotalcopies(item.totalcopies)
                setGetallbooksremaining(item.remaining)
                 }} />
            <BsTrashFill className="trash" onClick={handleShow} />
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
        {/* ending delete modal */}



        {/* modal for editing */}
        <Modal className="" show={shows} onHide={handleCloseedit}>
          <Modal.Header closeButton className="border-0 px-5 pt-4">
            <Modal.Title className="login">Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-5">
            <Form className="headings border-top border-bottom py-2 list">
              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="booktitle"
                  type="text"
                  value={getAllbookstitle}
                  onChange={handleallbookstitleEdit}
                  placeholder="Eg: Pride and Prejudice"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Auther</Form.Label>
                <Form.Control
                  name="auther"
                  type="text"
                  value={getAllbooksauther}
                  onChange={handleallbooksautherEdit}
                  placeholder="Eg: Jane Austen"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Language</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3 "
                  name="language"
                  value={getAllbookslanguage}
                  onChange={handleallbookslanguageEdit}
                >
                  <option>Open this select menu</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Italian">Italian</option>
                </Form.Select>
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
                    value={getAllbookstotalcopies}
                    onChange={handleallbookstotalcopiesEdit}
                    placeholder="5"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Remaining</Form.Label>
                  <Form.Control
                    name="remaining"
                    type="number"
                    value={getAllbooksremaining}
                    onChange={handleallbooksremainingEdit}
                    placeholder="2"
                  />
                </Form.Group>
              </div>
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
                updateAddallbooks();
              }}
            >
              update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  });
}
export default Content;
