import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';

import ListItem from './list-item';
import ListTitle from './list-title'

const Group = (props) => {

  const clas = props.class
  const folders = props.folders
  const notes   = props.notes
  const title = props.title

  const onclick = props.onclick

  return (
    <>
      <div className={clas}>
        <ul className='px-2 m-0' style={{"list-style-type": "none"}}>

          <ListTitle>
          </ListTitle>

          {
          folders.map((folder,i)=> {

            if (i === 0) {
              return (
              <ListItem class="pt-1" name={folder.name} onclick={onclick} color={folder.tag_color} children={folder.children} notes={notes}>
              </ListItem>
              )
            } else {
              return (
              <ListItem name={folder.name} onclick={onclick} color={folder.tag_color} children={folder.children} notes={notes}>
              </ListItem>
              )
            }

            // return folder.children.map((child)=> {
            // console.log(child, "C")

            //   return notes.map((note)=> {
            //     if (note.id === child.id) {
            //       console.log(note,folder)
                  
                 
            //     }
                
            //   })

            // })
          })
          }
          
        </ul>
      </div>
    </>
  )
}

export default Group