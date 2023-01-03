import React from 'react'
import './buttons1.css'
import Button from '@mui/material/Button';
import { useState } from 'react';


/*
User story: I can see different button types: default, outline and text
User story: I can have different button sizes
User story: I can have different colors
User story: When I hover or focus, I can see visual indicators
*/

/* 
User story: I can choose to disable box-shadow
User story: I can choose to disable the button
User story: I can choose to have an icon on the left or right (Use Google Icon and at least 5 variants)
User story: I can still access all button attributes

*/

export default function ButtonsComp() {
  const [classBtn, setClassBtn] = useState("class-btn-default")
  const [status, setStatus] = useState()

  return (
    <div className='containerButtons'>
        <div className='typeBtns'>
          <h2>Different type buttons</h2>
          <Button variant="text">Text</Button>
          <Button variant="contained">Default</Button>
          <Button variant="outlined">Outlined</Button>
        </div>

        <div className='sizeBtns'>
          <h2>Different sizes</h2>
          <Button size="large" variant="contained">Default</Button>
          <Button size="medium" variant="contained">Default</Button>
          <Button size="small" variant="contained">Default</Button>
        </div>

        <div className='colorBtns'>
          <h2>Different colors</h2>
          <Button color="success" size="large" variant="contained">Default</Button>
          <Button color="error" size="large" variant="contained">Default</Button>
          <Button color="secondary" size="large" variant="contained">Default</Button>
        </div>

        <div id="editBtns">
          <h2>Edit your button</h2>
          <hr/>

          <section>
            <div className='leftArea'>
              <button class={classBtn} status> Edit </button>
            </div>

            <div className='rightArea'>

            </div>
          </section>
        </div>

    </div>
  )
}
