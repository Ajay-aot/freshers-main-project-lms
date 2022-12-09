import React from 'react'
import { adminissuedBook, adminallbooksContext } from "../App";
import {  useContext } from "react";
import { BsEye } from "react-icons/bs";

function Content({searchTerm}) {
    const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);
    const [adallbooksArray, setAdallbooksarray] =
    useContext(adminallbooksContext);

    // let studentkey = sessionStorage.getItem("studentunequekey");
    
 
    // const studentInfo = adissuedBooksarray.filter((obj) => {
    //     if (obj.Student == studentkey) {
    //       console.log(obj.Student)
    //       return obj;
    //     }
    //   });
    //   console.log(adallbooksArray)
    //   console.log(studentInfo)
    //   console.log(studentkey)
    //   const studentTemparray = studentInfo.map((obj) => {
    //     if (obj.Student == studentkey) {
           
    //       let object = {
            // key: obj.key,
            // issuedate: obj.Issuedate,
            // duedate: obj.Duedate,
            // return: obj.return,
            // returndate: obj.returndate,
        //   };
    
    //       adallbooksArray.map((books) => {
    //         // console.log(books.key)
    //         // console.log(obj.Booktitle)
    //         if (books.key == obj.Booktitle) {
    //             // console.log("heeeeeeeeeeeeeeeeeeeeeeeeeey")
    //           object.Booktitle = books.booktitle;
    //           object.auther = books.Auther;
    //           object.languages = books.languages;
    //           object.totalcopies = books.totalcopies;
    //           object.remaining = books.remaining

    //         }
    //       });
    
    //     }
    //   });

    
// console.log(studentkey)
// console.log(adallbooksArray)
// console.log(studentInfo)
    //   console.log(studentTemparray)
console.log(adallbooksArray)
  return (
    adallbooksArray.filter((value) => {
        if (searchTerm == "") {
          return value;
        } else if (
          value.booktitle.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value;
        } else if (
          value.Auther.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value;
        }
      }).map((item)=>{
        return(
          <div>
          <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2">
            <p className="col-2 ">{item.booktitle}</p>
            <p className="col-2 m-0  text-start">{item.Auther}</p>
            <p className="col-2 m-0  text-start ">{item.languages}</p>
            <p className="col-2 m-0 ms-3 text-start">{item.totalcopies}</p>
            <p className="col-2 m-0  text-start">{item.remaining}</p>
            <BsEye className=" ash mb-3 mt-1" />
          </div>
          </div>)
      })
  )
}

export default Content