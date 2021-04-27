import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../Styles/Aboutme.css";
import image from "../img/image.png";

function Aboutme() {
  return (
    <>
      <Container className="containerabout">
        <Row>
          <Col xl={3}></Col>
          <Col xl={6}>
            <Card>
              <Card.Body>
                <LazyLoadImage
                  className="rounded-circle mx-auto d-block profile mb-3"
                  src={image}
                  effect="blur"
                />
                <Card.Title>
                  <center>ABOUT ME</center>
                </Card.Title>
                <Card.Text className="text-center">
                  <p>ชื่อ ณัฐพงศ์ สายนาค ชื่อเล่น อ๊อฟ</p>
                  <p>วันเกิด 16 ธันวาคม 2543 อายุ 20 ปี</p>
                  <p>งานอดิเรก เล่นเกม ดูหนัง เล่นดนตรี</p>
                  <p>อาชีพที่สนใจ Front End Developer</p>
                </Card.Text>
                <Card.Title>
                  <center>EDUCATION</center>
                </Card.Title>
                <Card.Text className="text-center">
                  <p>King Mongkut's Institute of Technology Ladkrabang</p>
                  <p>Information Technology | 2018 - Present</p>
                </Card.Text>
                <Card.Title>
                  <center>SKILL</center>
                </Card.Title>
                <Card.Text className="text-center">
                  <p>HTML | Css | Javascript | React | Bootstrap</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Aboutme;
