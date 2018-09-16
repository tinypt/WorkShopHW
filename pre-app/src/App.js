import React, { Component ,Fragment } from "react";
import "./App.css";
import styled from "styled-components";

import FooterSocial from "./components/footer.js";
import Navbar from './components/navbar';
import TextTwing from './components/textTwing'

const FooterPic = styled.div`
  background: url('image/footer-bg.png') center 100% no-repeat;
  height: 4000px;
  margin-top: -167px;
  padding-top: 192px;
  text-align: center;
  font-size:12px;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <TextTwing></TextTwing>
          <FooterSocial />
        <FooterPic>
          <p>
            <a href="http://themes.fxoffice.net/cr_wp/">Color Room Demo </a>©
            2018
          </p>
        </FooterPic>
      </Fragment>
    );
  }
}

export default App;
