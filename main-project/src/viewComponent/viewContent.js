import { useContext,useState } from "react"

import { adminissuedBook, adminallbooksContext } from "../App";



function ViewContent({ id ,temporaryArray,setTemparray}) {
    const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);

    const [adallbooksArray, setAdallbooksarray] = useContext(adminallbooksContext);

   console.log(temporaryArray)
    return 
        temporaryArray.map((item)=>{
         
            return(
                    <>
                    <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2">
                        <p className="col-2 ">{item.Btitle}</p>
                        <p className="col-2 m-0  text-start">{item.Btitle}</p>
                        <p className="col-2 m-0  text-start ">{item.Btitle}</p>
                        <p className="col-2 m-0  text-start">{item.Btitle}</p>
                        <p className="col-2 m-0  text-start">{item.Btitle}</p>
                        <p className="col-2 m-0  text-start">{item.Btitle}</p>
        
                    </ div>
        
        
                </>
                )
            }
        )
    
}
       

// {(issue.Fine < 0)? "-" : issue.Fine}
                        
export default ViewContent