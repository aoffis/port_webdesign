import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

function Aboutme() {
  return (
    <>
      <Row>
        <Col xl={3}></Col>
        <Col xl={3}>
          <Card>
            <Card.Img src="holder.js/100px180" />

            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card>
            <Card.Img src="holder.js/100px180" />

            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={3}></Col>
        <Col xl={3}>
          <Card>
            <Card.Img src="holder.js/100px180" />

            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}>
          <Card>
            <Card.Img src="holder.js/100px180" />

            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Aboutme;
