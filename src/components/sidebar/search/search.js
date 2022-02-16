import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Button, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Searchlist from './searchlist';

const Search = () => {

  const [show, setShow] = useState(false);
  const [text, setText] = useState("")
  
  const search = useRef()
  const button = useRef()

  const [buttonstyle, setbuttonstyle] = useState({"width":"25px","height":"0px","visibility":"hidden","opacity":"0"})
  
  const onDocumentClick = (e)=>{
    if (e.target.id !== "search") {
      // console.log(e.target.id,"p",e,e.target)
      setShow(false)
    }
  }

  const onKeyPress = () => {
    setShow(true)
    setText(search.current.value)
  }

  const onInputClick = () => {
    if (text.length > 0) {
      setShow(true)
    }
  }

  const onButtonClick = ()=> {
    search.current.value = "";setText("")
  }

  useEffect(()=> {
    document.addEventListener("click",onDocumentClick)
    return () => {
      document.removeEventListener("click",onDocumentClick)
    }
  },[search])

  useEffect(()=> {
    console.log("changed", text.length)
    if (text.length > 0) {
      setbuttonstyle({"width":"25px","height":"25px","top":"1px"})
    } else {
      setbuttonstyle({"width":"25px","height":"0px","visibility":"hidden","opacity":"0"})
    }
  },[show,text])

  return (
    <>
    <div className='mx-auto sidebar-searchbox-container'>
      <input ref={search} id={"search"} className="sidebar-searchbox form-control" onKeyPress={onKeyPress} onClick={onInputClick} cancel={()=>setShow(false)}/>
      <button ref={button} className='sidebar-searchbox-button' style={buttonstyle} onClick={onButtonClick}>X</button>
    </div>
     <Searchlist show={show} tag={search} top={["Konh ohkeraogkas"," johngasflasflasflsadgasdhlsadkgaskfpask"]}>
     </Searchlist>
    </>
  )
}

export default Search