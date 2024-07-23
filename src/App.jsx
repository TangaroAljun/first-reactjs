import { useState } from 'react'
import './Components/Fruits'
import './App.css'
import Fruits from './Components/Fruits'
import './Components/Students'
import Students from './Components/Students'

function App() {
  const [count, setCount] = useState(0)

  return (
 
    <>
     <Fruits/>
      <hr/>
     <Students name="Lana" age={30} isStudent={true}/>
     <Students name="Aljun" age={14} isStudent = {false}/>
    <Students name="Lando" age= {49} isStudent = {true}/>
    </>
   
    
     
  )
}

export default App
