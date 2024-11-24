import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/style.css'
import { Link, Element } from 'react-scroll';
import pull from '../assets/images/pull.png'

const NavBarComp = () => {     
  const handlegit=()=>{
    const url ='https://github.com/manjimaprasad22'
    window.open(url, '_blank');
} 
  return (
    
       <Navbar collapseOnSelect expand="lg" className=" navbar-body fixed-top nav-background" >
      <Container>
        <Navbar.Brand href="#home" style={{width:"30%"}} className='logo'>
        {/* <img src={logo} className='nav-logo' style={{width:"70px"}}/> */}
        Manjima
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className=" nav-items text-center">
            
            {/* <NavDropdown title="Product" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Service" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <div className="nav_items"> */}
              <Nav className='m-3'>
                <Link to="About" smooth={true} duration={400}>About</Link></Nav>
            <Nav className='m-3'> <Link to="Skills" smooth={true} duration={400}>Skills</Link></Nav>
            <Nav className='m-3'><Link to="Experience" smooth={true} duration={400}>Experience</Link></Nav>
            <Nav className='m-3'> <Link to="Projects" smooth={true} duration={400}>Projects</Link></Nav>
            <Nav className='m-3'><Link to="Education" smooth={true} duration={400}>Education</Link></Nav>
            <Nav className='m-3'><Link to="hire" smooth={true} duration={400}>Hire me</Link></Nav>
            {/* </div> */}
            
            <Nav>
              <button className='btn' onClick={handlegit}> <i className="fab fa-github"></i> Github <img src={pull} alt="" className='pull' /></button>
            </Nav>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar> 
   
  )
}

export default NavBarComp
