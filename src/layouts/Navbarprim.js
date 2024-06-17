import React from 'react'
import { Navbar, Nav, Container  } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";


export default function Navbarprim() {
  return (
    <>
      <Navbar expand="lg" variant='dark' className="Navarcito">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className='Logo' src={Logo1}/> 
          </Navbar.Brand>
          <Navbar.Brand ><h1>Tienda de Cosmeticos - J&M</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/Sucursales" >Sucursales</Nav.Link>
              <Nav.Link as={Link} to="/Menu" >Menu</Nav.Link>
              <Nav.Link as={Link} to="/Contactos" >Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*devolucion de valores: se encarga el section*/}
      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}
