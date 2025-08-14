import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor : color}}
     > 
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
             <div className='flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >
              <button onClick={()=>setColor("red")} className='outline-none px-4 bg-red-500 rounded-full shadow-lg'>Red</button>
              <button onClick={()=>setColor("Green")} className='outline-none px-4 bg-green-500 rounded-full shadow-lg'>Green</button>
              <button onClick={()=>setColor("Blue")} className='outline-none px-4 bg-blue-500 rounded-full shadow-lg' >Blue</button>
              <button onClick={()=>setColor("yellow")} className='outline-none px-4 bg-yellow-300 rounded-full shadow-lg' >yellow</button>
              <button onClick={()=>setColor("Pink")} className='outline-none px-4 bg-pink-500 rounded-full shadow-lg' >Pink</button>
              <button onClick={()=>setColor("orange")} className='outline-none px-4 bg-orange-600 rounded-full shadow-lg' >orange</button>
              <button onClick={()=>setColor("purple")} className='outline-none px-4 bg-purple-500 rounded-full shadow-lg' >purple</button>
             </div>
        </div>
     </div>
    </>
  )
}

export default App
