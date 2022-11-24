import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { useContext } from 'react'
import { studentContext } from "../App";

function ArrowName({id}) {
  const [studentArray, setStudentarray] = useContext(studentContext);
  

  return (
    <div className='ms-5 mt-3 d-flex border-bottom'>
    <div >
    <IoIosArrowBack/>
    </div>
    <p>Students/{studentArray.map((item)=>{
    
    
    if(item.key == id){
      return(item.name )
            
    }
    })}</p>
    </div>)

  
 
}

export default ArrowName