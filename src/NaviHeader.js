import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

export default class NaviHeader extends Component {
  render() {
    return (
      <Container className='p-0'>
        <Row className="align-items-center p-0">
          <Col xs="12" md="3">
            <div id='logo'
              style={{
                background: 'url("./logo512.png") center center no-repeat',
                backgroundSize: "cover",
                width: "40px",
                height: "40px",
              }}
            ></div>
          </Col>
          <Col xs="12" md="6">
            <ListGroup className="d-flex flex-row justify-content-center" style={{ height: '100%' }}>
              
              <Link to='/'>
                <ListGroupItem className="px-4 py-3  border-0  text-dark rounded-0 bg-warning listItems" style={{transition:'ease all .5s'}}>
                  Home
                </ListGroupItem>
              </Link>  
              <Link to='about'>
                <ListGroupItem className="px-4 py-3  border-0  text-dark rounded-0 bg-warning listItems" style={{transition:'ease all .5s'}}>
                  About
                </ListGroupItem>
              </Link>  
              <Link to='concat'>
                <ListGroupItem className="px-4 py-3 border-0  text-dark rounded-0 bg-warning listItems" style={{transition:'ease all .5s'}}>
                  Concat
                </ListGroupItem>
              </Link>  
              <Link to='text'>
                <ListGroupItem className="px-4 py-3 border-0  text-dark rounded-0 bg-warning listItems" style={{transition:'ease all .5s'}}>
                  Projects
                </ListGroupItem>
              </Link>  
            </ListGroup>
          </Col>
          <Col xs="12" md="3">
            <form style={{ position: 'relative' }}>
              <div className="input-group justify-content-end" >
                <input
                  type="text"
                  className="form-control "
                  placeholder="Your mail address.."
                />

                <span className="input-group-text text-white bg-danger border-0" id="basic-addon2">
                  @gmail.com
                </span>
              </div>
              <Button type='submit' style={{ position:'absolute', visibility: 'hidden' }}></Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
