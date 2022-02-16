import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import Searchlistitem from './searchlist-item';

const Searchlist = (props) => {

  const show = props.show
  const tag  = props.tag.current
  const top  = props.top

  const [style,setstyle] = useState({"width":"250px","position":"absolute","z-index":"998","opacity":"0","visibility":"hidden"})

  useEffect(()=> {
    if (show) {
      setstyle({"width":"250px","position":"absolute","z-index":"998"}) 
    } else {
      setstyle({"width":"250px","position":"absolute","z-index":"998","opacity":"0","visibility":"hidden"})
    }
  },[show])

  return(
    <ListGroup as="ol" className='searchlist' numbered style={style}>
      {top.map((e)=> {
        return <Searchlistitem text={e}></Searchlistitem>
      })}
    </ListGroup>
    
  )
}

export default Searchlist