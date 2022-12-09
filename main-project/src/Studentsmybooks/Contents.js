import React from "react";
import { adminissuedBook, adminallbooksContext, studentContext } from "../App";
import { useState, useContext, useEffect } from "react";
import DateDiff from "date-diff";
import Heading2 from "./Heading2";
import Heading1 from "./Heading1"; 


function Contents({searchTerm,mybooksSort,setMybooksort}) {
  const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);
  const [adallbooksArray, setAdallbooksarray] =
  useContext(adminallbooksContext);

  let studentkey = sessionStorage.getItem("studentunequekey");

  const studentInfo = adissuedBooksarray.filter((obj) => {
    if (obj.Student == studentkey) {
      // console.log(obj.Student)
      return obj;
    }
  });
  // setstudentinfo(studentInfo)
  
  let pcount = 0
  studentInfo.map((item)=>{
    if(item.return == false){
      pcount = pcount+1
    }
  })
  // setPcount(pcount)
  let rcount = 0
  studentInfo.map((item)=>{
    if(item.return == true){
      rcount = rcount+1
    }
  })

    
   
    
  
  

  const studentTemparray = studentInfo.map((obj) => {
    if (obj.Student == studentkey) {
      let object = {
        key: obj.key,
        issuedate: obj.Issuedate,
        duedate: obj.Duedate,
        return: obj.return,
        returndate: obj.returndate,
      };

      adallbooksArray.map((books) => {
        if (books.key == obj.Booktitle) {
          object.Btitle = books.booktitle;
          object.auther = books.Auther;
        }
      });

      var date1 =
      obj.returndate == "" ? new Date() : new Date(obj.returndate);
      var date2 = new Date(obj.Duedate);
      var diff = new DateDiff(date1, date2);
      object.fine = Math.floor(diff.days()) * 10;
      return object;
    }
  });

  // setMybooksort(studentTemparray)
  // console.log(mybooksSort)
  // console.log(studentkey)
  return (
    <>

    <Heading1
    studentInfo={studentInfo}
    pcount={pcount}
    rcount={rcount}/>
    <Heading2/>
    
    { studentTemparray.filter((value) => {
      if (searchTerm == "") {
        return value;
      } else if (
        value.Btitle.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return value;
      } else if (
        value.auther.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return value;
      }
    }).map((item)=>{
      return(
        <div>
        <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2">
          <p className="col-2 ">{item.Btitle}</p>
          <p className="col-2 m-0  text-start">{item.auther}</p>
          <p className="col-2 m-0  text-start ">{item.issuedate}</p>
          <p className="col-2 m-0  text-start">{item.duedate}</p>
          <p className="col-2 m-0  text-start">{item.return}</p>
          <p className="col-2 m-0  text-start">{item.fine < 0 ? "-" : item.fine}</p>
        </div>
        </div>)
    })}
 </>   
)
}
export default Contents;
