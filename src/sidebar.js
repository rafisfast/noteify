import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
  return(
    // <div style={
    //   {"background":"red","width":"100vw"}
    // }>

    // </div>
    <Col sm={2}>
      <div className='sidebar py-2 m-1'>
        <div className='inner-sidebar p-0 rounded-3'>
           <div></div>
        </div>
      </div>
    </Col> 
  )
}

export default Sidebar