import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import { pulse, twitch } from "../styles/animations";

const LandscapeWarning = () => {
  return (
    <StyledLandscapeWarning>
      <h1>You wouldn't like me when I'm landscape 🤢</h1>
    </StyledLandscapeWarning>
  );
};

export default LandscapeWarning;

const StyledLandscapeWarning = styled.div`
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
