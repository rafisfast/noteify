import { useRef, useEffect, useState } from 'react';
import parse from "html-react-parser";

const Field = (props) => {

  const field = useRef()

  const selected = props.selected
  const typed = props.typed
  const action = props.action
  const data_key = props.data_key

  const [Text,setText] = useState('')

  const original = 'pt-1 pb-1 text'
  var classname = original 

  useEffect(()=> {
    console.log(data_key, selected)
    if (selected === data_key) {
      if (classname === original) classname = classname + ' selected'
      setText(parse(Text + typed))
    }
  },[selected, typed, data_key])

  useEffect(()=> {
    if (selected === data_key) {
      switch(action.type) {
        case "Backspace": {
          if (Text !== null) {
            if (typeof Text === 'string') setText(old=>Text.substring(0,Math.max(old.length-1,0)))
          }
          console.log(Text, typeof Text)
          if (Text === "" || typeof(Text) !== "string") {
            action.callback(action.type,action.id)
          }
        }
      }
    }
  },[action, data_key, selected])

  useEffect(()=> {
    console.log(Text)
  },[Text])

  return (
    <div ref={field} data_key={data_key} className={classname} style={{"width":"100%"}}> {/*onInput={onTextChange} onKeyUp={onTextChange}*/}
      {Text}
    </div> 
  )
}

export default Field