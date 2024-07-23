import { useState } from 'react'
import './Components/Fruits'
import './App.css'
import Fruits from './Components/Fruits'
import './Components/Students'
import Students from './Components/Students'
import './Components/UserGreeting'
import UserGreeting from './Components/UserGreeting.jsx'
import Colors from './Components/Colors'

function App() {
  const [count, setCount] = useState(0)

  return (
 
    <>
     <Fruits/>
      <hr/>
     <Students name="Luna" age={30} isStudent={true}/>
     <Students name="Aljun" age={14} isStudent = {false}/>
    <Students name="Lando" age= {49} isStudent = {true}/>
    
   <UserGreeting isloggedIn= {false} username= "Aljun"/>
   <Colors/>
    </>
   
    
     
  )
}

export default App
