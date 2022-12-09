import React from "react";
import Sidebar3 from "../Sidebar3";
import SearchSection from "./SearchSection";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Contents from "./Contents";
import { useState } from "react";

function MyBooks() {
  const [searchTerm, setSearchterm] = useState("");
  const [mybooksSort,setMybooksort] = useState("")


  return (
    <div className="d-flex ">
      <Sidebar3 />
      <div className="studentallbooks col p-4">
        <p className="login border-bottom pb-2">My Books</p>
        <SearchSection 
        mybooksSort={mybooksSort}
        searchTerm={searchTerm}
        setSearchterm={setSearchterm}/>
        <Contents
        mybooksSort={mybooksSort}
        setMybooksort={setMybooksort}
        searchTerm={searchTerm}
        setSearchterm={setSearchterm}
         />
      </div>
    </div>
  );
}

export default MyBooks;
