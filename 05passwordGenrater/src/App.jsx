import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef=useRef(null);

  const passwordGenratoer = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specials = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    // Guarantee at least one number if allowed
    if (numberAllowed) {
      pass += numbers.charAt(Math.floor(Math.random() * numbers.length));
      str += numbers;
    
    }
  
    // Guarantee at least one special char if allowed
    if (charAllowed) {
      pass += specials.charAt(Math.floor(Math.random() * specials.length));
      str += specials;
    }
  
    // Fill remaining length
    while (pass.length < length) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
      
    }
  
    // Shuffle password so guaranteed chars are not always at start
    pass = pass.split('').sort(() => Math.random() - 0.5).join('');
  
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  

  useEffect( ()=>{
    passwordGenratoer();
  },[length, numberAllowed, charAllowed, passwordGenratoer])

  const copyPasswordClipboard = useCallback(() => {
   
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 100);
      navigator.clipboard.writeText(password)
   
  }, [password]);
  

  return (
    <>
  <div className="  w-full max-w-md max-h-md shadow-md rounded-lg px-4 pb-3  my-10 text-orange-500 bg-gray-700 mb-5">
    <h1 className="text-white text-center my-3">Password Generator</h1>

    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 bg-white"
        placeholder="password"
        readOnly
        ref={passwordRef}
        
      />
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"  onClick={copyPasswordClipboard}>
        Copy
      </button>
    </div>

    <div className="flex text-sm gap-x-2 mb-3">
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length : {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          className="cursor-pointer"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label>Number</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          className="cursor-pointer"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label>Special char</label>
      </div>
    </div>
  </div>
</>

  )
}

export default App
