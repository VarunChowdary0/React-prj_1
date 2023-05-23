
import React, { useState } from 'react'
import './App.css'

function App() {
  const [data,setData]=useState({
    username:"",
    password:""
  })
  const {username,password}=data;
  const handleAll=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const showData=e=>{
    e.preventDefault();
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={showData}>
        <input type='text' placeholder='USERNAME' value={username} name='username' onChange={handleAll}/>
        <input type='password' placeholder='PASSWORD' value={password} name='password' onChange={handleAll}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default App