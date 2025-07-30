import React from 'react'
import {Route,Routes} from "react-router"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from "react-hot-toast"


const App = () => {
  return (
    <div className="relative h-full w-full">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000000_60%,#38bdf880_140%)]" />



      
      {/* <button onClick={()=>toast.success("Congrats")} className='text-red-500 p-4 bg-pink-300 '>Click Me</button>
      <button className='btn btn-outline'>Click Me</button>*/} 
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/>
        <Route path="/create" element={<CreatePage />}/>
        <Route path="/note/:id" element={<NoteDetailPage></NoteDetailPage>}/>
      </Routes>
    </div>
  )
}

export default App

 