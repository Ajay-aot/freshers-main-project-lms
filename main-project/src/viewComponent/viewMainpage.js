import React from 'react'
import Orangesidebar from '../Sidebar2'
import SearchBar from './searchBar'
import ViewHeading from './viewHeading'
import ArrowName from './arrowName'
import IndividualInfo from './individualInfo'




function ViewMainpage() {
  return (
    <div className='d-flex'>
    <Orangesidebar/>
    <div className='studentviewpage'>
    <ArrowName/>
    <IndividualInfo/>
    <SearchBar/> 
    <ViewHeading/>
               
    </div>
    </div>
  )
}

export default ViewMainpage