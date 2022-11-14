import { useState } from "react"
import {RiPencilFill} from 'react-icons/ri'
import {BsTrashFill,BsEye} from 'react-icons/bs'

function Content(){

    const [data,setData] = useState([
        {key: 1 , aname:"Colleen Hoover",mail:"nithasamuel@gmail.com",title:"It Start With Us",totalc:10,rem:2,lang:"English" },
        {key: 2 , aname:"Denver Riggleman", mail:"anjali.t@hotmail.com",title:"The Breach",totalc:0,rem:1,lang:"English"},
        {key: 3 , aname:"Robert T Kiyosaki", mail:"srahul@gmail.com",title:"Rich Dad Poor Dad",totalc:10,rem:3,lang:"English" }     
    ])
    return(
        

        data.map((item)=>{
            return( 
                <>
                <div className="d-flex mt-3  items border-bottom list px-4" key={item.key}>
                    <p className="col-2     ">{item.title}</p>
                    <p className="col-2 m-0 text-center">{item.aname}</p>
                    <p className="col-2 m-0 text-center">{item.lang}</p>
                    <p className="col-2 m-0 text-center">{item.totalc}</p>
                    <p className="col-2 m-0 text-center">{item.rem}</p>
                    <div className="d-flex gap-3 mt-2 col-2 m-0 justify-content-center">
                    <RiPencilFill className="ash"/>
                    <BsTrashFill className="trash" />
    
                    </div>  
                </ div>
                </>)
           


        })
      


    )
}
export default Content