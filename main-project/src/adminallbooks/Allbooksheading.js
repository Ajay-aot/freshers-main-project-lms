import Content from './Allbookcontent'
function Allbooksheading({allbooksearchTerm,setAllbooksearchterm}){
    return(
        <div className='listcontent px-4 '>
       
        <div className='d-flex py-4 px-4 mt-5 pt-3  headings border-bottom'>
                    <p className=' col-2 m-0 '>Book Title</p>
                    <p className=' col-2 m-0 text-center'>Author</p>
                    <p className=' col-2 m-0 text-center'>Language</p>
                    <p className=' col-2 m-0 text-center '>Total Copies</p>
                    <p className=' col-2 m-0 text-center'>Remaining</p>
                    <p className=' col-2 m-0 text-center'>Actions</p>
                </div>
        <Content
         allbooksearchTerm={allbooksearchTerm}
         setAllbooksearchterm={setAllbooksearchterm}/>
        </div>
    )
}
export default Allbooksheading