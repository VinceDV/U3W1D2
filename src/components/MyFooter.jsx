import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyFooter() {
  return (
    <Card className="fixed-bottom">
      <Card.Header>Contatti</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MyFooter;