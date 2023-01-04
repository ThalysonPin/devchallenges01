import React from 'react'
import './buttons1.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Modal, Select, Switch } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

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
  const [styleBtn, setStyleBtn] = useState("contained")
  const [sizeBtn, setSizeBtn] = useState("medium")
  const [colorBtn, setColorBtn] = useState("primary")
  const [disableBtn, setDisableBtn] = useState(false)
  const [disabler, setDisabler] = useState("disable")
  const [boxShadow, setBoxShadow] = useState(true)
  const [leftIcon, setLeftIcon] = useState(false)
  const [rightIcon, setRightIcon] = useState(false)


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
              <Button 
              variant={styleBtn}
              size={sizeBtn} 
              color={colorBtn} 
              disabled={disableBtn}
              id={boxShadow ? "boxShadow" : "boxShadowNone"}
              startIcon={leftIcon ? <ModeEditOutlineIcon/> : ""}
              endIcon={rightIcon ? <ModeEditOutlineIcon/> : ""}

              >Edit here</Button>
            </div>

            <div className='rightArea'>
{/* ================================== style buttons =====================*/}
              <select onChange={(e) => setStyleBtn(e.target.value)}>
                  <option disabled selected hidden>Style Btn</option>
                  <option value="text">Text</option>
                  <option value="contained" >Default</option>
                  <option value="outlined" >Outlined</option>
              </select>
{/* ================================== Size buttons =====================*/}
              <select onChange={(e) => setSizeBtn(e.target.value)}>
                <option disabled selected hidden>Size Btn</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
{/* ================================== Size buttons =====================*/}
              <select onChange={(e) => setColorBtn(e.target.value)}>
                <option disabled selected hidden>Color Btn</option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="error">Danger</option>
                <option value="success">Success</option>
              </select>

              <h4>Disable button</h4>
              <Switch 
              checked={disableBtn}
              onChange={(e) => setDisableBtn(e.target.checked)}
              />
              
              <h4>Box Shadow</h4>
              <Switch 
              checked={boxShadow}
              onChange={(e) => setBoxShadow(e.target.checked)}
              />

              <h4>Left Icon?</h4>
              <Switch 
              checked={leftIcon}
              onChange={(e) => setLeftIcon(e.target.checked)}
              />
              
              <h4>Right Icon?</h4>
              <Switch 
              checked={rightIcon}
              onChange={(e) => setRightIcon(e.target.checked)}
              />


            </div>
          </section>
        </div>

    </div>
  )
}
