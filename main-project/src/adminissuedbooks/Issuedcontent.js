import { useState } from "react"
import {MdOutlineAssignmentReturn} from 'react-icons/md'


function Issuedcontent(){

    const [data,setData] = useState([
        {key: 1 , name:"Nitha Samuel",mail:"nithasamuel@gmail.com",title:"It Start With Us",issuedate:"02-11-2022",duedate:"02-11-2022",fine:10 },
        {key: 2 , name:"Anjali Thomas", mail:"anjali.t@hotmail.com",title:"The Breach",issuedate:"04-11-2022",duedate:"02-11-2022",fine:0},
        {key: 3 , name:"Rahul S", mail:"srahul@gmail.com",title:"Rich Dad Poor Dad",issuedate:"06-11-2022",duedate:"02-11-2022",fine:10}  
    ])
    return(
        

        data.map((item)=>{
            return( 
                
                <>
                <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2" key={item.key}>
                    <p className="col-2 ">{item.title}</p>
                    <p className="col-2 m-0  text-start">{item.name}</p>
                    <p className="col-2 m-0  text-start ">{item.issuedate}</p>
                    <p className="col-2 m-0  text-start">{item.duedate}</p>
                    <p className="col-2 m-0  text-start">{item.fine}</p>
                    <div className="d-flex gap-3  mt-1 ash justify-content-center">
                    <MdOutlineAssignmentReturn/>
                    </div>  
                </ div>
               

                </>)
        })
    )
}
export default Issuedcontent