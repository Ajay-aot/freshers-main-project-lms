import React from "react";
import Search from './searchbar'
import Content from './content'
import Heading from './contentheading'

function Mainfunction(){
    return(
        <div className="p-5 col-md-10">
            <p className="login">Students</p>
            <hr ></hr>
            <Search/>
            <Heading/>
            <Content/>
           


            


        </div>
    )
}
export default Mainfunction