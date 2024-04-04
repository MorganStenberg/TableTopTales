import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo_ttt.PNG'

const NavBar = () => {
    return (
      <Navbar 
      expand="md" 
      fixed="top"
      className={styles.NavBar}
      >
        <Container>
          <Navbar.Brand>
            <Image
            roundedCircle
            src={logo} 
            alt='logo' 
            height='45' 
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-left">
              <Nav.Link
              className={styles.NavLink}
              activeClassName={styles.Active}
              >
                Home
              </Nav.Link>
              <Nav.Link
              className={styles.NavLink}
              activeClassName={styles.Active}
              >
                Sign in
              </Nav.Link>
              <Nav.Link
              className={styles.NavLink}
              activeClassName={styles.Active}>
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;