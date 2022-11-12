import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Search(){
    return(
        <div className="d-flex justify-content-between mt-4">
            <form className="col-6 ">
             <Form.Control type="email" placeholder="Search by student name or email " />
            
             </form>  
             <Button className="border-0" type="submit">
             Add New Student
             </Button> 
        </div>
    )
}
export default Search