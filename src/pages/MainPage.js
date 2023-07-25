import React from "react";
import styled, { keyframes } from "styled-components";
import { color } from "../styles/colourScheme";
import Nav from "../modules/Nav";
import Hero from "../modules/Hero";
import Projects from "../modules/Projects";
import About from "../modules/About";
import Contact from "../modules/Contact";

const mobileShadowTransparent = "box-shadow: inset 0px 24px 75px transparent";
const mobileShadowWhiteFlicker = "box-shadow: inset 0px 24px 75px grey";
const mobileShadowWhiteFull = "box-shadow: inset 0px 24px 100px grey";
// const desktopShadowTransparent = `box-shadow: 0px 24px 75px transparent`;
// const desktopShadowWhiteFlicker = `box-shadow: 0px 24px 75px #5c5d5e`;
// const desktopShadowWhiteFull = `box-shadow: 0px 24px 100px #5c5d5e`;

const flickerMobile = keyframes`
  0% {
    ${mobileShadowTransparent};
  }
  50% {
    ${mobileShadowTransparent};
  }
  /* 51% {
    ${mobileShadowWhiteFlicker};
  }
  52% {
    ${mobileShadowTransparent};
  }
  53% {
    ${mobileShadowWhiteFlicker};
  }
  54% {
    ${mobileShadowTransparent};
  }
  55% {
    ${mobileShadowWhiteFlicker};
  } */
  100% {
    ${mobileShadowWhiteFull};
  }
`;
// const flickerDesktop = keyframes`
//   0% {
//     ${mobileShadowTransparent};
//   }
//   50% {
//     ${desktopShadowTransparent};
//   }
//   51% {
//      ${desktopShadowWhiteFlicker};
//   }
//   52% {
//     ${desktopShadowTransparent};
//   }
//   53% {
//     ${desktopShadowWhiteFlicker};
//   }
//   54% {
//     ${desktopShadowTransparent};
//   }
//   55% {
//     ${desktopShadowWhiteFlicker};
//   }
//   100% {
//     ${desktopShadowWhiteFull};
//   }
// `;
const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const App = styled("div")`
  width: 100vw;
  color: ${color.white};
  position: relative;
  background-color: ${color.charcoal};
  @media (min-width: 1440px) {
    background-color: #2c2d2e;
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
