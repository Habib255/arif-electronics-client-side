import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        // <>
        //     <Navbar bg="dark" variant="dark">
        //         <Container>
        //             <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Nav.Link>
        //                 <Nav.Link href="#features">Features</Nav.Nav.Link>
        //                 <Nav.Link href="#pricing">Pricing</Nav.Nav.Link>
        //             </Nav>
        //         </Container>
        //     </Navbar>
        // </>
        <div>

            <Navbar bg="dark" variant="dark">
                <Container className='flexNav'>
                    <div> <Navbar.Brand as={Link} to="/">Arif Electronics</Navbar.Brand></div>
                    <div> <Nav className="me-auto text">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/manageproducts">ManagePd</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/addProduct">Addproduct</Nav.Link>

                    </Nav></div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;