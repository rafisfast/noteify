import { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, OverlayTrigger, Button } from 'react-bootstrap';
import Searchlist from './searchlist';
import Search from './search';

const Sidebar = () => {

  const search = useRef()
  const con = useRef()

  const [show, setShow] = useState(false);

  return(
    // <div style={
    //   {"background":"red","width":"100vw"}
    // }>

    // </div>
    <>
    {/* <Col xs={2} className='sidebar-col d-sm-none d-md-block' style={{"minWidth":"200px"}}>
      <div className='sidebar py-3 my-1 m-2 mr-4 border-right'>
        <div className='inner-sidebar'>
          <Container fluid className='py-3 px-3' ref={con}>
            <div className='bg-primary mx-auto sidebar-searchbox' style={{"height":"30px","width":"100%","border-radius":"30px"}}>
              
            </div>
          </Container>
        </div>
      </div>
    </Col> */}
    {/* <Searchlist>     
    </Searchlist> */}
    </>
  )
}

export default Sidebar