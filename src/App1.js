import React, { useState , useEffect } from 'react'
import './App.css'
// react hooks
const App = () =>{
  const name_2="varun__"
  const [val,inc]= useState(0);
  const [name,setName]=useState("Skillhub");
  useEffect(()=>console.log(val),[val]);
  return (
    <div>
        <h1>{name}</h1>
          <button onClick={()=>inc(val+1)}>Click</button>
        <h2>
          Number of clicks : {val}
        </h2>
      </div>
  )
}

export default App