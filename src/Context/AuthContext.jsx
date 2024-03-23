import React, { createContext,useEffect,useState}from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../fireConfig'

export const AuthContext = createContext()

function AuthProvider(props) {

    //current userinfo after login authentication
    const [currentUser,setCurrentUser] = useState(false)

    //current login user info

    useEffect(() =>{
      //invoke on mount
      const unsub = onAuthStateChanged(auth, user=> {
        console.log(`user info`,user,)
        setCurrentUser(user)

      })

      return () => {
        unsub()
      }
    },[])
  return (
    <AuthContext.Provider value={{currentUser}}>
           {
            props.children
           }
    </AuthContext.Provider>
  )
}

export default AuthProvider
