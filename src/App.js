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
  
  const [saved,setsaved] = useState(false)
  const [id,setid] = useState(0)

  const [notes,setnotes] = useState([])
  const [folders,setfolders] = useState([])

  const [title, settitle] = useState("Hello")
  const [body, setbody] = useState("I")
  const [date, setdate] = useState(new Date())

  useEffect(()=> {
    console.log("firing request")
    axios.post('http://localhost:500/fetch-data',{},{  headers: { 'Content-Type': 'application/json' }, withCredentials: true })
    .then((response) => {
      const data = response.data
      setnotes(data.notes)
      setfolders(data.folders)
      if (data.notes[0]) {
        console.log(data.notes[0], body)
        settitle(JSON.parse(data.notes[0].title))
        setbody(JSON.parse(data.notes[0].body))
        setid(data.notes[0]._id)
        setdate(new Date(data.notes[0].last_edited))
        console.log(body, JSON.parse(data.notes[0].body))
      }
    })
  },[saved])

  const onClickNote = (id) => {
    // const id = e.target.id()
    notes.map((note)=> {
      console.log(note._id,id)
      if (note._id === id) {
        settitle(note.title)
        setbody(note.body)
        setid(id)
      }
    })
  }

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
        <Sidebar onclick={onClickNote} notes={notes} folders={folders} ></Sidebar>
        <div className="d-flex my-auto p-0" style={{"height": "95vh","width":".2rem"}}>
          <div className="vr bg-secondary"></div>
        </div>
        <Main body={body} title={title} saved={[saved,setsaved]} noteid={id} date={date}></Main>
        <SidebarOffCanvas show={show} onClose={onClose}></SidebarOffCanvas>
      </Row>
    </Container>
    </>
  )
}

export default App