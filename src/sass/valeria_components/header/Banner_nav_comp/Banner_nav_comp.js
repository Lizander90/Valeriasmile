import React from "react";
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Banner_nav_comp = () => {
    return <>
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="#home"><div className="logoVS Container" /></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">INICIO</Nav.Link>
                        <Nav.Link href="#link">SERVICIOS</Nav.Link>
                        <Nav.Link href="#link">CLINICA</Nav.Link>
                        <Nav.Link href="#link">NOSOTROS</Nav.Link>
                        <Nav.Link href="#link">AGENDAR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    </>
}

export default Banner_nav_comp;