import React from "react";
import Search from './Adminallbooksearch'
import Allbooksheading from "./Allbooksheading"
import { useState } from  'react'



function Allbooksmainfunction(){
    const [allbooksearchTerm,setAllbooksearchterm] = useState("")
    return(
        <div className="p-5 col mainpage" >
            <p className="login">All Books</p>
            <hr ></hr>
            <Search
            allbooksearchTerm={allbooksearchTerm}
            setAllbooksearchterm={setAllbooksearchterm} />
            <Allbooksheading
             allbooksearchTerm={allbooksearchTerm}
             setAllbooksearchterm={setAllbooksearchterm}/>
            </div>
    )
}
export default Allbooksmainfunction