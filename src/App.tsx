import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const[user,setUser]  = useState<any>([])
  const[firstname, setFirstname] = useState<any>()
  const[lastname, setLastname] = useState<any>()

  const [editname,setEditname] = useState<any>("")
  
  // const[user,setUser]  = useState<any[]>([])
  const submit =()=>{
   const newuser={
    fname:firstname,
    id:Date.now(),
    isEdit:false
   }
   setUser([...user,newuser])
   setFirstname("")
  }

  const del = (id:any)=>{
   setUser(user.filter((X:any)=>X.id !== id))
  }



  const sub = (id:any) =>{
    setUser(user.map((x:any) => x.id === id ? {...x,fname:editname,isEdit:false}:x))

  }
  
  return (
    <div>     
   <input type="text" name="first" onChange={(e:any)=>setFirstname(e.target.value)} value={firstname} />
   {/* <input type="text" name="last" /> */}
   {/* <input type="text" /> */}
   <button onClick={submit} >submit</button>
   
  {user.map((X:any)=>{
      const updatebtn = (id:any) => {
        setEditname(X.firstname)
        setUser(user.map((X:any) => X.id === id ? {...X,isEdit:true}:X))
       }
    return  (
      <>
      <h1>{X.fname}</h1>
      <button onClick={() =>del(X.id)}>delete</button>
      <button onClick={() => updatebtn(X.id)}>Update</button>
  
    {X.isEdit ?
    <div>
      <input placeholder="update" name={editname} onChange={(e) => setEditname(e.target.value)}/>
      <button onClick={() => sub(X.id)}>submit</button>
      </div> :
       null
      }
      

      </>
    ) 
   
  })}


   </div>
  );
}

export default App;
