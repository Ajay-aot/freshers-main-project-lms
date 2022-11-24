import React from 'react'
import Orangesidebar from '../Sidebar2'
import SearchBar from './searchBar'
import ViewHeading from './viewHeading'
import ArrowName from './arrowName'
import IndividualInfo from './individualInfo'
import { useParams } from 'react-router-dom';




function ViewMainpage() {
  let { id } = useParams();
  return (
    <div className='d-flex'>
    <Orangesidebar/>
    <div className='studentviewpage'>
  
    <ArrowName
     id={id}/>
    <IndividualInfo
    id={id}/>
    <SearchBar
    id={id}/> 
    <ViewHeading
    id={id}/>
               
    </div>
    </div>
  )
}

export default ViewMainpage