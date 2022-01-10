import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <Container className="py-3">
        <Row>
          <Col className="text-white" xs="12" sm='12' md='4'>
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ width: "100%" }}
            >
              <div
                id="logo"
                style={{
                  background: 'url("./logo512.png") center center no-repeat',
                  backgroundSize: "cover",
                  width: "100px",
                  height: "100px",
                }}
              ></div>
              <h3 style={{ letterSpacing: "1px", fontWeight: "1000" }}>
                The Ethical Man
              </h3>
            </div>
            <label style={{ fontSize: "11px", letterSpacing: "1px" }}>
              This is a Exampe-Company. This Exampe-Company is created in 2
              years. If you want to more informations, please concat us..
            </label>
          </Col>
          <Col xs="12" sm='12' md='4'>
            <ListGroup className="align-items-start">
              <h5
                className="text-white text-center p-3 border border-white"
                style={{
                  letterSpacing: "1px",
                  fontWeight: "600",
                  width: "80%",
                }}
              >
                Direct Links
              </h5>
              <Link to='/' className="footerLinks">
                <ListGroupItem className="footerListGroup">
                  Home
                </ListGroupItem>
              </Link>
              <Link to='about' className="footerLinks">
                <ListGroupItem className="footerListGroup">
                  About
                </ListGroupItem>
              </Link>
              <Link to='concat' className="footerLinks">
                <ListGroupItem className="footerListGroup">
                  Concat
                </ListGroupItem>
              </Link>
              <Link to="text" className="footerLinks">
                <ListGroupItem className="footerListGroup">
                  Projects
                </ListGroupItem>
              </Link>
            </ListGroup>
          </Col>
          <Col xs="12" sm='12' md='4'>
            <ListGroup className="align-items-end">
              <h5
                className="text-white text-center p-3 border border-white"
                style={{
                  letterSpacing: "1px",
                  fontWeight: "600",
                  width: "80%",
                }}
              >
                Social Accounts Links
              </h5>
              <Link className="footerLinks text-end">
                <ListGroupItem className="footerListGroup">
                  Facebook
                </ListGroupItem>
              </Link>
              <Link className="footerLinks text-end">
                <ListGroupItem className="footerListGroup">
                  Instagram
                </ListGroupItem>
              </Link>
              <Link className="footerLinks text-end">
                <ListGroupItem className="footerListGroup footerListGroup3">
                  Linke
                </ListGroupItem>
              </Link>
              <Link className="footerLinks text-end">
                <ListGroupItem className="footerListGroup">
                  Youtube
                </ListGroupItem>
              </Link>
            </ListGroup>
          </Col>
        </Row>
        <hr className="bg-secondary mt-5" />
        <div
          className=" d-flex flex-row justify-content-between text-secondary"
          style={{ fontSize: "11px" }}
        >
          <label>Copyright © since 2022</label>
          <label>Last update 1 hour age</label>
        </div>
      </Container>
    );
  }
}
