import React, { Component, Fragment } from "react";
import styled from "styled-components";

// import star from '../image/header-slogan-star.png';

const Sub1 = styled.div`
  font-size: 80px;
  text-align: center;
  color: #fff;
  padding-top: 100px;
  text-shadow: -5px 5px 5px rgba(0, 0, 0, 0.23);
  line-height:0.94;
  
`;
const Sub2 = styled.div`
  font-size: 155px;
  text-align: center;
  text-shadow: -5px 5px 5px rgba(0, 0, 0, 0.23);
  color: #fff;
  line-height:0.94;
`;
const Sub3 = styled.div`
  font-size: 100px;
  text-align: center;
  color: #fff;
  text-shadow: -5px 5px 5px rgba(0, 0, 0, 0.23);
  line-height:0.94;
`;

export class TextTwing extends React.Component {
  state = {
    text: ["BRANDING", "CARTTONS", "WEB & APP"],
    position: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({position: this.state.position+1});
      if(this.state.position > 2){
          this.setState({position: 0});
      }
    }, 2000);
  }

  render() {
    return (
      <Fragment>
        <div>
          <Sub1><img src='/image/header-slogan-star.png'/>  I LOVE TO MAKE  <img src='/image/header-slogan-star.png'/></Sub1>
          <Sub2>{this.state.text[this.state.position]}</Sub2>
          <Sub3>LOOK AWESOME</Sub3>
        </div>
      </Fragment>
    );
  }
}
export default TextTwing;
