import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";
import LandscapeWarning from "../modules/LandscapeWarning";
import TabletopGame from "../modules/TabletopGame";
import { tabletopGames } from "../data/tabletopGames";
import PageLink from "../components/PageLink";

const TabletopPage = () => {
  const [carouselPosition, setCarouselPosition] = useState(
    tabletopGames.games.map(() => 0)
  );

  function handleClick(gameIndex, direction) {
    const arr = [...carouselPosition];

    if (direction === "next") {
      arr[gameIndex]++;
    } else if (direction === "prev") {
      arr[gameIndex]--;
    } else {
      console.error(
        "No valid prev or next value for carousel button at TableTop.js"
      );
    }
    setCarouselPosition(arr);
  }

  return (
    <>
      <LandscapeWarning />
      <Page>
        <Body>
          <PageLink
            alignment="left"
            color={color.charcoal}
            background={color.blue}
          >
            Home Page
          </PageLink>
          <Title>Tabletop game designs by Aidan Kirvan:</Title>
          <GameList>
            {tabletopGames.games.map(
              (game, gameIndex) =>
                !!game.displayOn && (
                  <TabletopGame
                    key={gameIndex}
                    gameIndex={gameIndex}
                    titleImage={game.titleImage}
                    title={game.title}
                    players={game.players}
                    time={game.time}
                    description={game.description}
                    images={game.images}
                    carouselPosition={carouselPosition}
                    handleClick={handleClick}
                    status={game.status}
                    statusColor={tabletopGames.statusColor[game.status]}
                  />
                )
            )}
          </GameList>
        </Body>
      </Page>
    </>
  );
};

export default TabletopPage;

const Page = styled.div`
  width: 100vw;
  color: ${color.white};
  position: relative;
  background-color: ${color.orange};
  @media (max-height: 630px) and (max-width: 920px) {
    display: none;
  }
`;
const Body = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px 28px 84px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  position: relative;
  @media (min-width: 1120px) {
    padding: 56px 56px 112px;
  }
`;
const Title = styled.h1`
  color: ${color.white};
  background: ${color.charcoal};
  text-transform: uppercase;
  padding: 28px;
  @media (min-width: 600px) {
    padding: 56px;
  }
`;
const GameList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 212px;
  margin-top: 150px;
  @media (min-width: 1120px) {
    margin-top: 0;
    gap: 112px;
  }
`;
