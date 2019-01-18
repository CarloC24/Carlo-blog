import React, { Component } from 'react';
import styled from 'styled-components';
import weekly from '../Weekly.json';
import Link from 'next/link';
const HomeDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 2rem;
  display: flex;
  .table__heading {
    font-size: 3.4rem;
  }
  p {
    font-size: 2rem;
    font-weight: 200;
  }
  a {
    font-size: 2rem;
    font-weight: 200;
  }
`;

const WeeklyDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  .weekly__container {
    width: 30%;
  }
  .weekly__tickets {
    width: 100%;
    h1 {
      font-size: 2.4rem;
    }
    ul {
      margin-left: 0px;
      padding-inline-start: 20px;
      li {
        margin-left: 0px;
        font-size: 1.8rem;
        font-weight: 300;
        font-family: 'Roboto';
      }
    }
    a {
      word-wrap: break-word;
    }
  }
  .weekly__PRS {
    display: flex;
    flex-direction: column;
  }
  .weekly__journal {
    p {
      font-size: 1.8rem;
    }
  }

  .weekly__favoritePRS {
    p {
      font-size: 1.8rem;
    }
  }
`;

export default class Weekly extends Component {
  render() {
    return (
      <HomeDiv>
        <div>
          {weekly.map((week, i) => {
            return (
              <WeeklyDiv key={i}>
                <div className="weekly__container">
                  <h1>Week {week.week}</h1>
                </div>
                <div className="weekly__tickets">
                  <h1>
                    Tickets Pulled :{' '}
                    {week.trello_card.map((card, i) => {
                      return (
                        <div key={i}>
                          <a href={card.card}>{card.card}</a>
                        </div>
                      );
                    })}
                  </h1>
                  <ul>
                    {week.tickets.map((ticket, i) => {
                      return <li key={i}>{ticket.ticket}</li>;
                    })}
                  </ul>
                </div>
                <div className="weekly__PRS">
                  <h1>Github PR links</h1>
                  {week.PRS.map((PR, i) => {
                    return (
                      <div key={i}>
                        <a href={PR.prLink}>{PR.prLink}</a>
                      </div>
                    );
                  })}
                </div>
                <div className="weekly__journal">
                  <h1>My Contributions breakdown</h1>
                  <p>{week.weekly_journal}</p>
                </div>
                <div className="weekly__favoritePRS">
                  <h1>My Favorite PR's breakdown</h1>
                  <p>{week.favorite_pr}</p>
                </div>
              </WeeklyDiv>
            );
          })}
        </div>
      </HomeDiv>
    );
  }
}
