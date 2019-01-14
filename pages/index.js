import styled from 'styled-components';
import React from 'react';
import Journal from '../Journals.json';
import Link from 'next/link';

const HomeDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 2rem;

  h1 {
    font-size: 2.4rem;
    font-family: 'radnika_next';
    padding-top: 2rem;
    font-weight: 200;
  }
  p {
    font-size: 1.8rem;
  }
`;

const StyledJournalEntry = styled.div`
  margin: 2rem;
  width: 40%;
`;

const StyledDivLinks = styled.div`
  display: flex;
  a {
    padding: 1rem 2rem 1rem 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
`;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {}
  render() {
    return (
      <HomeDiv>
        {Journal.map(item => {
          return (
            <StyledJournalEntry>
              <h1> Days {item.Day}</h1>
              <p> I contributed on {item.Contributions}</p>
              <p>I achieved that by {item.Description}</p>
              <StyledDivLinks>
                <a href={item.frontEndLink}>
                  Frontend Link: {item.frontEndLink}
                </a>
                <a>Backend Link: {item.backEndLink}</a>
              </StyledDivLinks>
            </StyledJournalEntry>
          );
        })}
      </HomeDiv>
    );
  }
}

export default Homepage;
