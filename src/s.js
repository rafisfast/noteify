import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

const SideBar = () => {
  return(
    <Container fluid className='p-0'>
      <Row className='p-0 m-0'>
        <Col sm={10} fluid className='p-0'>
          <Container fluid className='inner p-4'>
            <Row>
              <Col sm={12} >
                <div className="note">
                  <div className="Title px-4 pt-3"><h3>Title</h3>
                    <hr size="3" width="95%" color="red"/>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default SideBar