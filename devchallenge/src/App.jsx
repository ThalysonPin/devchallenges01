import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ButtonsComp from './components/differentBtns/ButtonsComp'
import { Button } from '@mui/material'

function App() {

  return (
    <div className="App">
      <div className='header'>
        <h1>Button Components challenge</h1>
      </div>

      <ButtonsComp />
    </div>
  )
}

export default App
