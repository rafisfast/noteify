import { Children, createRef, useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';

const ListItem = (props) => {

  const clas  = props.class || ""
  const color = props.color
  const title = props.title

  const id    = props.id

  const onclick = props.onclick

  return (
    <li className={clas + " list-item"} onClick={()=>onclick(id)}>
      <Row>
      <Col className='list-item-name'>
        {JSON.parse(title)}
      </Col>
      <Col>
        <div className='list-item-collection' style={{"background":color}}></div>
      </Col>
      </Row>
    </li>
  )
}

export default ListItem