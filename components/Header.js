import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 100px;
  width: 100%;
  h1 {
    text-align: center;
    margin: 2rem auto;
  }
  p {
    margin: 2rem auto;
    font-family: 'Roboto';
    text-align: center;
    font-size: 1.8rem;
  }
`;

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>Labs Blog - Carlo Clamucha</h1>
        <p>Business Reviews</p>
      </StyledHeader>
    );
  }
}
