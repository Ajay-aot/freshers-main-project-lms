import React from 'react'
import Form from "react-bootstrap/Form";

function SearchSection({searchTerm,setSearchterm}) {
  // const onclick = ()=>{
  //   console.log("clickedddddddddddddd")
  // }
  const handleSearch = (e) => {
    setSearchterm(e.target.value);
    console.log(searchTerm);
  };
  return (
    <div className='d-flex justify-content-between mt-4'>
    <form className="col-6">
    <Form.Control
      type="search"
      placeholder="Search by booktitle or author "
      onChange={handleSearch}
     
    />
    </form>
    <div className='d-flex'>
    <p className='d-flex mb-0 pt-1'>Sort By:</p>
    <select className="form-select col" aria-label="Default select example">
        {/* <option selected>Issue Date</option> */}
        <option >Book Title</option>
        <option >Author</option>
        
    </select>
    </div>
    </div>
  )
}

export default SearchSection