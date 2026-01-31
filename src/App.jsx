import { useCallback, useEffect, useState, useRef } from "react"


function App() {
  const [length, SetLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [CharsAllow, setCharsAllow] = useState(false)

  const passwordRef = useRef()

  const generatePass = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (CharsAllow) str += "!@#$%^&*()_+}{"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [numberAllowed, CharsAllow, length])

  useEffect(()=>{
    generatePass()
  },[numberAllowed,CharsAllow,length])

  const handleCopy =()=>{
    passwordRef.current.select()
    navigator.clipboard.writeText(password)
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center  bg-gray-950">
      <div className="w-1/2 h-52 rounded-2xl bg-gray-700">

        <div className="password overflow-hidden ml-6 flex justify-end h-16 mt-6 rounded-2xl w-[90%] bg-white">
          {/* <div ref={passwordRef} className="w-full text-2xl flex p-3">
            {password}
          </div> */}
          <input type="text" value={password} className="w-full text-2xl flex p-3" readOnly ref={passwordRef}  />
          <div onClick={handleCopy} className="bg-blue-700  w-20 flex text-xl text-white cursor-pointer justify-center items-center hover:w-21 hover:text-2xl hover:bg-blue-800">
            copy
          </div>
        </div>
        <div className="flex justify-center text-xl text-green-50 gap-9 mt-8">
          <input value={length} onChange={(e) => SetLength(e.target.value)} min={4} max={40} type="range" name="range"/>
          <label htmlFor="range">length({length})</label>
          <input defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} type="checkbox" name="numbers"/>
          <label htmlFor="range">Numbers</label>
          <input defaultChecked={CharsAllow} onChange={()=> setCharsAllow((prev)=>!prev)} type="checkbox" name="characters"/>
          <label  htmlFor="range">Characters</label>
        </div>
      </div>
    </div>
  )
}


export default App
