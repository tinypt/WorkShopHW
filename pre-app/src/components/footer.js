import React, { Component } from 'react';
import styled from 'styled-components';


const SubHeader = styled.p`
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 24px;
    font-family: Anton, sans-serif;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
` 



export class Footer extends React.Component {
    render() {
        return (
           <div>
                <SubHeader>
                    <p>WE ARE SOCIAL!</p>
                <img src='/image/social-buttons-sprite.png'/>
                </SubHeader>
           </div>
        );
    }
};
export default Footer;