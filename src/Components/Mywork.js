import "bootstrap/dist/css/bootstrap.min.css";
import "fontsource-roboto";
import "../Styles/Mywork.css";
import img1 from "../img/Khaoyai.png";
import img2 from "../img/spacex.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Aboutme from "./Aboutme";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

function Mywork() {
  return (
    <>
      <Container class="container">
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col xl={5} md={12} class="card">
                <Card>
                  <Card.Img variant="top" src={img1} />

                  <Card.Body>
                    <Card.Title>Khaoyai Through Time</Card.Title>
                    <Card.Text>Multimedia Programing Project</Card.Text>
                    <Link
                      to={{
                        pathname: "https://khaoyai-through-time.netlify.app/",
                      }}
                      target="_blank"
                    >
                      <Button className="float-right" variant="info">
                        View Page
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={0}></Col>
              <Col xl={5} md={12} class="card">
                <Card>
                  <Card.Img src={img2} />

                  <Card.Body>
                    <Card.Title>SpaceX</Card.Title>
                    <Card.Text>Full-Stack Web Developer (Node.js)</Card.Text>
                    <Link
                      to={{
                        pathname:
                          "https://spacex-aoffis-arinnaline.netlify.app/",
                      }}
                      target="_blank"
                    >
                      <Button className="float-right" variant="info">
                        View Page
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl={5} md={12} class="card">
                <Card>
                  <Card.Img src={img1} />

                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                    </Card.Text>
                    <Link
                      to={{
                        pathname: "https://khaoyai-through-time.netlify.app/",
                      }}
                      target="_blank"
                    >
                      <Button className="float-right" variant="info">
                        View Page
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} sm={2}></Col>
              <Col xl={5} sm={12} class="card">
                <Card>
                  <Card.Img src={img2} />

                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                    </Card.Text>
                    <Link
                      to={{
                        pathname: "https://khaoyai-through-time.netlify.app/",
                      }}
                      target="_blank"
                    >
                      <Button className="float-right" variant="info">
                        View Page
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col xl={5} md={12} class="card">
                <Card>
                  <Card.Img variant="top" src={img1} />

                  <Card.Body>
                    <Card.Title>Khaoyai Through Time</Card.Title>
                    <Card.Text>Multimedia Programing Project</Card.Text>
                    <Link
                      to={{
                        pathname: "https://khaoyai-through-time.netlify.app/",
                      }}
                      target="_blank"
                    >
                      <Button className="float-right" variant="info">
                        View Page
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} md={0}></Col>
              <Col xl={5} md={12} class="card">
                <Card>
                  <Card.Img src={img2} />

                  <Card.Body>
                    <Card.Title>SpaceX</Card.Title>
                    <Card.Text>Full-Stack Web Developer (Node.js)</Card.Text>
                    <Link
                      to={{
                        pathname:
                          "https://spacex-aoffis-arinnaline.netlify.app/",
                      }}
                      target="_blank"
                    >
                      <Button className="float-right" variant="info">
                        View Page
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xl={5} md={12} class="card">
                <Card>
                  <Card.Img src={img1} />

                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                    </Card.Text>
                    <Link
                      to={{
                        pathname: "https://khaoyai-through-time.netlify.app/",
                      }}
                      target="_blank"
                    >
                      <Button className="float-right" variant="info">
                        View Page
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={2} sm={2}></Col>
              <Col xl={5} sm={12} class="card">
                <Card>
                  <Card.Img src={img2} />

                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                    </Card.Text>
                    <Link
                      to={{
                        pathname: "https://khaoyai-through-time.netlify.app/",
                      }}
                      target="_blank"
                    >
                      <Button className="float-right" variant="info">
                        View Page
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
export default Mywork;
