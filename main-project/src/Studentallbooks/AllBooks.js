import React from 'react'
import Sidebar3 from "../Sidebar3";
import SearchSection from "./SearchSection"
import Heading from './Heading';
import Content from './Content';
import { useState } from "react";

function AllBooks() {
    const [searchTerm, setSearchterm] = useState("");
    
  return (
    <div className="d-flex ">
      <Sidebar3 />
      <div className="studentallbooks col p-4">
        <p className="login border-bottom pb-2">All Books</p>
        <SearchSection
         searchTerm={searchTerm}
         setSearchterm={setSearchterm}/>
        <Heading/>
        <Content
         searchTerm={searchTerm}
         setSearchterm={setSearchterm}/>
      </div>
    </div>
  )
}

export default AllBooks