import { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, OverlayTrigger, Button } from 'react-bootstrap';
import Searchlist from './search/searchlist';
import Search from './search/search';

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
    <div className='sidebar-col d-sm-none d-md-block col-2-5' style={{"minWidth":"200px"}}>
      <div className='sidebar py-3 my-1 border-right'>
        <div className='inner-sidebar'>
          <Container fluid className='py-2 px-1' ref={con}>
            <Search></Search>
          </Container>
        </div>
      </div>
    </div>
    {/* <Searchlist>     
    </Searchlist> */}
    </>
  )
}

export default Sidebar