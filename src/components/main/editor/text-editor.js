import { useRef, useEffect, useState } from 'react';
import Field from './text-field';

const Editor = () => {

  // refs for every line
  // events
  // array with every element
  // selected class, selected = true then yknow give it selected
  // typing

  const [selected,setselected] = useState(null)
  
  const keypress = (e)=> {
    // if (e.key in )
    if (e.key !== "Enter") {
      e.preventDefault()
      var key = e.key
      if (e.code === "Space") {
        key = "&nbsp;"
      }
      if (selected) {
        selected.innerHTML += key
      }
    }
  }
  
  useEffect(()=> {
    document.addEventListener("keypress",keypress)
    return ()=> document.removeEventListener("keypress",keypress)
  },[selected])

  useEffect(()=> {
    document.addEventListener('click',(e)=>{
      setselected(e.target)
    })
  },[])

  return (
    <div className='text-container' style={{"height":"100%","width":"100%"}}>
      <Field selected={selected}></Field>
    </div>
  )
}

export default Editor