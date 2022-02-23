import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main'
import SidebarOffCanvas from './components/sidebar/sidebar_offcanvas';

import axios from 'axios';

const App = () => {

  const [show,setshow] = useState(false)
  const onClose = () => {setshow(false)}
  const onOpen = () => {setshow(true)}

  const [notes,setnotes] = useState({})
  const [folders,setfolders] = useState({})

  useEffect(()=> {
    axios.post('http://localhost:500/fetch-data',{},{  headers: { 'Content-Type': 'application/json'}, withCredentials: true })
    .then((response) => {
      const data = response.data
      setnotes(data.notes)
      setfolders(data.folders)
    })
  },[])

  return(
    <>
    {/* <Search>
    </Search> */}
    <Container fluid className='overflow-hidden'> {/* p-0*/}
      <Row className='no-gutter'> {/* p-0 m-0*/}
        {/* </Main> */}
        <Button className='d-md-none show-sidebar' variant="primary" onClick={onOpen}>
          List
        </Button>
        <Sidebar notes={notes} folders={folders} ></Sidebar>
        <div className="d-flex my-auto p-0" style={{"height": "95vh","width":".2rem"}}>
          <div className="vr bg-secondary"></div>
        </div>
        <Main></Main>
        <SidebarOffCanvas show={show} onClose={onClose}></SidebarOffCanvas>
      </Row>
    </Container>
    </>
  )
}

export default App