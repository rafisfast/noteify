import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';

import ListItem from './list-item';
import ListTitle from './list-title'

const Group = (props) => {

  const clas = props.class
  const folders = props.folders
  const notes   = props.notes

  return (
    <>
      <div className={clas}>
        <ul className='px-2 m-0' style={{"list-style-type": "none"}}>

          <ListTitle>
          </ListTitle>

          <ListItem class="pt-1" color="red">
          </ListItem>
          <ListItem color="aqua">
          </ListItem>
          <ListItem color="orange">
          </ListItem>
          <ListItem color="pink">
          </ListItem>
          <ListItem color="green">
          </ListItem>
          
        </ul>
      </div>
    </>
  )
}

export default Group