import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';

const ListItem = (props) => {

  const clas  = props.class
  const color = props.color

  return (
    <li className={clas}>
      <Row>
      <Col>
        Texts
      </Col>
      <Col>
        <div className='list-item-collection' style={{"background":color}}></div>
      </Col>
      </Row>
    </li>
  )
}

export default ListItem