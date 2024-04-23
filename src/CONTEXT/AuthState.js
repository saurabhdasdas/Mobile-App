import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
const AuthState = (props) => {
    const [AuthValue, setAuthValue] = useState(false);

    useEffect(()=>{
        let user=JSON.parse(localStorage.getItem('login'))
        console.log(user)
        if(user===true){
            setAuthValue(true)
        }else{
            setAuthValue(false)
        }
    },{AuthValue})
  return (
    <AuthContext.Provider value={{setAuthValue,AuthValue}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
