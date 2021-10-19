import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto d-flex">
                        <div>
                            <Link to="/home">Home</Link>
                            <Link to="/experts">Experts</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/login">Login</Link>
                        </div>
                        <div>
                            <Navbar.Text className="ms-3">
                                Signed in as: <Link to="/login">Mark Otto</Link>
                            </Navbar.Text>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
