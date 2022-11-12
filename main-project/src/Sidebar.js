import React from 'react'
import logo from './images/Logo-lib.png'
// import './Sidebar.css'

export default function Sidebar(){
    return(

        <div className='d-flex p-5 gap-2'>
            <img src={logo} alt= "logo"></img>
            <p className='lmc d-flex'>LMC</p>
        </div>
    )
}

