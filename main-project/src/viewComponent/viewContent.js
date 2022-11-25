import { useContext } from "react"

import { adminissuedBook, adminallbooksContext } from "../App";



function ViewContent({ id }) {
    const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);

    const [adallbooksArray, setAdallbooksarray] = useContext(adminallbooksContext);


    return (

        adissuedBooksarray.map((issue)=>{
            if(issue.Student == id){
                return(
                    <>
                    <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2">
                        <p className="col-2 ">{adallbooksArray.map((items)=>{
                            if(items.key == issue.Booktitle){
                                return(items.booktitle)
                            }
                        })}</p>
                        <p className="col-2 m-0  text-start">
                        {adallbooksArray.map((items)=>{
                            if(items.key == issue.Booktitle){
                                return(items.Auther)
                            }
                        })}
                        </p>
                        <p className="col-2 m-0  text-start ">
                            {issue.Issuedate}
                        </p>
                        <p className="col-2 m-0  text-start">{issue.Duedate}</p>
                        <p className="col-2 m-0  text-start">{issue.returndate}</p>
                        <p className="col-2 m-0  text-start">{(issue.Fine < 0)? "-" : issue.Fine}</p>
        
                    </ div>
        
        
                </>
                )
            }
        })
    )
}
       


                        
export default ViewContent