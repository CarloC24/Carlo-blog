import styled from 'styled-components';
import React from 'react';
import Journal from '../Journals.json';

const HomeDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 20px;
  h1 {
    font-size: 50px;
    padding-top: 20px;
  }
  p {
    font-size: 20px;
  }
  table {
    margin: 40px;
    border-collapse: collapse;

    tr,
    td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledJournalEntry = styled.div`
  box-shadow: ${props => props.theme.bs};
  border: 1px solid black;
  width: 30%;
  text-align: center;
`;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    Journal.map(entry => {
      console.log(entry);
    });
  }
  render() {
    return (
      <HomeDiv>
        <FlexDiv>
          <div>
            <h1>Hey Welcome to My Labs Blogs</h1>
            <p>
              My name is Carlo Clamucha and I'm currently working on the
              business reviews
            </p>
          </div>
          <div>
            <h1> User Schema</h1>
            <table>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>gravatar</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Carlo</td>
                <td>carlo@carlo.com</td>
                <td>carlo</td>
                <td>http://gravatar/carlo?s+200</td>
              </tr>
            </table>
          </div>
        </FlexDiv>
        {Journal.map(entry => {
          return (
            <StyledJournalEntry>
              <p> Days {entry.Day}</p>
              <p>{entry.Contributions}</p>
              <p>{entry.Description}</p>
              <p>{entry.frontEndLink}</p>
              <p>{entry.backEndLink}</p>
            </StyledJournalEntry>
          );
        })}
      </HomeDiv>
    );
  }
}

export default Homepage;
