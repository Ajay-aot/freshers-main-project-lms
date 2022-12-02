import React, { useEffect } from 'react'
import { useContext } from 'react'
import { BsBookmarkStar, BsSlashLg } from 'react-icons/bs';
import { studentContext,adminissuedBook,adminallbooksContext } from "../App";
import DateDiff from 'date-diff';

function IndividualInfo({ id,setTemparray,temporaryArray} ) {
    const [studentArray, setStudentarray] = useContext(studentContext);
    const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);
    const [adallbooksArray, setAdallbooksarray] = useContext(adminallbooksContext);

    const returnedBookscount = adissuedBooksarray.filter((obj)=>{

        if(obj.Student == id){
            
            return(obj)
        }
    })
   
    let tempArray = []
    
   
useEffect(() => {
    
     tempArray = returnedBookscount.map((obj)=>{
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

        var date1 = obj.returndate == "" ? new Date() : new Date(obj.returndate)
        var date2 = new Date(obj.Duedate);
        var diff = new DateDiff(date1, date2); 
        object.fine = Math.floor(diff.days())*10
        // console.log(object.fine)
         
        // fine =  fine + object.fine
        

        return  object
    }})
// console.log(tempArray.length)

setTemparray(tempArray) 
}, [])


    




    let fine = 0
    let returnCount = 0

    temporaryArray.map((obj)=>{
        // console.log((obj.return))
        if(obj.return != false){
           returnCount = returnCount+1
        }
        if(obj.fine>0){
            fine = fine+ obj.fine
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
                    <p>{temporaryArray.length}</p>
                </div>
                <div className='d-flex gap-4'>
                    <p>Returned Books</p>
                    <p>{returnCount}</p>
                </div>
                <div className='d-flex gap-4'>
                    <p>Total Fine</p>
                    <p>{fine}</p>
                </div>


            </div>
        </div>
    )
}

export default IndividualInfo