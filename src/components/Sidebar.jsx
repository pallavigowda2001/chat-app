import React from 'react'
import  Search  from './search'

function Sidebar() {
  return (
    <div className='card mt-2' style={{height:'80vh'}}>
        <div className="card-header">
            sidebar
        </div>
        <div className="card-body">
            <Search/>
        </div>
    </div>
  )
}

export default Sidebar
