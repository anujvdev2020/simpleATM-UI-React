import React, { useState } from 'react'
import './App.css'
import ClientData from './ClientData'

function UserWindow(props){
    let ubal=props.userdata.userBal;
    let upin=props.userdata.userPin;
   
   
   


    const ChangePin=(props)=>{
        const [pin,setPin]=useState("");
        const [pinchange,setStatus]=useState(false)
        let p=null;
        function handlepinClick(){
            ClientData.map((e,i)=>{
                if(e.userPin===upin){
                ClientData[i].userPin=pin;
                p=ClientData[i].userPin;
                setStatus(!pinchange)
                console.log(p)
            
                
                }
                
            })
        }
       
        return(
            <div className="App">
              <h1>Old Pin is {props.old_pin}</h1>
                <input type="text" onChange={(e)=>{setPin(e.target.value)}}/>
                {pinchange?<h1>New Pin is{pin}</h1>:null}
                 <button onClick={()=>handlepinClick()}>Enter New Pin</button>
        
            </div>
        )
        
    }
   

  const[show_bal,setBal]=useState(false)
const [newpin,setPin]=useState(false)
  
    return (
        <div className="App">
            {show_bal?<h1>Balance is {ubal}</h1>:null}
            <button onClick={()=>setBal(!show_bal)}>Get Balance</button>
            <br/>

            {newpin?<ChangePin old_pin={upin}/>:null}
            <button onClick={()=>setPin(!newpin)}>Change PIN</button>
            <br/>
            <button>Change User Name</button>
           
           

        </div>
    )
}

export default UserWindow