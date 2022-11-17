import ViewContent from './viewContent'
function ViewHeading(){
    return(
        <div className='listcontent px-5 '>
        
        <div className='d-flex pt-3 pb-1 px-4 mt-3  gap-2 headings border-bottom'>
                    <p className='col-2 m-0 '>Book Title</p>
                    <p className='col-2 m-0 text-start'>Auther</p>
                    <p className='col-2 m-0 text-start'>Issue Date</p>
                    <p className='col-2 m-0  text-start'>Due Date</p>
                    <p className='col-2 m-0 text-start'>Return Date</p>
                    <p className='col-2 m-0 text-start'>Fine<br></br>(Rs.10 per day)</p>
                    
                </div>
        <ViewContent/>
        </div>
    )
}
export default ViewHeading