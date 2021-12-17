import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './sidebar';
import Main from './main'

const App = () => {
  return(
    <Container fluid className='overflow-hidden '> {/* p-0*/}
      <Row className='no-gutter'> {/* p-0 m-0*/}
        {/* </Main> */}
        <Sidebar></Sidebar>
        <div class="d-flex my-auto p-0" style={{"height": "90vh","width":".25rem"}}>
          <div class="vr bg-secondary"></div>
        </div>
        <Main></Main>
      </Row>
    </Container>
  )
}

export default App