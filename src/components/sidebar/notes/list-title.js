import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';
import plus from '../../../images/plus.svg'

const ListTitle = (props) => {

  const color = props.color

  return (
    <li>
      <Row>
        <Col>
          <b >Notes</b>
        </Col>
        <Col style={{"textAlign":"right"}}>
          <img src={plus} style={{"border":"none","width":"15px","height":"15px"}}/>
        </Col>
      </Row>
    </li>
  )
}

export default ListTitle