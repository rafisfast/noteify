import { act } from '@testing-library/react';
import { useRef, useEffect, useState } from 'react';
import Field from './text-field';

const Editor = () => {

  // refs for every line
  // events
  // array with every element
  // selected class, selected = true then yknow give it selected
  // typing

  // if it goes over width limit then set to next line and select line
  // enter should create new line
  // backspace should erase character
  // backspacing enough from a line should remove line
  // caret if selected

  const [selected,setselected] = useState(null)
  const [typed,settyped] = useState('')
  const [action,setaction] = useState('')

  const actions = {"Enter" : true, "Backspace" : true}

  const keydown = (e) => {
    if (e.key in actions) {
      // Enter handling
      // Backspace handling
      setaction("")
      switch(e.key) {
        case "Backspace": {
          setaction(e.key)
        }
      }
    }
  }
  
  const keypress = (e) => {
    // if (e.key in )
    if (e.key !== "Enter") {
      e.preventDefault()
      var key = e.key
      if (e.code === "Space") {
        key = "&nbsp;"
      }
      if (selected) {
        settyped("")
        settyped(key) 
      }
    }
  }
  
  useEffect(()=> {
    document.addEventListener("keypress",keypress)
    document.addEventListener("keydown",keydown)
    return ()=> {
      document.removeEventListener("keypress",keypress)
      document.removeEventListener("keydown",keydown)
    }
  },[selected, typed])

  useEffect(()=> {
    document.addEventListener('click',(e)=>{
      setselected(e.target)
    })
  },[])

  return (
    <div className='text-container' style={{"height":"100%","width":"100%"}}>
      <Field selected={selected} typed={typed} action={action}></Field>
    </div>
  )
}

export default Editor