import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";

import Nav from "../modules/Nav";
import Hero from "../modules/Hero";
import Projects from "../modules/Projects";
import About from "../modules/About";
import Contact from "../modules/Contact";

const App = styled("div")`
  width: 100vw;
  background-color: ${color.charcoal};
  color: ${color.white};
  position: relative;
`;

const Body = styled("div")`
  margin: 0 auto;
  width: 100%;
  padding: 0 32px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  @media (min-width: 780px) {
    padding: 0 128px;
    gap: 128px;
  }
`;
export const MainPage = () => {
  return (
    <App>
      <Nav />
      <Body>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Body>
    </App>
  );
};
