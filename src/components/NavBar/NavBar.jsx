import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

import './navbar.css'

import CartWidget from './CartWidget'

import logo from '../../assets/logo.png'


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar ">
          <Container>
            <Link to="/"> <img src={logo} alt="logo" className='logo'/> </Link>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to={"/category/arduino"}>Arduino</Link>
                <Link to={"/category/raspberry"}>Reapberry pi</Link>
                <Link to={"/category/esp"}>Esp32</Link>
                <Link to={"/ckeckout"}> <CartWidget /> </Link>
            
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
}

export default NavBar