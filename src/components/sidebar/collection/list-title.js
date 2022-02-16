import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';
import plus from '../../../images/plus.svg'

const ListTitle = (props) => {

  const color = props.color

  return (
    <li className='pt-2'>
      <Row>
        <Col>
          <b style={{"font-size":"20px"}}>Notes</b>
        </Col>
        <Col style={{"textAlign":"right"}}>
          <img src={plus} style={{"border":"none","width":"18px","height":"18px"}}/>
        </Col>
      </Row>
    </li>
  )
}

export default ListTitle