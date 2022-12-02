import React from 'react'
import Form from "react-bootstrap/Form";

function SearchSection() {
  return (
    <div className='d-flex justify-content-between mt-4'>
    <form className="col-6">
    <Form.Control
      type="search"
      placeholder="Search by student name or email "
     
    />
    </form>
    <div className='d-flex'>
    <p className='d-flex mb-0 pt-1'>Sort By:</p>
    <select className="form-select col" aria-label="Default select example">
        {/* <option selected>Issue Date</option> */}
        <option >Issue Date</option>
        <option >Due Date</option>
        
    </select>
    </div>
    </div>
  )
}

export default SearchSection