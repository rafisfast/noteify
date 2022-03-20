import { useEffect, useState } from "react"

const Caret = (props) => {

  const visible = props.visible
  const top = props.top
  const left = props.left

  const [blink,setblink] = useState(true)

  useEffect(()=> {
    setInterval(()=> {
      setblink(blink=>!blink)
    },500)
  },[])

  return (
    <>
    {visible && blink && top !== "0px" && left !== "0px" && <div className="caret" style={{"top":top+"px","left":left}}>&nbsp;</div>}
    </>
  )
}

export default Caret