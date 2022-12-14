import Content from './content'
function Heading({searchTerm,setSearchterm}){
    return(
        <div className='listcontent px-4 '>
       
        <div className='d-flex  mt-5 pt-3 pb-3 headings border-bottom'>
                    <p className='col-5  m-0 px-4'>Name</p>
                    <p className='col-3  m-0'>Email</p>
                    <p className='col-4  m-0 text-center'>Action</p>
                </div>
        <Content
         searchTerm={searchTerm}
         setSearchterm={setSearchterm}/>
        </div>
    )
}
export default Heading