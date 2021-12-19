import { useEffect } from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const Searchlist = (props) => {

  return(
    // <div style={
    //   {"background":"red","width":"100vw"}
    // }>

    // </div>
    
    <ListGroup as="ol" numbered style={{"width":"250px"}} {...props}>
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