import React from 'react'
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <div className='ms-5 list mt-4'> 
     <p>Issued Books(5)  </p>   
    <form className="col-4 ">
    <Form.Control type="email" placeholder="Search by student name or email " />
   
    </form>  </div>
  )
}

export default SearchBar