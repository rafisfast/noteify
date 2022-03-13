import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import TextEditor from './editor/text-editor'

import axios from 'axios';

const Main = (props) => {

  const title = useRef()
  const body  = useRef()

  const titleText    = props.title
  const bodyText     = props.body
  const noteID       = props.noteid
  const date         = props.date
  
  const [save,setsave] = props.saved

  const [timeout, settimeout]     = useState(0)
  const [pressed, setpressed]     = useState(false)

  const serialiseBody = () => {
    // serialise body text to save
    return JSON.stringify(body.current.value)
  }

  const serialiseTitle = () => {
    // serialise title text to save
    return JSON.stringify(title.current.value)
  }

  useEffect(()=> {
    // save after .5 seconds of typing with timeout
    var saved = false
    const interval = setInterval(()=> {
      if (pressed) {
        if (new Date().getTime() > timeout) {
          if (!saved) {
            saved = true
            const text = serialiseBody()
            const title = serialiseTitle()
            console.log(noteID)
            console.log(text)
            axios.post('http://localhost:500/save-note',{ id : noteID, body: text, title: title },{  headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            .then((response) => {
              console.log(response)
              setsave(!save)
            })
          }
        }
      }
    },100)
    return () => {
      clearInterval(interval)
    }
  },[timeout, pressed])

  const onTextChange = () => {
    setpressed(true)
    settimeout(new Date().getTime() + 500)
  }

  return(
    <Col style={{"overflow":"auto"}}>
      <div className="main-content py-3 my-1 overflow-hidden">
        <div className='notes my-auto' >
          <Container fluid className='overflow-auto pl-5 main-inner' style={{"height":"100%"}}>
            <textarea ref={title} key={titleText} onKeyPress={onkeypress} style={{"text-overflow":"ellipsis","white-space":"nowrap","overflow":"hidden"}} className=' pt-2 main-title overflow-hidden'>{titleText}</textarea>
            <hr></hr>
            <TextEditor></TextEditor>
          </Container>
          <span style={{"right":"20px","width":"500px","position":"absolute","bottom":"20px","text-align":"right"}}>
            <b>Last Edited: {date.toUTCString()}</b>
          </span>
        </div>
      </div>
    </Col>
  )
}

export default Main