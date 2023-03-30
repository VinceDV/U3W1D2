import { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import books from '../data/fantasy.json'
import SingleBook from "./SingleBook";


class BookList extends Component {
    state = {
        searchQuery: ''
    }
    
    render() {
    return (
        <Container>
        <Row className="d-flex justify-content-center mt-3">
                {books.map((book) => {
                    return (
                        <SingleBook title={book.title} key={book.asin} img={book.img} price={book.price}/>
                    )
                })}
        </Row>
    </Container>
    );
  }
}

export default BookList;
