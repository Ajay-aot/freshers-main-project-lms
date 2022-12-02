import React from 'react'
import Sidebar3 from '../Sidebar3'
import SearchSection from './SearchSection'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Contents from './Contents'


function MyBooks() {
  return (
    <div className='d-flex '>
       <Sidebar3/>
       <div className='studentallbooks col p-4'>
       <p className="login border-bottom pb-2">My Books</p>
       <SearchSection/>
       <Heading1/>
       <Heading2/>
       <Contents/>
      </div>
     
      
      
      
      
       

      
    </div>
  )
}

export default MyBooks