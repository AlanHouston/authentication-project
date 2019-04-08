import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let links;
  if(props.showNavItems){
    links = (
    <span>
      <Nav pullRight>
        <Link to="/secureThree"><Navbar.Text>Three</Navbar.Text></Link>
      </Nav>
      <Nav pullRight>
        <Link to="/secureTwo"><Navbar.Text>Two</Navbar.Text></Link>
      </Nav>
      <Nav pullRight>
        <Link to="/secureOne"><Navbar.Text>One</Navbar.Text></Link>
      </Nav> 
    </span>   
    )   
  }
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>
        <Nav pullRight>
          <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
        </Nav> 
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
