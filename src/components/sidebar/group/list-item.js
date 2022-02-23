import { Button, Overlay, OverlayTrigger, Tooltip, Col, Row } from 'react-bootstrap';

const ListItem = (props) => {

  const clas  = props.class
  const color = props.color
  const name  = props.name

  const children = props.children
  const notes    = props.notes

  const onclick  = props.onclick

  return (
    <li className={clas + " list-item"}>
      <Row>
      <Col className='list-item-name'>
        {name}
      </Col>
      <Col>
        <div className='list-item-collection' style={{"background":color}}></div>
      </Col>
      </Row>
      <Row>
        <ul style={{"list-style-type": "none"}}>
          {children.map((id)=> {
            return notes.map((note)=> {

              if (note._id === id) {
                return (               
                  <li  onClick={()=>onclick(id)} className='list-item-indent'>{note.title}</li>
                )
              }

            })
          })}
        </ul>
      </Row>
    </li>
  )
}

export default ListItem