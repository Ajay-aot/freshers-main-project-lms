import Button from "react-bootstrap/Button";
import logo2 from "./images/Logo-lib2.png";
import { MdMenuBook, MdTaskAlt, MdOutlinePeople } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Orangesidebar() {

  return (

    <div className="left col-2">

      <img className="ps-4 pt-5" src={logo2} alt="logo2"/>
        <div className="d-flex flex-column px-3 gap-3">
        <Link to="/issuedbooks">
          <Button className="mt-5 col-12 d-flex gap-2 align-items-center border-0 hoverbutton">

            <MdTaskAlt />
            Issued Books
          </Button>
        </Link>
        <Link to="/allbooks">
          <Button className="col-12 d-flex gap-2 align-items-center border-0 hoverbutton">
            <MdMenuBook />
            All Books
          </Button>
        </Link>
        <Link to="/students">
          <Button className="col-12 d-flex gap-2 align-items-center border-0 hoverbutton">
            <MdOutlinePeople />
            Students
          </Button>
        </Link>
     </div>


     <div>

     </div>

    </div>
    )
}
