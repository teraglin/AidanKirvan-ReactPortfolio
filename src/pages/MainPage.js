import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import Nav from "../modules/Nav";
import Hero from "../modules/Hero";
import Projects from "../modules/Projects";
import About from "../modules/About";
import Contact from "../modules/Contact";
import { flickerMobile, pulse, twitch, fade } from "../styles/animations";

const App = styled("div")`
  width: 100vw;
  color: ${color.white};
  position: relative;
  background-color: ${color.charcoal};
  @media (min-width: 1440px) {
    background-color: #2c2d2e;
  }
  @media (max-height: 630px) and (max-width: 920px) {
    display: none;
  }
`;

const Body = styled("div")`
  margin: 0 auto;
  width: 100%;
  padding: 0 32px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  animation-name: ${fade}, ${flickerMobile};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  @media (min-width: 780px) {
    background-color: ${color.charcoal};
    padding: 0 128px;
    gap: 128px;
  }
  @media (min-width: 1440px) {
    animation-name: ${flickerMobile};
    & div {
      animation-name: ${fade};
      animation-duration: 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
    }
  }
`;

const LandscapeWarning = styled.div`
  display: none;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background: ${color.green};
  color: ${color.white};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  animation-name: ${pulse};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  @media (max-height: 630px) and (max-width: 920px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > h1 {
    text-align: center;
    text-shadow: 4px 4px 0px ${color.purple};
    animation-name: ${twitch};
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
  }
`;

export const MainPage = () => {
  return (
    <>
      <LandscapeWarning>
        <h1>You wouldn't like me when I'm landscape...</h1>
      </LandscapeWarning>
      <App>
        <Nav />
        <Body>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Body>
      </App>
    </>
  );
};
