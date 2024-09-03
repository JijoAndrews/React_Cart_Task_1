import { useState } from 'react'
import '../Components/style.css'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
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


const Bodycontent = ({mycount,mysetcount}) => {
  return (

    <>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Card mycount={mycount} mysetcount={mysetcount}/>
                </div>
            </div>
        </section>
    </>
  )
}


function App(){
  const [count, setCount] = useState(0)

  return (
    <> 
     <Navbar totalcounter={count}/>
     <Bodycontent  mycount={count} mysetcount={setCount}/>
      <h1>Vite + React</h1>

      <Visualbtn mycount={count}/>
      <Testbtn mycount={count} mysetcount={setCount}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
