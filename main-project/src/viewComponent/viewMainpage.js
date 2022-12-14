import React, { useState } from "react";
import Orangesidebar from "../Sidebar2";
import SearchBar from "./searchBar";
import ViewHeading from "./viewHeading";
import ArrowName from "./arrowName";
import IndividualInfo from "./individualInfo";
import { useParams } from "react-router-dom";

function ViewMainpage() {
  const [temporaryArray, setTemparray] = useState([]);
  let { id } = useParams();
  const [searchTerm, setSearchterm] = useState("");

  return (
    <div className="d-flex background">
      <Orangesidebar />
      <div className="studentviewpage">
        <ArrowName id={id} />
        <IndividualInfo
          id={id}
          temporaryArray={temporaryArray}
          setTemparray={setTemparray}
          // searchTerm={searchTerm}
          // setSearchterm={setSearchterm}
        />
        <SearchBar
          id={id}
          searchTerm={searchTerm}
          setSearchterm={setSearchterm}
        />
        <ViewHeading
          id={id}
          temporaryArray={temporaryArray}
          setTemparray={setTemparray}
          searchTerm={searchTerm}
          setSearchterm={setSearchterm}
        />
      </div>
    </div>
  );
}

export default ViewMainpage;
