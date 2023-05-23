// my exp
import React , { useState } from 'react'
import './App.css'

function App() {
  const [username,setUser]=useState("");
  const [password,setPass]=useState("");
  const handlerU = e =>{
      setUser(e.target.value)
  }
  const handlerP = e =>{
      setPass(e.target.value)
  }
  return (
    <div>
      <input type='text' placeholder='USERNAME' value={username} name='username' onChange={handlerU}/>
      <input type='password' placeholder='PASSWORD' value={password} name='password' onChange={handlerP}/>
      <button>Submit</button>
      <p>
       username : {username}
      </p>
      <p>
        password : {password}
      </p>
    </div>
  )
}

export default App