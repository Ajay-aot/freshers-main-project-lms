import { useState } from "react"
import {MdOutlineAssignmentReturn} from 'react-icons/md'
import { adminissuedBook,adminallbooksContext,studentContext } from '../App'
import { useContext } from 'react';

function Issuedcontent(){

    const [adissuedBooksarray,setAdissuedbooksarray] = useContext(adminissuedBook)
    const [adallbooksArray, setAdallbooksarray] = useContext(adminallbooksContext);
    const [studentArray, setStudentarray] = useContext(studentContext);
    
    return(
        

        adissuedBooksarray.map((item)=>{
            return( 
                
                <>
                <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2" key={item.key}>
                    {adallbooksArray.map((allbooks)=>{
                         //console.log(item.Booktitle)
                        if(allbooks.key == item.Booktitle){
                            console.log(allbooks.key)
                            console.log(item.Booktitle)
                            return( <p className="col-2 ">{allbooks.booktitle}</p>)
                          
                        }
                    })}
                    {studentArray.map((student)=>{
                        // console.log(student)
                       if(student.key == item.Student){
                        return(<p className="col-2 m-0  text-start">{student.name}</p>)
                          
                       }
                    })

                    }
                    
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