import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import logo1 from "../../assets/img/Lewis CRM-logos_black.png";
import { useNavigate } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

export const Header = () => {

  const navigate = useNavigate();
  const logMeOut = () =>
  {
    navigate("/")
  }

  return (
    <Navbar
    collapseOnSelect
    variant="dark"
    bg="info"
    expand="md"
    >
        <Navbar.Brand>
         <img scr={logo1} alt=" Logo " width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="Basic-navbar-nav" />
        <Navbar.Collapse id ="basic-navbar-nnav">
            <Nav className="ms-auto">
              {/* <LinkContainer to="/dashboard">   <Nav.Link >Dashboard</Nav.Link>   </LinkContainer>
              <LinkContainer to="/tickets">   <Nav.Link >Tickets</Nav.Link> </LinkContainer> */}

              <LinkContainer to="/dashboard">
                   <Nav.Link >Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tickets">
                   <Nav.Link >Tickets</Nav.Link>
              </LinkContainer> 
              <Nav.Link onClick={logMeOut}>Logout</Nav.Link>  
             
                
               
              
            </Nav>
        </Navbar.Collapse>
        </Navbar>
  )
}
