import { Navbar, Nav, Container, Form, FormControl, Button }  from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './user.css'


const Header = () => {
  return (
    <header  >
      <Navbar className='head'  bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container >
          <Navbar.Brand  href='/' className='headText'>freespot</Navbar.Brand>
         
          <Form inline className='searchBar'>
              <FormControl type='text' placeholder='Search' className='mr-sm-2' />
              <Button variant='outline-light'>Search</Button>
            </Form>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;