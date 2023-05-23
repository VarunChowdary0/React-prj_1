import React ,{useState} from 'react'
import './App.css'

const App=()=> {
  const [username,setName]=useState("");
  const handler= e =>{
    setName(e.target.value)
  }
  return (
    <div>
      <input type='text' placeholder='Username' value={username} name='username'
      onChange={handler}
      />
      <p>{username}</p>
    </div>
  )
  }
export default App