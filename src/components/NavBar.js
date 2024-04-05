import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styles from "../styles/NavBar.module.css";
import logo from '../assets/logo_ttt.PNG'
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {

  const currentUser = useCurrentUser();

  const addReview = (
    <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/reviews/create"
      > <i class="fa-solid fa-pencil"></i> Create Review
      </NavLink>
  )

  const loggedInNavbarIcons = (
    <>
    
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/saved"
      >Saved
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/wishlist"
      >Wishlist
      </NavLink>

      <NavLink className={styles.NavLink} to="/">
        Sign out
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to={`/profiles/${currentUser?.profile_id}`}
      > Profile
        
      </NavLink>
    </>
  )

  const loggedOutNavbarIcons = (
    <>
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
    </>
  )

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
              {currentUser ? loggedInNavbarIcons : loggedOutNavbarIcons}
            </Nav>
            {currentUser && addReview}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;