import React from "react";
import Search from './Adminissuedbooksearch'
import Issuedheading from "./Issuedheading"



function Issuedmainfunction(){
    return(
        <div className="p-5 col mainpage" >
            <p className="login">Issued Books</p>
            <hr ></hr>
            <Search/>
            <Issuedheading/>
            </div>
    )
}
export default Issuedmainfunction