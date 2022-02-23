import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';

import ListItem from './list-item';
import ListTitle from './list-title'

const Collection = (props) => {

  const clas = props.class
  const folders = props.folders
  const notes   = props.notes

  const onclick = props.onclick

  return (
    <>
      <div className={clas}>
        <ul className='px-2 m-0' style={{"list-style-type": "none"}}>

          <ListTitle>
          </ListTitle>

          {notes.map((note,i)=> {
            if (i === 0) {
              return (
                <ListItem class="pt-1" onclick={onclick} id={note._id} title={note.title} color={note.tag_color}>
                </ListItem>
              )
            } else {
              return (
                <ListItem onclick={onclick} id={note._id} title={note.title} color={note.tag_color}>
                </ListItem>
              )
            }
          })}
          
        </ul>
      </div>
    </>
  )
}

export default Collection