import { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, OverlayTrigger, Button } from 'react-bootstrap';
import axios from 'axios'

import Searchlist from './search/searchlist';
import Search from './search/search';

import Collection from './collection/collection';
import Group from './group/group';

const Sidebar = (props) => {

  const search = useRef()
  const con = useRef()

  const folders = props.folders
  const notes   = props.notes

  const onclick = props.onclick

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
            <Search notes={notes} folders={folders}></Search>
            <Collection class='pt-2 m-0' onclick={onclick} notes={notes} folders={folders}></Collection>
            <Group notes={notes} onclick={onclick} folders={folders}></Group>
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