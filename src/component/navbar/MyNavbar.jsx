import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"

function MyNavbar() {
   
  return (
    <Navbar expand="lg" className='w-100  ' style={{ zIndex: "100", backgroundColor: "#111111", color: "#fff", height: "10vh", position: "fixed", }}>
      <Container fluid className="container   d-flex align-items-center justify-content-between">

        <Navbar.Brand style={{ color: "#fff", flex: "1" }} href="#">
          <h4 className='p-0 m-0'>Ghaith <span className='coloredtext'>Sawan</span></h4>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll"  />

        <Navbar.Collapse id="navbarScroll" style={{backgroundColor: "#111111"}} >
          <Nav
            className="me-auto my-2 my-lg-0  d-flex align-items-end justify-content-end w-100 " 
            navbarScroll
          >
            <ul className='navbar-nav d-flex align-items-center justify-content-center gap-3'>
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
                <span className="haverspan"></span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Scales">Skills</a>
                <span className="haverspan"></span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">Services</a>
                <span className="haverspan"></span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
                <span className="haverspan"></span>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default MyNavbar;
