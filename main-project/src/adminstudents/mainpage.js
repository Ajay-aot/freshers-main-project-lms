import React from "react";
import Search from './searchbar'

import Heading from './contentheading'

function Mainfunction(){
    return(
        <div className="p-5 col-md-10 mainpage" >
            <p className="login">Students</p>
            <hr ></hr>
            <Search/>
            <Heading/>
            </div>
    )
}
export default Mainfunction