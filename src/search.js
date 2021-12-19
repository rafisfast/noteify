import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Searchlist from './searchlist';

const Search = () => {

  const [show, setShow] = useState(false);
  const search = useRef()

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={Searchlist}
        trigger={'click'}
      >
      <input ref={search} className="form-control" type="search" placeholder="search" />
      </OverlayTrigger>
      {/* <Overlay target={search} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            <ul>
              <li>he</li>
              <li>he</li>
              <li>he</li>
              <li>he</li>
            </ul>
          </div>
        )}
      </Overlay> */}
    </>
  )
}

export default Search