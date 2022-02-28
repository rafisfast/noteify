import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import axios from 'axios';
import { render } from '@testing-library/react';

const Main = (props) => {

  const title = useRef()
  const text  = useRef()
  const body  = useRef()
  const input  = useRef()

  const titleText    = props.title
  const bodyText     = props.body
  const noteID       = props.noteid
  
  const [save,setsave] = props.saved

  const [timeout, settimeout]     = useState(0)
  const [pressed, setpressed]     = useState(false)
  
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

  const [elements,setelements] = useState([])

  useEffect(() => {
  // deserialise body
    const el = []
    // const parsed  = JSON.parse(bodyText)
    const split = bodyText.split("")
    var text = ""
    var count = 0
    // \n Hello
    // Hello\n
    console.log(split)
    split.map((character, i)=> {
      console.log(character)
      if ( character === "\\" && split[i+1] && split[i+1] === "n" ) {
        count += 1
        if (text !== "") {
          el.push({type:"p",text:text})
          text = ""
        }
        return
      } else if ( character === "n" && split[i-1] && split[i-1] === "\\" ) {
        return
      }

      for (i=0;i<count;i++) {
        el.push({type:"br"})
      }

      count = 0
      text += character
    })
    
    if (text !== "") {
      el.push(<p className='p-0 m-0'>{text}</p>)
      text = ""
    }

    console.log(el.length, el)
    setelements(el)

  },[bodyText])

  const serialiseBody = () => {
    // serialise body text to save
    // const children = [...body.current.children]
    // var text     = ""
    // console.log(children)
    // children.map((e)=>{
    //  var line = e.innerHTML
    // //  console.log(line, JSON.parse(line))
    // //  var line = e.innerHTML
    //  line = line.replace(/<br>/gm,"\\n")
    //  text += line
    // })
    // return JSON.stringify(text)
    return JSON.stringify(input.current.value)
  }

  const serialiseTitle = () => {
    // serialise title text to save
    const children = [...title.current.children]
    var text     = ""
    children.map((e)=>{
     var line = e.innerHTML
     line = line.replace(/<br>/gm,"")
     text += line
    })
    return JSON.stringify(text)
  }

  useEffect(()=> {
    // save after 2 seconds of typing with timeout
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
    settimeout(new Date().getTime() + 2000)
  }

  const starting = useRef()

  const onBodyClick = () => {
    // console.log(elements.length)
    // if (elements.length > 0) {
    //   if (starting.current) {
    //     document.body.removeChild(starting.current);
    //   }
    // } else {
    //   starting.current.innerHTML = "."
    // }
  }

  return(
    <Col style={{"overflow":"auto"}}>
      <div className="main-content py-3 my-1 overflow-hidden">
        <div className='notes my-auto' >
          <Container fluid className='overflow-auto pl-5 main-inner' style={{"height":"100%"}}>
            <div ref={title} contentEditable="true" className='pt-2 main-title' onInput={onTextChange} onKeyUp={onTextChange}>
              <p ref={text} className='py-1' style={{"text-overflow":"ellipsis","white-space":"nowrap","overflow":"hidden"}}>
                {titleText}
              </p>
            </div>
            <hr></hr>
            <div className='overflow-hidden pb-3' ref={body} onInput={onTextChange} onKeyUp={onTextChange} onClick={onBodyClick}>
               {/* <p contentEditable className='m-0 p-0'></p>
               {elements.map((element,id)=> {
                 if (element.type === "p") {
                   return (<p key={id} className='m-0 p-0'>{element.text}</p>)
                 } else {
                   return (<div key={id}><br></br></div>)
                 }
                })} */}
                <textarea ref={input} className='textarea'></textarea>
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