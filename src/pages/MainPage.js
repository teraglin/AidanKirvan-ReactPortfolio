import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";

import Hero from "../modules/Hero";
import Projects from "../modules/Projects";
import About from "../modules/About";

const App = styled("div")`
  width: 100vw;
  background-color: ${color.charcoal};
  color: ${color.white};
`;

const Body = styled("div")`
  margin: 0 auto;
  width: 100%;
  padding: 0 32px;
  max-width: 1440px;
  @media (min-width: 780px) {
    padding: 0 128px;
  }
`;
export const MainPage = () => {
  return (
    <App>
      <Body>
        <Hero id="hero" />
        <About id="about" />
        <Projects id="projects" />
        {/* <Contact id="contact" /> */}
      </Body>
    </App>
  );
};
