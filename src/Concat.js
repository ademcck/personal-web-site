import React, { Component } from 'react'
import { Container,Row,Col,  Button } from 'reactstrap'

export default class Concat extends Component {
    render() {
        return (
            <Container>
                <Row className="bg-dark py-5 my-5">
                    <Col className="px-0">
                        <form className='px-5' method='post'>
                            <div className="form-group mt-3" style={{ width:'100%' }}>
                                <label for='i1'  className='text-info form-text' style={{ fontWeight: '800', letterSpacing: '2px' }}>First Name:</label>
                                <input id='i1' className='p-2 form-control' type='text' placeholder='First Name' autoComplete="off" style={{  letterSpacing: '1px' ,width: '100%', fontSize: '18px',}}></input>
                            </div>
                            <div className="form-group mt-3" style={{ width:'100%' }}>
                                <label for='i2'  className='text-info form-text' style={{ fontWeight: '800', letterSpacing: '2px' }}>Second Name</label>
                                <input id='i2' className='p-2 form-control' type='text' placeholder='Second Name' autoComplete="off" style={{  letterSpacing: '1px' ,width: '100%', fontSize: '18px',}}></input>
                            </div>
                            <div className="form-group mt-3" style={{ width:'100%' }}>
                                <label for='i3' className='text-info form-text' style={{ fontWeight: '800', letterSpacing: '2px' }}>Email:</label>
                                <input id='i3' className='p-2 form-control' type='email' placeholder='Email' style={{  letterSpacing: '1px' ,width: '100%', fontSize: '18px'}}></input>
                            </div>
                            <div className="form-group mt-3" style={{ width:'100%' }}>
                                <label for='i4' className='text-info form-text' style={{ fontWeight: '800', letterSpacing: '2px' }}>Question:</label>
                                <textarea id='i4'  className='p-2 form-control' placeholder='Question' rows='3' autoComplete="off" style={{  letterSpacing: '1px', fontSize: '18px', resize: 'none' , }}></textarea>
                            </div>
                            <div className='form-group mt-5 d-flex justify-content-center' style={{ width: '100%' }}>
                                <Button type='submit' className="btn btn-info" style={{ width: '50%' }}>SEND</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
