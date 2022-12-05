import React from 'react'
import Sidebar3 from "../Sidebar3";
import SearchSection from "./SearchSection"
import Heading from './Heading';
import Content from './Content';
import { useState } from "react";

function AllBooks({studentkey,setStudentkey}) {
    const [searchTerm, setSearchterm] = useState("");
    console.log(studentkey)
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
        studentkey={studentkey}
        setStudentkey={setStudentkey}/>
      </div>
    </div>
  )
}

export default AllBooks