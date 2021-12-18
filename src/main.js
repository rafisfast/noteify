import { useRef, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Main = () => {

  const title = useRef()

  useEffect(()=> {
    // prevent contenteditable entering
    title.current.addEventListener('keypress', (evt) => {
        if (evt.which === 13) {
            evt.preventDefault();
        }
    });
  },[])

  return(
    <Col>
      <div className="main-content py-3 my-1 m-2 mx-1 overflow-hidden">
        <div className='notes p-0 my-auto'>
          <Container fluid className='overflow-auto pl-5 main-inner' style={{"width":"98%","height":"100%"}}>
            <div ref={title} contentEditable="true" className='overflow-hidden pt-2 main-title'>
              <p className='p-0'>
              heehehe Title
              </p>
            </div>
            <hr></hr>
            <div contentEditable className='overflow-hidden pb-3'>
              <i className='overflow-auto main-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Vitae sapien pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque. Turpis nunc eget lorem dolor. Lectus nulla at volutpat diam ut venenatis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Et ultrices neque ornare aenean euismod elementum. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.
Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. At risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien faucibus et molestie. Auctor urna nunc id cursus metus aliquam. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Id semper risus in hendrerit gravida rutrum. Nec feugiat in fermentum posuere. A cras semper auctor neque vitae tempus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Tristique senectus et netus et malesuada fames. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Cursus in hac habitasse platea. Viverra accumsan in nisl nisi scelerisque eu. Ut eu sem integer vitae justo eget.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Vitae sapien pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque. Turpis nunc eget lorem dolor. Lectus nulla at volutpat diam ut venenatis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Et ultrices neque ornare aenean euismod elementum. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.
Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. At risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien faucibus et molestie. Auctor urna nunc id cursus metus aliquam. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Id semper risus in hendrerit gravida rutrum. Nec feugiat in fermentum posuere. A cras semper auctor neque vitae tempus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Tristique senectus et netus et malesuada fames. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Cursus in hac habitasse platea. Viverra accumsan in nisl nisi scelerisque eu. Ut eu sem integer vitae justo eget.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Vitae sapien pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque. Turpis nunc eget lorem dolor. Lectus nulla at volutpat diam ut venenatis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Et ultrices neque ornare aenean euismod elementum. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.
Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. At risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien faucibus et molestie. Auctor urna nunc id cursus metus aliquam. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Id semper risus in hendrerit gravida rutrum. Nec feugiat in fermentum posuere. A cras semper auctor neque vitae tempus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Tristique senectus et netus et malesuada fames. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Cursus in hac habitasse platea. Viverra accumsan in nisl nisi scelerisque eu. Ut eu sem integer vitae justo eget.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Vitae sapien pellentesque habitant morbi tristique senectus et. Fermentum leo vel orci porta non pulvinar neque. Turpis nunc eget lorem dolor. Lectus nulla at volutpat diam ut venenatis. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Et ultrices neque ornare aenean euismod elementum. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan.
Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. At risus viverra adipiscing at. Duis at consectetur lorem donec massa sapien faucibus et molestie. Auctor urna nunc id cursus metus aliquam. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Id semper risus in hendrerit gravida rutrum. Nec feugiat in fermentum posuere. A cras semper auctor neque vitae tempus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Tristique senectus et netus et malesuada fames. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Cursus in hac habitasse platea. Viverra accumsan in nisl nisi scelerisque eu. Ut eu sem integer vitae justo eget.
             </i>
            </div>
            
          </Container>
        </div>
      </div>
    </Col>
  )
}

export default Main