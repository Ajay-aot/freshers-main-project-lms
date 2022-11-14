import Issuedcontent from './Issuedcontent'
function Issuedheading(){
    return(
        <div className='listcontent '>
        
        <div className='d-flex pt-3 pb-1 px-4 mt-5  gap-2 headings border-bottom'>
                    <p className='col-2 m-0 '>Book Title</p>
                    <p className='col-2 m-0 text-start'>Student</p>
                    <p className='col-2 m-0 text-start'>Issue Date</p>
                    <p className='col-2 m-0  text-start'>Due Date</p>
                    <p className='col-2 m-0 text-start'>Fine<br></br>(Rs.10 per day)</p>
                    <p className='col-2 m-0 text-start'>Actions</p>
                </div>
        <Issuedcontent/>
        </div>
    )
}
export default Issuedheading