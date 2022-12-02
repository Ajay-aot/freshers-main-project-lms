
function ViewContent({ id ,temporaryArray,searchTerm,setSearchterm}) {
    return (
        temporaryArray.filter((value) => {
            if (searchTerm == "") {
              return value;
            } else if (
              value.Btitle.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            } else if (value.auther.toLowerCase().includes(searchTerm.toLowerCase())) {
              return value;
            }
          }).map((item)=>{
         
            return(
                    <>
                    <div className="d-flex mt-3  px-4  items border-bottom list px-4 gap-2">
                        <p className="col-2 ">{item.Btitle}</p>
                        <p className="col-2 m-0  text-start">{item.auther}</p>
                        <p className="col-2 m-0  text-start ">{item.issuedate}</p>
                        <p className="col-2 m-0  text-start">{item.duedate}</p>
                        <p className="col-2 m-0  text-start">{item.returndate}</p>
                        <p className="col-2 m-0  text-start">{item.fine}</p>
        
                    </ div>
        
        
                </>
                )}))   
}
                        
export default ViewContent