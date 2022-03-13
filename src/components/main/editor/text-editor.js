import { act } from '@testing-library/react';
import { useRef, useEffect, useState, createRef } from 'react';
import Field from './text-field';

const Editor = () => {

  // if it goes over width limit then set to next line and select line
  // enter should create new line
  // backspace should erase character
  // backspacing enough from a line should remove line
  // caret if selected
  // entering should shift the lines over

  // const [rows, setrows] = useState(1)
  // const defaultRow = useRef()
  // const fields = {"1": }

  const [selected,setselected] = useState(0)
  const [typed,settyped] = useState('')
  const [action,setaction] = useState('')

  const [rows, setrows] = useState([0])
  const actions = {"Enter" : true, "Backspace" : true}

  const actionCompleteCallback = (action) => {
    switch(action) {
      case "Backspace": {
        const r = rows.slice(Math.max(0,rows.length-1))
        setrows(r)
        break;
      }
      case "Enter": {
        break;
      }
    }
  }

  const switchToLine = (key) => {
    setaction({})
    settyped('')
    setselected(key)
  }

  const keydown = (e) => {
    if (e.key in actions) {
      setaction({})
      switch(e.key) {
        case "Backspace": {
          setaction({"type":e.key,"callback":actionCompleteCallback})
          break;
        }
        case "Enter": {
          if (selected !== null) {
            const newRows = rows.slice(); 
            newRows.push(0);
            setrows(newRows);
          }
          break;
        }
      }
    }
  }
  
  const keypress = (e) => {
    if (e.key !== "Enter") {
      e.preventDefault()
      var key = e.key
      if (e.code === "Space") {
        key = "&nbsp;"
      }
      if (selected !== null) {
        settyped("")
        settyped(key) 
      }
    }
  }

  const onClick = (e)=>{
    const key = e.target.getAttribute('data_key')
    if (key) {
      switchToLine(parseInt(key))
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
    switchToLine(rows.length-1)
    document.addEventListener('click',onClick)
    return () => document.removeEventListener('click',onClick)
  },[rows])

  return (
    <div className='text-container' style={{"height":"100%","width":"100%"}}>
      {rows.map((_,i)=> {
        return (<Field key={i} data_key={i} selected={selected} typed={typed} action={action}></Field>)
      })}
    </div>
  )

}

export default Editor