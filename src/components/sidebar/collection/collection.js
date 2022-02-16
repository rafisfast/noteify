import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Collection = () => {

  return (
    <>
      <div className='py-2'>
        <ul className='px-2' style={{"list-style-type": "none"}}>
          <li>
            <b>Title</b>
          </li>
          <li className='py-1'>
            Text
          </li>
          <li>
            Text
          </li>
          <li>
            Text
          </li>
          <li>
            Text
          </li>
        </ul>
      </div>
    </>
  )
}

export default Collection