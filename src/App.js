
import './App.css';
import  ClientData from "./ClientData";
import { useState } from 'react';
import UserWindow from "./UserWindow";
function App() {
  const [pin,setPin]=useState(null);
  let loggedIn=false;
  let user="";
  ClientData.map(e=>{
    if(e.userPin===pin){
      loggedIn=true;
      user=e
    }
  
  })
  
  return (
    <div className="App">
      {loggedIn===false?<h2>Hello User Enter PIN </h2>:<h2>Hello {user.userName}</h2>}
    <input type="number" onChange={(e)=>setPin(e.target.value)}/>

    {loggedIn?<UserWindow userdata={user}/>:null}
    </div>
  );
}

export default App;
