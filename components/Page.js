import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Head from './Head';
import Header from './Header';
import LinkHeader from './LinkHeader';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('../static/radnikanext-medium-webfont.woff2')format('woff2');
  font-weight:normal;
  font-style:normal;

}
html{
  box-sizing:border-box;
  font-size:10px;
  font-family:'radnika_next';
}
*,*:before,*:after{
  box-sizing:inherit;
}
body {
  padding:0;
  margin:0;
  font-size:1.5rem;
  line-height:2;
  font-family:'radnika_next';
}
a{
  text-decoration:none;
  color: ${theme.black};
}
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;
export default class Page extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Head />
            <GlobalStyle />
            <LinkHeader />
            <Header />
            {this.props.children}
          </StyledPage>
        </ThemeProvider>
      </>
    );
  }
}
