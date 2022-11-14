import React from "react";
import Search from './Adminallbooksearch'
import Allbooksheading from "./Allbooksheading"



function Allbooksmainfunction(){
    return(
        <div className="p-5 col mainpage" >
            <p className="login">All Books</p>
            <hr ></hr>
            <Search/>
            <Allbooksheading/>
            </div>
    )
}
export default Allbooksmainfunction