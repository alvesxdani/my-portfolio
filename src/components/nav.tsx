import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

const Link = styled(Nav.Link)`
color: #D94A56;
transition: .8s ease;
font: 1rem 'Montserrat',sans-serif;
margin: 1rem;
  &:hover {
    color: #3E3E40;
  }
}
`;

const BrandTitle = styled.div`
font: bold 1.5rem 'Nunito',sans-serif;
color: #3E3E40;
`;

function NavBar() {
  return (
    <Navbar bg="light" expand='sm' className='w-100'>
      <Container fluid>
        <Navbar.Brand href="/" className='p-2 ms-3'>
          <BrandTitle>Daniela Moreira</BrandTitle>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='me-3'>
            <Link href="/">Home</Link>
            <Link href="#sobre">Sobre</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projetos</Link>
            <Link href="#contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;