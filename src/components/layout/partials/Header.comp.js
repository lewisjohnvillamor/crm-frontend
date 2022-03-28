import React from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import logo1 from "../../assets/img/Lewis CRM-logos_black.png";

export const Header = () => {
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
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Tickets</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
  )
}
