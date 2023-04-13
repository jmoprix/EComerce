import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Cart from './Cart';

const NavBar = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
                        <Nav.Link onClick={() => setShow(true)}>Cart</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
            <Cart
                show={show}
                handleClose={handleClose}
            />
        </>
    );
};

export default NavBar;