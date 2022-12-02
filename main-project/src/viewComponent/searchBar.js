import React from "react";
import Form from "react-bootstrap/Form";

function SearchBar({ searchTerm, setSearchterm }) {
  const handleSearch = (e) => {
    setSearchterm(e.target.value);
    console.log(searchTerm);
  };
  return (
    <div className="ms-5 list mt-4 ">
      <p>Issued Books(5) </p>
      <form className="col-4 ">
        <Form.Control
          type="search"
          placeholder="Search by student name or email "
          onChange={handleSearch}
        />
      </form>{" "}
    </div>
  );
}

export default SearchBar;
