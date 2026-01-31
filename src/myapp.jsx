import { useEffect, useState } from "react"


function App() {
  const [Length,SetLength] = useState()
  const [pass,setPass] = useState("UHSL@asf324")

  useEffect

  return (
    <div className="h-screen w-screen flex justify-center  bg-gray-950">
      <div className="w-1/2 h-52 mt-20 rounded-2xl bg-gray-700">

        <div className="password ml-6 flex justify-end h-16 mt-6 rounded-2xl w-[90%] bg-white">
          <div className="w-full text-2xl mt-3 ml-3">
            {pass}
          </div>
          <div className="bg-blue-700 rounded-r-2xl w-20 flex text-xl text-white cursor-pointer justify-center items-center">
            copy
          </div>
        </div>
        <div className="flex justify-center text-xl text-green-50 gap-9 mt-8">
          <input type="range" name="range" id="" />
          <label htmlFor="range">length({Length})</label>
          <input type="checkbox" name="numbers" id="" />
          <label htmlFor="range">Numbers</label>
          <input type="checkbox" name="characters" id="" />
          <label htmlFor="range">Characters</label>
        </div>
      </div>
    </div>
  )
}


export default App
