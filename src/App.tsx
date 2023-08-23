import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const[user,setUser]  = useState({
    first:"",
    last:""
  })
  
  // const[user,setUser]  = useState<any[]>([])
 const handleChange = (event:any)=>{
  console.log(event.target);
    setUser({...user,[event.target.name]:event.target.value})
   console.log(`first:${user.first}---last:${user.last} `)
  
 }
  return (
    <div>
   <input type="text" onChange={handleChange} name="first" />
   <input type="text" onChange={handleChange} name="last" />
   {/* <input type="text" /> */}

   </div>
  );
}

export default App;
