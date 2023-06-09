import { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import books from '../data/fantasy.json'
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/esm/Form";

class BookList extends Component {
    state = {
        query: "",
        selected: false,
    }
    filterBookList() {
        return (
        books.filter((book) => {
            return (
            book.title.toLowerCase().includes(this.state.query.toLowerCase())
        )}))
    }
    render() {
        const cardClassName = this.state.selected ? "selected-card" : ""
    return (
        <Container>
            <Form className="d-flex mt-3">
            <Form.Control
              type="search"
              placeholder="Quale libro cerchi?"
              className="me-2"
              aria-label="Search"
              onChange={() => {
                this.setState({
                  query: !this.target.value,                
                })
              }}
            />
          </Form>
        <Row className="d-flex justify-content-center mt-3">
                {this.filterBookList().map((book) => {
                    return (
                        <SingleBook onClick={(e) => {
                          this.setState({
                            selected: true
                          })
                        }} className={cardClassName} title={book.title} key={book.asin} img={book.img} price={book.price}/>
                    )
                })}
        </Row>
    </Container>
    );
  }
}

export default BookList;
