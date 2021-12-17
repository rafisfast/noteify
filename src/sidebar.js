import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
  return(
    // <div style={
    //   {"background":"red","width":"100vw"}
    // }>

    // </div>
    <Col sm={2} style={{"min-width":"200px"}}>
      <div className='sidebar py-3 my-1 m-2 mr-4 border-right'>
        <div className='inner-sidebar p-0'>
           <div></div>
        </div>
      </div>
    </Col> 
  )
}

export default Sidebar