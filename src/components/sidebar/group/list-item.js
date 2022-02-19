import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';

const ListItem = (props) => {

  const clas  = props.class
  const color = props.color

  return (
    <li className={clas + " list-item"}>
      <Row>
      <Col className='list-item-name'>
        Texts
      </Col>
      <Col>
        <div className='list-item-collection' style={{"background":color}}></div>
      </Col>
      </Row>
      <Row>
        <ul style={{"list-style-type": "none"}}>
          <li className='list-item-indent'>Hehe</li>
          <li className='list-item-indent'>Hehe</li>
          <li className='list-item-indent'>Hehe</li>
          <li className='list-item-indent'>Hehe</li>
        </ul>
      </Row>
    </li>
  )
}

export default ListItem