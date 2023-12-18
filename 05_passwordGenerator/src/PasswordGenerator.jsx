import { useCallback, useEffect, useRef, useState } from 'react'

import './index.css'

function PasswordGenerator() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let passwd = ''
    let str = 'ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+= '0123456789'
    if(charAllowed) str+= '!@#$%&*_/^-~`'

    for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)

        passwd += str.charAt(char);
      
    }

    setPassword(passwd)
  

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswdToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 12)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  
  
 

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500 mt-14'> 
      <h1 className='text-white text-center mb-4 text-xl'>Password Generator</h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswdToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-xl font-extralight'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label > Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }} 
          />
          <label htmlFor="numerInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }} />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>


    </>
  )
}

export default PasswordGenerator
