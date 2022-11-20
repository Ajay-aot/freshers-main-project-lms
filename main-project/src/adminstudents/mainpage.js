import React from "react";
import Search from './searchbar'
import { useState } from "react";
import Heading from './contentheading'

function Mainfunction(){
    const [searchTerm,setSearchterm] = useState("")
    return(
        <div className="p-5 col-md-10 mainpage" >
            <p className="login">Students</p>
            <hr ></hr>
            <Search 
            searchTerm={searchTerm}
            setSearchterm={setSearchterm}
            />
            <Heading
            searchTerm={searchTerm}
            setSearchterm={setSearchterm}/>
            </div>
    )
}
export default Mainfunction