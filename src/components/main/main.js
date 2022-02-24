import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Main = (props) => {

  const title = useRef()
  const text  = useRef()
  const body  = useRef()

  const titleText     = props.title
  const bodyText     = props.body

  const [timeout, settimeout]     = useState(0)
  
  const onkeypress = (evt) => {
    const t = text.current.innerHTML
    if (evt.which === 13) {
      evt.preventDefault();
    }
    if ((t + evt.key).length > 64) {
      evt.preventDefault()
    }
  }

  useEffect(()=> {
    // prevent contenteditable entering
    title.current.addEventListener('keypress',onkeypress);
    return () => {
      title.current.removeEventListener('keypress',onkeypress)
    }
  },[])

  const serialiseBody = () => {
    // serialise body text to save
    const children = [...body.current.children]
    var text     = ""
    children.map((e)=>{
     var line = e.innerHTML
     var broke = false
     if (line === "<br>") {
       line = "\\n"
       broke = true
     }
     text += broke ? line : line + "\\n" 
    })
    return text
  }

  useEffect(()=> {
    // save after 2 seconds of typing with timeout
    var saved = false
    const interval = setInterval(()=> {
      if (new Date().getTime() > timeout) {
        if (!saved) {
          saved = true
          const text = serialiseBody()
          console.log(text)
        }
      }
    },100)
    return () => {
      clearInterval(interval)
    }
  },[timeout])

  const onTextChange = () => {
    settimeout(new Date().getTime() + 2000)
  }

  return(
    <Col style={{"overflow":"auto"}}>
      <div className="main-content py-3 my-1 overflow-hidden">
        <div className='notes my-auto' >
          <Container fluid className='overflow-auto pl-5 main-inner' style={{"height":"100%"}}>
            <div ref={title} contentEditable="true" className='pt-2 main-title'>
              <p ref={text} className='py-1' style={{"text-overflow":"ellipsis","white-space":"nowrap","overflow":"hidden"}}>
                {titleText}
              </p>
            </div>
            <hr></hr>
            <div contentEditable className='overflow-hidden pb-3' ref={body} onInput={onTextChange} onKeyUp={onTextChange}>
              <p className='overflow-auto main-text p-0 m-0'>
                {bodyText}
              </p>
            </div>
          </Container>
          <span style={{"right":"20px","width":"200px","position":"absolute","bottom":"20px","text-align":"left"}}>
            <b>Last Edited..</b>
          </span>
        </div>
      </div>
    </Col>
  )
}

export default Main