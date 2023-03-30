import { Component } from "react";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class SingleBook extends Component {
    state = {
        selected: false
    }
  render() {
    return (
          <Col key={this.props.asin} className="p-3" xs={12} md={8} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.props.img} />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>${this.props.price}</Card.Text>
                <Button variant="primary">Aggiungi</Button>
              </Card.Body>
            </Card>
          </Col>
    );
  }
}

export default SingleBook;
