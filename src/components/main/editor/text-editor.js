import { act } from '@testing-library/react';
import { useRef, useEffect, useState, createRef } from 'react';

import Field from './text-field';
import Caret from './caret';

const Editor = () => {

  // caret if selected
  // entering should shift the lines over

  // Fields
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
          const r = rows.slice(0,Math.max(1,rows.length-1))
          setrows(r)
          switchToLine(Math.max(0,selected - 1))
        }
        break;
      }
      case "Enter": {
        break;
      }
    }
  }

  // Caret
  const [caretVisible,setcaretVisible] = useState(true)
  const [caretTop,setcaretTop] = useState("0px")
  const [caretLeft,setcaretLeft] = useState("0px")

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
      if (selected === null) return
      var key = e.key
      settyped("")
      settyped(key)
      e.preventDefault()
      if (e.code === "Space") {
        key = "&nbsp;"
      }
    }
  }

  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  const onClick = (e)=>{
    const key = e.target.getAttribute('data_key')
    const field = e.target
    if (key) {
      setcaretVisible(true)
      switchToLine(parseInt(key))
      
      // create a new span with a style of inline-block to calculate string width
      var el = document.createElement("span");
      el.style.display = "inline-block"

      const s = e.target.innerHTML.toString().replaceAll("&nbsp;"," ")
      el.innerHTML = s.slice(0,window.getSelection().focusOffset+1)
      document.getElementById("root").appendChild(el)

      // change caret position to clicked position
      // const left = el.clientWidth + el.left
      // const top  = el.clientTop // top adjust for long strings
      
      setcaretLeft(offset(field).left + el.clientWidth - 1)
      setcaretTop(offset(field).top + 3)

      console.log(el.clientTop, offset(el).top)

      el.remove()
    } else {

      setcaretVisible(false)
      switchToLine(null)

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
  },[rows, typed, selected])

  return (
    <div className='text-container' style={{"height":"100%","width":"100%"}}>
      <Caret visible={caretVisible} top={[caretTop]} left={caretLeft}></Caret>
      {rows.map((_,i)=> {
        return (<Field key={i} data_key={i} selected={selected} typed={typed} action={action}></Field>)
      })}
    </div>
  )

}

export default Editor