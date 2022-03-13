import { useRef, useEffect, useState } from 'react';
import parse from "html-react-parser";

const Field = (props) => {

  const field = useRef()
  const selected = props.selected
  const typed = props.typed
  const action = props.action

  const [Text,setText] = useState('')

  const original = 'overflow-hidden pb-3 text '
  var classname = original 

  useEffect(()=> {
    if (selected === field.current) {
      if (classname === original) classname = classname + 'selected'
      setText(Text + typed)
    }
  },[selected, typed])

  useEffect(()=> {
    console.log(Text)
  },[Text])

  return (
    <div ref={field} className={classname} style={{"width":"100%"}}> {/*onInput={onTextChange} onKeyUp={onTextChange}*/}
      {parse(Text)}
    </div> 
  )
}

export default Field