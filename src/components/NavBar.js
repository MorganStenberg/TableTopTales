import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo_ttt.PNG'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <Navbar 
      expand="md" 
      fixed="top"
      className={styles.NavBar}
      >
        <Container>
          <NavLink className={styles.NavLogo} to="/">
            <Navbar.Brand>
              <Image
              roundedCircle
              src={logo} 
              alt='logo' 
              height='45' 
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            > Home
            </NavLink>
              <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
              >
                Sign in
              </NavLink>
              <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signup">
                Sign up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;