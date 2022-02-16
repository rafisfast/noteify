import { ListGroup, Badge } from 'react-bootstrap';

const Searchlistitem = (props) => {

  const text = props.text

  return(
    <ListGroup.Item onClick={()=>console.log("clicked")} className="searchlistitem d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold searchlistitem-text">{text}</div>
      </div>
    </ListGroup.Item>
  )
}

export default Searchlistitem