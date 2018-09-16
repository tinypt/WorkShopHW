import React, { Component , Fragment } from 'react';
import styled from 'styled-components';

import { Container , Col ,Row } from 'reactstrap';

const Nav = styled.div`
  background: url('image/top-bar-bg.png')   repeat;
  height: 90px;
  margin-top: 60px;
  display: block;
  position: sticky;
    top: 0;
    z-index: 1071;
    text-align: center;
`;

const Logo = styled.img`
  margin-top: -50px;
  
`

const Link = styled.a`
padding-top: 60px;
  font-size:30px;
    text-align: center;
`

export class Navbar extends React.Component {
    render() {
        return (
           <Fragment>
                <Nav>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col>
                            <Link>SERVICES</Link>
                            </Col>
                            <Col><img src='/image/top-bar-divider.png'/></Col>
                            <Col><Link>PORTFOLIO</Link></Col>
                            <Col><Logo src='/image/logo.png' alt /></Col>
                            <Col><Link>OUR NEWS</Link></Col>
                            <Col><img src='/image/top-bar-divider.png'/></Col>
                            <Col><Link>CONTACT US</Link></Col>
                            <Col></Col>
                        </Row>
                   
                    </Container>
                   
                </Nav> 
           </Fragment>
        );
    }
};
export default Navbar;