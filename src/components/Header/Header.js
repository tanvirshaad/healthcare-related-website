import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <div>
                            <Link to="/home">Home</Link>
                            <Link to="/experts">Experts</Link>
                            <Link to="/about">About Us</Link>
                            {/* <Link to="/login">Login</Link> */}
                        </div>
                        <div>
                            {user?.email ? (
                                <Button onClick={logOut} variant="light">
                                    Logout
                                </Button>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                            <Navbar.Text className="ms-3">
                                Signed in as:{' '}
                                <a href="/login">{user?.displayName}</a>
                            </Navbar.Text>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
