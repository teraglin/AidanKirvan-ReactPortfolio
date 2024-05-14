import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import LandscapeWarning from "../modules/LandscapeWarning";
import Nav from "../modules/Nav";
import Hero from "../modules/Hero";
import Projects from "../modules/Projects";
import About from "../modules/About";
import Contact from "../modules/Contact";
import { flickerMobile, fade } from "../styles/animations";
import { Icon } from "@iconify/react";

const MainPage = () => {
  return (
    <>
      <LandscapeWarning />
      <App>
        <a href="/tabletop">
          <TabletopPageButton>
            My Tabletop Game Designs
            <Icon
              style={{ height: "100%", marginLeft: "8px" }}
              icon={"line-md:arrow-right"}
            />
          </TabletopPageButton>
        </a>
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

export default MainPage;

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
const TabletopPageButton = styled.button`
  border: none;
  padding: 8px;
  border-radius: 0 0 0 4px;
  position: absolute;
  right: 0;
  top: 48px;
  background: ${color.orange};
  cursor: pointer;
  z-index: 11;
`;
