import { Component } from "react";
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import books from '../data/fantasy.json'
class MyHome extends Component {
    render() {
        return (
            <Container>
                <Row className="d-flex justify-content-center mt-3">
                        {books.map((book) => {
                            return (
                                <Col key={book.asin} className="p-3" xs={12} md={8} lg={3}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={book.img}/>
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            ${book.price}
                                        </Card.Text>
                                        <Button variant="primary">Aggiungi</Button>
                                    </Card.Body>
                                </Card>
                                </Col>

                            )
                        })}
                </Row>
            </Container>
        );
    }
}

export default MyHome