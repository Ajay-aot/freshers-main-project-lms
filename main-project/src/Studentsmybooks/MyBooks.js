import React from 'react'
import Sidebar3 from '../Sidebar3'

function MyBooks() {
  return (
    <div className='d-flex '>
       <Sidebar3/>
       <div className='studentallbooks col p-4'>
       <p className="login border-bottom pb-2">All Books</p>
       {/* <hr ></hr> */}
       </div>
      

      
    </div>
  )
}

export default MyBooks