import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import { pulse, twitch } from "../styles/animations";

const Page = styled.div`
  width: 100vw;
  color: ${color.white};
  position: relative;
  background-color: ${color.orange};
  @media (min-width: 1440px) {
    /* TODO ~ wtf is this?? check on main page too. */
    background-color: ${color.orange};
  }
  @media (max-height: 630px) and (max-width: 920px) {
    display: none;
  }
`;

// TODO ~ make component for this page and main page
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
const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 56px 56px 112px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
const Title = styled.h1`
  color: ${color.orange};
  background: ${color.charcoal};
  padding: 56px;
`;
const GameList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 112px;
`;
const Game = styled.div`
  width: 100%;
  border: ${color.white};
  display: flex;
  flex-direction: row;
  height: calc(56px * 5);
`;
const GameTitleContainer = styled.div`
  position: relative;
  width: 50%;
  padding: 56px;
`;
const GameTitle = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 56px;
  width: 100%;
  padding: 56px;
  background: ${color.charcoal};
  border: 1px solid ${color.white};
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 56px 100%);
`;
const GameTitleTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GameTitleText = styled.h1`
  text-align: center;
  padding: 0 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  background: ${color.white};
  color: ${color.charcoal};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 1);
`;
const GameTitleInfo = styled.p`
  width: 100%;
  text-align: center;
`;
const GameTitleDescription = styled.p`
  width: 258px;
  margin: 16px auto;
`;
const GameImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;
const GameImage = styled.div`
  position: absolute;
  top: 56px;
  left: -56px;
  width: 100%;
  height: 100%;
  border: 1px solid ${color.white};
  background: ${color.charcoal};
  clip-path: polygon(0 0, 100% 0%, calc(100% - 56px) 100%, 0% 100%);
`;
const RibbonTriange = styled.div`
  position: absolute;
  top: 0;
  left: -56px;
  height: 56px;
  width: 112px;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background: ${color.white};
`;

const gameData = [
  {
    title: "Smithy-Cuffs",
    description:
      "A card-drafting card and dice battler where 1-4 weapon smiths assemble unweildy weapons and fight with them.",
    players: "2-4",
    time: "30-60",
    displayOn: true
  },
  {
    title: "PentArcanum",
    description:
      "A spell-slinging, back-stabbing, dice-placement game where 1-5 arcane scholars research a new pentagram formula in the hopes of becoming the most esteemed arcane scholar.",
    players: "2-5",
    time: "60-120",
    displayOn: true
  },
  {
    title: "Bean Juice",
    description:
      "Action based board game where 1-4 office workers will have to juggle caffine intake with office tasks with only a limited amount of resources and only two hands to hold stuff in.",
    players: "1-4",
    time: "60-120",
    displayOn: true
  }
];

const TableTop = () => {
  return (
    <>
      <LandscapeWarning>
        <h1>You wouldn't like me when I'm landscape...</h1>
      </LandscapeWarning>
      <Page>
        <Body>
          <Title>Tabletop Game designs by Aidan Kirvan:</Title>
          <GameList>
            {gameData.map(
              (game, gameIndex) =>
                !!game.displayOn && (
                  <Game key={gameIndex}>
                    <GameTitleContainer>
                      <GameTitle>
                        <GameTitleTextContainer>
                          <GameTitleText>{game.title}</GameTitleText>
                          <GameTitleInfo>
                            {game.players}players | {game.time} minutes
                          </GameTitleInfo>
                          <GameTitleDescription>
                            {game.description}
                          </GameTitleDescription>
                        </GameTitleTextContainer>
                      </GameTitle>
                    </GameTitleContainer>
                    <GameImageContainer>
                      <RibbonTriange />
                      <GameImage />
                    </GameImageContainer>
                  </Game>
                )
            )}
          </GameList>
        </Body>
      </Page>
    </>
  );
};

export default TableTop;
