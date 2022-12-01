import React from "react";
import Search from './Adminissuedbooksearch'
import Issuedheading from "./Issuedheading"
import { useState } from 'react'



function Issuedmainfunction(){
    const [searchTerm,setSearchterm] = useState("")
    
    return(
        <div className="p-5 col mainpage" >
            <p className="login">Issued Books</p>
            <hr ></hr>
            <Search
            searchTerm={searchTerm}
            setSearchterm={setSearchterm}/>
            <Issuedheading
            searchTerm={searchTerm}
            setSearchterm={setSearchterm}/>
            </div>
    )
}
export default Issuedmainfunction