import React from 'react'
import { useContext } from 'react'
import { BsBookmarkStar } from 'react-icons/bs';
import { studentContext,adminissuedBook,adminallbooksContext } from "../App";

function IndividualInfo({ id,setTemparray,temporaryArray} ) {
    const [studentArray, setStudentarray] = useContext(studentContext);
    const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);
    const [adallbooksArray, setAdallbooksarray] = useContext(adminallbooksContext);

    const returnedBookscount = adissuedBooksarray.filter((obj)=>{

        if(obj.Student == id){
            
            return(obj)
        }
    })
    // console.log(returnedBookscount.length)
    // console.log(id)

    const tempArray = returnedBookscount.map((obj)=>{
            if(obj.Student == id){
                let object = {
                    key:obj.key,
                    issuedate:obj.Issuedate,
                    duedate:obj.Duedate,
                    return:obj.return,
                    returndate:obj.returndate }
            
            adallbooksArray.map((books)=>{
               if(books.key == obj.Booktitle){
                 object.Btitle = books.booktitle
                 object.auther = books.Auther
               }
            })
            return  object
        }  
        
    }
    )
   
    // setTemparray(tempArray)
    // console.log(temporaryArray)




    let returnCount = 0

    tempArray.map((obj)=>{
        if(obj.return != false){
           returnCount = returnCount+1
        }
    })





   

    return (
        <div className='border mx-5 mt-4 d-flex justify-content-between p-3 bg-white ' style={{ borderRadius: '10px' }}>
            <div>
                <p className='list'>{studentArray.map((item) => {


                    if (item.key == id) {
                        return (item.name)

                    }
                })}</p>
                <p>{studentArray.map((item) => {


                    if (item.key == id) {
                        return (item.email)

                    }
                })}</p>
            </div>
            <div className='border-start ps-3'>
                <div className='d-flex gap-3'>
                    <p>Total Books issued</p>
                    <p>{tempArray.length}</p>
                </div>
                <div className='d-flex gap-4'>
                    <p>Returned Books</p>
                    <p>{returnCount}</p>
                </div>
                <div className='d-flex gap-4'>
                    <p>Total Fine</p>
                    <p></p>
                </div>


            </div>
        </div>
    )
}

export default IndividualInfo