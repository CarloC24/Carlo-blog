import React, { Component } from 'react';
import styled from 'styled-components';
import weekly from '../Weekly.json';
import Link from 'next/link';
const HomeDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  word-spacing: 5px;
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
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  button {
    background-color: #fffff0;
    border: 0.1px solid black;
    padding: 5px;
  }
`;

const WeeklyDiv = styled.div`
  width: 60%;
  max-width: 60%;
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
  state = {
    cI: 0
  };
  handleClick = e => {
    this.setState({ cI: Number(e.target.value) });
  };
  render() {
    return (
      <HomeDiv>
        <ButtonDiv>
          <button value="0" onClick={this.handleClick}>
            First week
          </button>
          <button value="1" onClick={this.handleClick}>
            Second week
          </button>
          <button value="2" onClick={this.handleClick}>
            Third week
          </button>
          <button value="3" onClick={this.handleClick}>
            Fourth week
          </button>
        </ButtonDiv>
        <div>
          {weekly.map((week, i) => {
            if (this.state.cI === i) {
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
                  {i === 1 ? (
                    <div className="weekly__journal">
                      <h1>
                        What API/Services did you implement? - Labs II sprint
                      </h1>
                      <p>
                        I implemented the use of gravatars which is a
                        wordpress/php thing and is widely used across websites.
                        And I added a minimalistic powerful authentication
                        system with PassportJS. I added express-session,
                        connect-knex-session, express validator, passportJS &
                        passport - local on the backend to implement this
                        feature. I already hooked up our frontend links to our
                        backend link so we can show that users can sign up and
                        make a record on our database. The reason why I chose
                        passport JS is that it harnesses the power of express
                        middlewares which is a very unspoken thingnpm in the
                        node community for beginners. It is so fitting to use
                        passportJS on a full stack application because you dont
                        have to write any authentication code on the frontend
                        and the most important thing in making a fullstack
                        application is having a seperation of concerns and
                        passport js is the perfect solution on separating the
                        authentication part of the full stack application from
                        everything else.
                      </p>
                    </div>
                  ) : null}
                  {i === 2 ? (
                    <div className="weekly__journal">
                      <h1>Features that are completed - Labs III sprint</h1>
                      <ul>
                        <li>
                          <a href="https://bonafind.netlify.com/">
                            First Feature
                          </a>{' '}
                          - Popular Reviewers
                        </li>
                        <li>
                          <a href="https://bonafind.netlify.com/">
                            Second Feature
                          </a>{' '}
                          - Google maps dropdown
                        </li>
                        <li>
                          <a href="https://bonafind.netlify.com/login">
                            Third Feature
                          </a>{' '}
                          - Login authentication
                        </li>
                        <li>
                          <a href="https://bonafind.netlify.com/register">
                            Fourth Feature
                          </a>{' '}
                          - Register authentication
                        </li>{' '}
                        <li>
                          <a href="https://bonafind.netlify.com/updateuser">
                            Fifth Feature
                          </a>{' '}
                          - Update User
                        </li>
                        <li>
                          <a href="https://bonafind.netlify.com/resetpassword">
                            Sixth Feature
                          </a>{' '}
                          - Reset Password
                        </li>
                        <li>
                          <a href="https://bonafind.netlify.com/billing">
                            Seventh Feature
                          </a>{' '}
                          - Stripe Billing Process
                        </li>
                      </ul>

                      <h1>How did the team do this week</h1>
                      <p>
                        My team was always in a video call for a minimum of 3
                        hours straight and it helped us add more functionality
                        on the project faster than expected. Overall it was a
                        very good experience from all of us because working
                        together made us more productive than we can even think
                        of because everybody is on the same page and everybody
                        helps one another.
                      </p>
                    </div>
                  ) : null}
                  {i === 3 ? (
                    <div className="weekly__journal">
                      <h1>Presentation - Labs IV sprint</h1>
                      <p>
                        As a team we decided to go and look at professional
                        websites and differenciate it from our website and we
                        saw a lot our UI/UX is missing. Better fonts all through
                        out the application. More intuitive animations that will
                        follow the users cursor as they are navigating through
                        the web app that we made. Better backgrounds that will
                        show users different functionality our web app. And we
                        implemented every single one of those features to our
                        web app and now it looks a whole lot better than it used
                        to look like!. And on the Backend Side the application
                        was already robust to help smooth everything in terms of
                        displaying robust data contributing to better User
                        Experience.
                      </p>
                    </div>
                  ) : null}
                </WeeklyDiv>
              );
            }
          })}
        </div>
      </HomeDiv>
    );
  }
}
