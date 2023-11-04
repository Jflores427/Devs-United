/*
  Front-end
  Back-end
  Full-stack
  Quality Assurance
  DevOps

  WPM:

  Qualities:
  Problem Solving
  Creativity
  Adaptability
  Testing
  Collaboration

  Front-end
  PS - 8
  Creativity - 10
  Adaptability - 8
  Testing - 7
  Collaboration - 5

  Back-end
  PS - 10
  Creativity - 7
  Adaptability - 8
  Testing - 7
  Collaboration - 5

  FullStack
  PS - 8
  Creativity - 8
  Adaptability - 8
  Testing - 8
  Collaboration - 8

  Quality Assurance
  PS - 7
  Creativity - 5
  Adaptability - 7
  Testing - 10
  Collaboration - 8

  DevOps
  PS - 5
  Creativity - 6
  Adaptability - 7
  Testing - 9
  Collaboration - 10


*/


import { useState, } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import viteLogo from '/vite.svg'

import DevCreate from "./pages/DevCreate"
import DevDetails from "./pages/DevDetails"
import DevEdit from "./pages/DevEdit"
import DevTeam from "./pages/DevTeam"
import Home from "./pages/Home"
import About from './pages/About';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes> 
            <Route path="/" element={ <Home/> }> 
              <Route index={true} path="/" element={ <About/> } />
              <Route index={true} path="/devCreate" element={ <DevCreate />} />
              <Route index={true} path="/:id" element={ <DevDetails />} />
              <Route index={true} path="/:id/edit" element={ <DevEdit /> } />
              <Route index={true} path="/devTeam" element={ <DevTeam /> } />
            </Route> 

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
