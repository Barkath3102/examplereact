import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import H1com from './h1'
import H2com from './h2'
import Acom from './acom'
import {Route , Routes } from "react-router-dom"
import About from './about'
import Contact from './Contact'
import Nav from './nav'
import Sum from './Sum'
import V1 from './V1'
import V2 from './V2'
// import Sum from './Sum'
import Useeffect from './useeffect'
function App() {

  return (
    <>
      <div>
        {/* <Useeffect></Useeffect> */}
        <Nav></Nav>
      <Routes>
        <Route path='/' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        {/* <Route path='summary' element={<Sum></Sum>}></Route> */}
        <Route path='summary' element={<Sum></Sum>}>
              <Route index></Route>
              <Route path='value1' element={<V1></V1>}></Route>
              <Route path='value2' element={<V2></V2>}></Route>
        </Route>  
      </Routes>
      
        {/* <Acom></Acom>
        <H1com></H1com>
        <H2com></H2com> */}
      </div>
    </>
  )
}

export default App
