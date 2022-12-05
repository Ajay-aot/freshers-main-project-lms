import React from 'react'
import { adminissuedBook, adminallbooksContext } from "../App";
import {  useContext } from "react";
import { RiPencilFill } from "react-icons/ri";

function Content({studentkey,searchTerm}) {
    const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);
    const [adallbooksArray, setAdallbooksarray] =
    useContext(adminallbooksContext);

    const studentInfo = adissuedBooksarray.filter((obj) => {
        if (obj.Student == studentkey) {
          console.log(obj.Student)
          return obj;
        }
      });
      const studentTemparray = studentInfo.map((obj) => {
        if (obj.Student == studentkey) {
          let object = {
            // key: obj.key,
            // issuedate: obj.Issuedate,
            // duedate: obj.Duedate,
            // return: obj.return,
            // returndate: obj.returndate,
          };
    
          adallbooksArray.map((books) => {
            if (books.key == obj.Booktitle) {
              object.Btitle = books.booktitle;
              object.auther = books.Auther;
              object.languages = books.languages;
              object.totalcopies = books.totalcopies;
              object.remaining = books.remaining

            }
          });
    
        }
      });
console.log(studentkey)
console.log(adallbooksArray)
console.log(studentInfo)
    //   console.log(studentTemparray)

  return (
    studentTemparray.filter((value) => {
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
            <p className="col-2 m-0  text-start ">{item.languages}</p>
            <p className="col-2 m-0  text-start">{item.totalcopies}</p>
            <p className="col-2 m-0  text-start">{item.remaining}</p>
            <RiPencilFill
              className="ash"/>
          </div>
          </div>)
      })
  )
}

export default Content