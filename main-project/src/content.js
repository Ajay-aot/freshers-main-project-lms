import { useState } from "react"
import {RiPencilFill} from 'react-icons/ri'

function Content(){

    const [data,setData] = useState([
        {key: 1 , name:"Nitha Samuel",mail:"nithasamuel@gmail.com"},
        {key: 2 , name:"Anjali Thomas", mail:"anjali.t@hotmail.com"},
        {key: 3 , name:"Rahul S", mail:"srahul@gmail.com"}  
    ])
    return(
        

        data.map((item)=>{
            return( 
                <>
                <div className="d-flex mt-3 justify-content-between items  ">
                    <p className="col-5 ps-5">{item.name}</p>
                    <p className="">{item.mail}</p>
                    <RiPencilFill/>
                      
                </div>
                </>)
           


        })
      


    )
}
export default Content