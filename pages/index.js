import styled from 'styled-components';
import React from 'react';
import Journal from '../Journals.json';
import Link from 'next/link';

const HomeDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 20px;

  h1 {
    font-size: 50px;
    padding-top: 20px;
    text-align: center;
  }
  p {
    font-size: 20px;
    text-align: center;
  }
  .underlined {
    text-decoration: underline;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledJournalEntry = styled.div`
  box-shadow: ${props => props.theme.bs};
  border: 1px solid black;
  border-radius: 5px;
  width: 30%;
  text-align: center;
`;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {}
  render() {
    return (
      <HomeDiv>
        <div>
          <h1>Hey Welcome to My Labs Blog</h1>
          <p>
            My name is Carlo Clamucha and I'm currently working on the business
            reviews
          </p>
          <Link href="/weekly">
            <p class="underlined">Weekly reviews</p>
          </Link>
        </div>
        <FlexDiv>
          {Journal.map(entry => {
            return (
              <StyledJournalEntry>
                <p> Day {entry.Day}</p>
                <p>{entry.Contributions}</p>
                <p>{entry.Description}</p>
                <p>{entry.frontEndLink}</p>
                <p>{entry.backEndLink}</p>
              </StyledJournalEntry>
            );
          })}
        </FlexDiv>
      </HomeDiv>
    );
  }
}

export default Homepage;
