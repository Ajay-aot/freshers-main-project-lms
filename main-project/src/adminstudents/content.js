import { useState } from "react"
import {RiPencilFill} from 'react-icons/ri'
import {BsTrashFill,BsEye} from 'react-icons/bs'

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
                <div className="d-flex mt-3  items border-bottom list  " key={item.key}>
                    <p className="col-5 m-0 px-4">{item.name}</p>
                    <p className="col-3">{item.mail}</p>
                    <div className="d-flex gap-3  mt-2 col-4 m-0 justify-content-center ">
                    <RiPencilFill className="ash"/>
                    <BsTrashFill className="trash" />
                    <BsEye className="ash"/>
                    </div>  
                </ div>
                 
                </>)
           


        })
      


    )
}
export default Content