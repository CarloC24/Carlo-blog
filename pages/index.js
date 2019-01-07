import styled from 'styled-components';
import React from 'react';

const HomeDiv = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const Homepage = () => {
  return (
    <HomeDiv>
      <h1>Hey Welcome to My Labs Blog</h1>
      <p>My name is Carlo and ill be working on the business reviews</p>
    </HomeDiv>
  );
};

export default Homepage;
