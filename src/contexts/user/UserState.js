import UserContext from './UserContext'
// import {useState} from "react";

function UserState(props) {

  const host = "https://i-notebook-backend.glitch.me"
    
    //login user

    const login=async(email, password)=>{
        
        const response = await fetch(`${host}/api/user/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
          });
          const json = await response.json()

          return json
    }

    const signUp = async (name, email, password)=>{

        const response = await fetch(`${host}/api/user/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
          });
          const json = await response.json()
          return json

    }
    
  return (
    <UserContext.Provider value={{login, signUp}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState
