import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTeam from './components/AddTeam'
import ViewTeam from './components/ViewTeam'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
         
       <Route path='/' element={<AddTeam/>} />
        <Route path='/Viewteam' element={<ViewTeam />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
