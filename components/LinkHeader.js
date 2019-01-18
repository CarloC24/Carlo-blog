import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLinkHeader = styled.div`
  background-color: rgb(60, 20, 20);
  height: 50px;
  display: flex;
  align-items: center;
  a {
    color: #ffffcc;
    padding: 2rem;
  }
`;

export default class LinkHeader extends Component {
  render() {
    return (
      <StyledLinkHeader>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/weekly">
          <a>Weekly</a>
        </Link>
          <a href="https://bonafind.netlify.com">Frontend</a>
          <a href="https://bonafind.herokuapp.com">Backend</a>
      </StyledLinkHeader>
    );
  }
}
