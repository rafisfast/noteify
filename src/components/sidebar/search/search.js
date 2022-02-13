import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Searchlist from './searchlist';

const Search = () => {

  const [show, setShow] = useState(false);
  const search = useRef()

  const onClick = (e)=>{
    if (e.target.id !== "search") {
      // console.log(e.target.id,"p",e,e.target)
      setShow(false)
    }
  }

  useEffect(()=> {
    document.addEventListener("click",onClick)
    return () => {
      document.removeEventListener("click",onClick)
    }
  },[search])

  return (
    <>
    <div className='mx-auto sidebar-searchbox-container'>
      <input ref={search} id={"search"} className="sidebar-searchbox form-control" cancel={()=>setShow(false)} onKeyDown={()=>setShow(true)}/>
      <button className='sidebar-searchbox-button' onClick={()=>{search.current.value = " "}}>X</button>
    </div>
     <Searchlist show={show} tag={search}>
     </Searchlist>
    </>
  )
}

export default Search