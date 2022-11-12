import logo2 from './images/Logo-lib2.png'
import Button from 'react-bootstrap/Button';
import {MdMenuBook,MdTaskAlt,MdOutlinePeople} from 'react-icons/md'

function Orangesidebar(){
    return(
        <div className='left col-2'>
        <img className='ps-4 pt-5' src={logo2} alt='logo2'></img>
        <div className='d-flex flex-column px-3 gap-3'>
        <Button className='mt-5 col-12 d-flex gap-2 align-items-center border-0'><MdTaskAlt/>Issued Books</Button>{' '}
        <Button className='col-12 d-flex gap-2 align-items-center border-0'><MdMenuBook/>All Books</Button>{' '}
        <Button className='col-12 d-flex gap-2 align-items-center border-0'><MdOutlinePeople/>Students</Button>{' '}
        </div>
        
        </div>
    )
}
export default Orangesidebar