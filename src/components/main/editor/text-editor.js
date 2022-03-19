import { act } from '@testing-library/react';
import { useRef, useEffect, useState, createRef } from 'react';

import Field from './text-field';

const Editor = () => {

  // caret if selected
  // entering should shift the lines over

  const [selected,setselected] = useState(0)
  const [typed,settyped] = useState('')
  const [action,setaction] = useState('')
  const [sessions,setsessions] = useState({})

  const [rows, setrows] = useState([0])
  const actions = {"Enter" : true, "Backspace" : true}

  const actionCompleteCallback = (action,id) => {
    switch(action) {
      case "Backspace": {
        if (sessions[id] !== true) {
          sessions[id] = true
          setsessions(sessions)
          const r = rows.slice(1,Math.max(0,rows.length-1))
          setrows(r)
        }
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
          const session = window.crypto.randomUUID()
          sessions[session] = false
          setsessions(sessions)
          setaction({"type":e.key,"callback":actionCompleteCallback,"id":session})
          break;
        }
        case "Enter": {
          if (selected !== null) {
            console.log("enter")
            const newRows = rows.slice(); 
            newRows.push(0);
            setrows(newRows);
            switchToLine(selected + 1)
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