import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {theme} from './Theme';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import styled from 'styled-components';
import Work from './components/Work';
import Contact from './components/Contact';
import TechStack from './components/TechStack';


const ContentContainer = styled.div`
  box-sizing: border-box;
  
  background-color: inherit;
  font-family: 'Poppins', sans-serif;

  max-width: 992px;
  margin: 0 auto;

  overflow: hidden;
`

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
          <Header/>
          <ContentContainer>
            <Home />
            <About />
            <TechStack />
            <Work />
            <Contact />
          </ContentContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
