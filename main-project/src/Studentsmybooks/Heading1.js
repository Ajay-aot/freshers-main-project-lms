import React from 'react'

function Heading1({pcount,rcount,studentInfo}) {
  return (
    <div className='d-flex headings mt-4 gap-5 border-bottom'>
        <p>Issued Books ({studentInfo.length})</p>
        <p>Pending to return ({pcount})</p>
        <p>Returned Books ({rcount})</p>
    </div>
  )
}

export default Heading1