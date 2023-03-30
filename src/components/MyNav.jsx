import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// questi import sono più scomodi, ma sono più efficienti
// perchè non importano tutto 'react-bootstrap' dentro il mio componente
// CustomNavbar, ma solo tre "sotto-sezioni" della libreria

// import { Container, Nav, Navbar } from 'react-bootstrap'
// import meno efficiente :(

function myNav(props) {
  // la prop brandTitle è un attributo dell'oggetto props
  // props.brandTitle
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          EpiLibro {props.brandTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Quale libro cerchi?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
            <Nav.Link href="#booking">HOME</Nav.Link>
            <Nav.Link href="#contacts">ABOUT</Nav.Link>
            <Nav.Link href="#admin">BROWSE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default myNav