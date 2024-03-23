import React, { useRef, useState } from 'react'
import useAuth from '../custom-hook/Auth'
import {
  collection,
  query,
  where,getDocs,doc,setdoc,updateDoc,getDoc,serverTimestamp} from 'firebase/firestore'
  import {db} from '../fireConfig'
  import { toast} from 'react-toastify'


function Search() {
  const fUser = useRef()
  const {currentUser} = useAuth()
  const [user,setUser] = useState(null)

  //search handler
  const handleSearch = async()=>{

  }

  const handlekey = (e) => {
    e.code === "enter" && handleSearch()
  }
  return (
    <div className='form-group'>
        <input type="search" name="" id="" ref={fUser}  onKeyDown={handlekey} className='form-control' placeholder='Search Username'/>
    </div>
  )
}

export default Search
