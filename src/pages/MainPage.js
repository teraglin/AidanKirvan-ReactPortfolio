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

function randomNumber() {
  return Math.floor(Math.random() * (Math.random() > 0.5 ? 2 : -2));
}

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
const pulse = keyframes`
  0% {
    box-shadow: inset 0px 0px 75px purple;
  }
  50% {
    box-shadow: inset 0px 0px 75px crimson;
  }
  100% {
    box-shadow: inset 0px 0px 75px purple;
  }
`;
const twitch = keyframes`
  0% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  5% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  10% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  15% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  20% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  25% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  30% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  35% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  40% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  45% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  50% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  55% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  60% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  65% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  70% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  75% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  80% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  85% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  90% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  95% {
    transform: translate(${randomNumber()}px, ${randomNumber()}px);
  }
  100% {
    transform: translate(${randomNumber()}, ${randomNumber()});
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
