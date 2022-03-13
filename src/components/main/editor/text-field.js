import { useRef, useEffect } from 'react';

const Field = (props) => {

  const field = useRef()
  const selected = props.selected

  const original = 'overflow-hidden pb-3 text '
  var classname = original 

  useEffect(()=> {
    if (selected === field.current) {
      console.log('is', selected)
      classname = classname + 'selected'
    }
  },[selected])

  return (
    <div ref={field} className={classname} style={{"width":"100%"}}> {/*onInput={onTextChange} onKeyUp={onTextChange}*/}
    </div> 
  )
}

export default Field