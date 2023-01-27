import { Card, Col, Container, Row } from 'react-bootstrap';
import ListPage from '../components/urlList';

const URLListPage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card className='mt-5 w-auto'>
                            <Card.Header>History</Card.Header>
                            <Card.Body className="text-start">
                                <Card.Title>We can see already converted URL's</Card.Title>
                                <ListPage></ListPage>
                            </Card.Body>
                        </Card></Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">© Kasun Abaywardana</div>
        </>
    );
}

export default URLListPage;
