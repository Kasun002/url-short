import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#">URL Shortener</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
