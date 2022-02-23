import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Main = (props) => {

  const title = useRef()
  const text  = useRef()

  const t     = props.title
  const b     = props.body

  const [truncated,setTruncation] = useState(false)
  
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
  },[truncated])

  return(
    <Col style={{"overflow":"auto"}}>
      <div className="main-content py-3 my-1 overflow-hidden">
        <div className='notes my-auto' >
          <Container fluid className='overflow-auto pl-5 main-inner' style={{"height":"100%"}}>
            <div ref={title} contentEditable="true" className='pt-2 main-title'>
              <p ref={text} className='py-1' style={{"text-overflow":"ellipsis","white-space":"nowrap","overflow":"hidden"}}>
                {t}
              </p>
            </div>
            <hr></hr>
            <div contentEditable className='overflow-hidden pb-3'>
              <i className='overflow-auto main-text'>
                {b}
              </i>
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