import React, { useEffect, useRef, useState } from 'react'
import useAuth from '../custom-hook/Auth'
import {
  collection,
  query,
  where,getDocs,doc,setDoc,updateDoc,getDoc,serverTimestamp} from 'firebase/firestore'
  import {db} from '../fireConfig'
  import { toast} from 'react-toastify'


function Search() {
  const fUser = useRef()
  const {currentUser} = useAuth()
  const [user,setUser] = useState(null)
  const [users , setUsers] = useState(null)

  useEffect(() => {
    const readAllUsers = async () => {
      let q = collection(db,"users")
      const getData = await getDocs(q)

      getData.forEach(item => {
        setUsers(item.data())
      })
    }

    currentUser.uid && readAllUsers()
  },[currentUser.uid])

  //search handler
  const handleSearch = async()=>{
        const q = query(collection(db,'users'),where("displayName", "==", fUser.current.value))
        try {
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
              setUser(doc.data())
            })
            console.log('users',querySnapshot)
        }catch (err){
          toast.error("error searching user")
        }
  }

  const handlekey = (e) => {
    e.code === "enter" && handleSearch()
  }

  //select handler
  const handleSelect = async () => {
         console.log('user item clicked')
         if(user.displayName === currentUser.displayName) {
          toast.warning('you have selected your own data')
         }else{
            const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.id: user.id +
            currentUser.uid

            try {
              const res = await getDoc(doc(db, "chats" , combinedId))

              if(!res.exists()){
                //create a chat in chats collection
                await setDoc(doc(db, "chats" , combinedId), {messages: []})

                //create use chat
                await updateDoc(doc(db,"userchats", currentUser.uid),{
                  [combinedId + ".userInfo"] : {
                    uid: user.id,
                    displayName:user.displayName,
                    photoURL:user.photoURL
                  },
                  [combinedId + ".data"] : serverTimestamp(),
                })
                //update reciever chats
                await updateDoc(doc(db,"userchats", user.uid),{
                  [combinedId + ".userInfo"] : {
                    uid: currentUser.id,
                    displayName:currentUser.displayName,
                    photoURL:currentUser.photoURL
                  },
                  [combinedId + ".data"] : serverTimestamp(),
                })
              }
            }catch(err) {
              toast.error("error reading chat")
            }
         }
  }
  return (
     <React.Fragment>
         <div className='form-group'>
        <div className="input-group">
        <input type="search" name="" id="" ref={fUser}  onKeyDown={handlekey} 
        className='form-control' placeholder='Search Username'/>
        <button  onClick={handleSearch} className="btn btn-success"><i className="bi bi-search"></i></button>
        </div>
    </div>
    {
      user && (
        <ul className="list-group mt-3" onClick={handleSelect}>
        <li className="list-group-item" style={{cursor:'pointer'}} >
          <div className="chat d-flex justify-content-start align-items-center">
          <img src={user.photoURL} alt="" width={50} height={50} className='img-fluid rounded-circle'/>
          <div className="chatInfo ms-4">
          <h4> {user.displayName}</h4>
          </div>
          </div>
        </li>
        </ul>
     
      )
    }
    </React.Fragment>
  )
}

export default Search
