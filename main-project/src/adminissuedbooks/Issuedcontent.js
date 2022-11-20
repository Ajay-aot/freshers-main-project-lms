import { useState } from "react"
import {MdOutlineAssignmentReturn} from 'react-icons/md'
import { adminissuedBook } from '../App'
import { useContext } from 'react';

function Issuedcontent(){

    const [adissuedBooksarray,setAdissuedbooksarray] = useContext(adminissuedBook)
    
    return(
        

        adissuedBooksarray.map((item)=>{
            return( 
                
                <>
                <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2" key={item.key}>
                    <p className="col-2 ">{item.Booktitle}</p>
                    <p className="col-2 m-0  text-start">{item.Student}</p>
                    <p className="col-2 m-0  text-start ">{item.Issuedate}</p>
                    <p className="col-2 m-0  text-start">{item.Duedate}</p>
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