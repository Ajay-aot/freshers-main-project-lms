import Button from "react-bootstrap/Button";
import logo2 from "./images/Logo-lib2.png";
import { MdMenuBook, MdTaskAlt, MdOutlinePeople } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


export default function Sidebar3() {

  return (

    <div className="studentsidebar col-2">

      <img className="ps-4 pt-5" src={logo2} alt="logo2"/>
        <div className="d-flex flex-column px-3 gap-3">
         <Link to="/studentmybooks">
          <Button className="mt-5 col-12 d-flex gap-2 align-items-center border-0 hoverbutton2 student-btn">
            <MdTaskAlt />
            My Books
          </Button>
          </Link>
          
       
          <Link to="/studentallbooks">
          <Button className="col-12 d-flex gap-2 align-items-center border-0 hoverbutton2 student-btn">
            <MdMenuBook />
            All Books
          </Button>
          </Link>
      
     
          
      
     </div>


     <div>

     </div>

    </div>
    )
}