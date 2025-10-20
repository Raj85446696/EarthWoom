import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/aboutus' Component={Aboutus}/>
    </Routes>
    </>
  )
}

export default App