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
        <Link href="/user">
          <a>User Schema</a>
        </Link>
        <a target="_blank" href="https://bonafind.netlify.com">
          Frontend
        </a>
        <a target="_blank" href="https://bonafind.herokuapp.com">
          Backend
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=S8zx4r_JqcY&feature=youtu.be"
        >
          Whiteboard Week 2 - Interviewer
        </a>
        <a target="_blank" href="https://www.youtube.com/watch?v=BiSTyUMsakk">
          Whiteboard Week 3 - Interviewer
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v=oUZYTlUVEbM&feature=youtu.be"
        >
          Whiteboard Week 3 - Interviewee
        </a>
      </StyledLinkHeader>
    );
  }
}
