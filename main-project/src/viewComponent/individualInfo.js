import React from 'react'

function IndividualInfo() {
  return (
    <div className='border mx-5 mt-4 d-flex justify-content-between p-3'>
        <div>
            <p className='list'>Nitha Samuel</p>
            <p>nithasamuel@gmail.com</p>
        </div>
        <div className='border-start ps-3'>
            <div className='d-flex gap-3'>
                <p>Total Books issued</p>
                <p>5</p>
            </div>
            <div className='d-flex gap-4'>
                <p>Returned Books</p>
                <p>4</p>
            </div>
            <div className='d-flex gap-4'>
                <p>Total Fine</p>
                <p>Rs.70</p>
            </div>
            
           
        </div>
    </div>
  )
}

export default IndividualInfo