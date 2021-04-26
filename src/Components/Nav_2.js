import React from "react";
import "../Styles/Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import { Row, Col, Nav } from "react-bootstrap";

function Nav_2() {
  return (
    <>
      <Nav class="blacknav">
        <Row>
          <Col></Col>
          <Col>
            <a class="nav-link title" href="/">
              PORTFOLIO
            </a>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col xl={4} lg={4} sm={2} xs={1}></Col>
          <Col>
            <center>
              <Link to="/mywork">
                <a class="a">MY WORK</a>
              </Link>
              <Link to="/aboutme">
                <a class="a">About Me</a>
              </Link>
            </center>
          </Col>
          <Col xl={4} lg={4} sm={2} xs={1}></Col>
        </Row>
      </Nav>
    </>
  );
}

export default Nav_2;
