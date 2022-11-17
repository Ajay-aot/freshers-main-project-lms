import { useState } from "react"



function ViewContent(){

    const [studentData,setStudentdata] = useState([
        {key: 1 , aname:"Robert T Kiyosaki",mail:"nithasamuel@gmail.com",title:"It Start With Us",issuedate:"02-11-2022",duedate:"02-11-2022",fine:10,returndate: "02-11-2022"},
        {key: 2 , aname:"Denver Riggleman", mail:"anjali.t@hotmail.com",title:"The Breach",issuedate:"04-11-2022",duedate:"02-11-2022",fine:0,returndate: "05-11-2022"},
        {key: 3 , aname:"Colleen Hoover", mail:"srahul@gmail.com",title:"Rich Dad Poor Dad",issuedate:"06-11-2022",duedate:"02-11-2022",fine:10,returndate: "07-11-2022"}  
    ])
    return(
        

        studentData.map((item)=>{
            return( 
                
                <>
                <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2" key={item.key}>
                    <p className="col-2 ">{item.title}</p>
                    <p className="col-2 m-0  text-start">{item.aname}</p>
                    <p className="col-2 m-0  text-start ">{item.issuedate}</p>
                    <p className="col-2 m-0  text-start">{item.duedate}</p>
                    <p className="col-2 m-0  text-start">{item.returndate}</p>
                    <p className="col-2 m-0  text-start">{item.fine}</p>
                  
                </ div>
               

                </>)
        })
    )
}
export default ViewContent