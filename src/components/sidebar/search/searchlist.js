import { useEffect } from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const Searchlist = (props) => {

  const show = props.show
  const tag  = props.tag.current

  console.log(tag)

  return(
    show && 
    <ListGroup as="ol" className='searchlist' numbered style={{"width":"250px","position":"absolute","z-index":"998"}}>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge variant="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge variant="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge variant="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    
  )
}

export default Searchlist