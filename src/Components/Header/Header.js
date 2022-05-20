import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container className='flexNav'>
                    <div> <Navbar.Brand as={Link} to="/">Arif Electronics</Navbar.Brand></div>
                    <div> <Nav className="me-auto text">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>

                        {
                            user && <>
                                <Nav.Link as={Link} to="/products">Manage Products</Nav.Link>
                                <Nav.Link as={Link} to="/myItems">My items</Nav.Link>

                            </>
                        }

                        <Nav.Link as={Link} to="/addProduct">Addproduct</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>}




                    </Nav></div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;