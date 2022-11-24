import { useContext } from "react"

import { adminissuedBook, adminallbooksContext } from "../App";



function ViewContent({id}){
    const [adissuedBooksarray, setAdissuedbooksarray] = useContext(adminissuedBook);

    const [adallbooksArray, setAdallbooksarray] = useContext(adminallbooksContext);

    
    return(
        

       
        adallbooksArray.map((item)=>{
            if(item.key == id){
                return(<>
                    <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2" key={item.key}>
                        <p className="col-2 ">{item.booktitle}</p>
                        <p className="col-2 m-0  text-start">{item.aname}</p>
                        <p className="col-2 m-0  text-start ">{item.issuedate}</p>
                        <p className="col-2 m-0  text-start">{item.duedate}</p>
                        <p className="col-2 m-0  text-start">{item.returndate}</p>
                        <p className="col-2 m-0  text-start">{item.fine}</p>
                      
                    </ div>
                   
    
                    </>)
            }
           
        })  
                
                    
            
           
        )
    
}
export default ViewContent