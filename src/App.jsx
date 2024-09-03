import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Testbtn({mycount,mysetcount})
{

  return(
    <>
     <div className="card">
        <button onClick={()=>mysetcount((mycount) => mycount + 1)}>
        count is {mycount}
        </button>
     </div>
    </>
  )
 
}

function Visualbtn({mycount})
{

  return(
    <>
     <div className="card">
       count is again {mycount}
     </div>
    </>
  )
 
}

function App(){
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      <Visualbtn mycount={count}/>
      <Testbtn mycount={count} mysetcount={setCount}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
