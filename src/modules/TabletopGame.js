import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { color } from "../styles/colourScheme";
import { fade } from "../styles/animations";

const TabletopGame = (props) => {
  const {
    gameIndex,
    titleImage,
    title,
    players,
    time,
    description,
    images,
    carouselPosition,
    handleClick,
    status,
    statusColor
  } = props;

  return (
    <Game key={gameIndex}>
      <GameTitleContainer>
        {titleImage !== "" && (
          <GameArt>
            <GameArtImage src={titleImage} alt={`${titleImage} cover art`} />
          </GameArt>
        )}
        <GameTitle>
          <GameTitleTextContainer>
            <GameTitleText>{title}</GameTitleText>
            <GameTitleInfo>
              {players}players | {time} minutes
            </GameTitleInfo>
            <GameTitleDescription>{description}</GameTitleDescription>
            <StatusBadge style={{ background: color[statusColor] }}>
              {status}
            </StatusBadge>
          </GameTitleTextContainer>
        </GameTitle>
      </GameTitleContainer>
      <GameImageContainer>
        <RibbonTriange />
        {images.length > 0 && (
          <>
            <PrevButton
              aria-label={`previous button for ${title} images`}
              onClick={() => handleClick(gameIndex, "prev")}
              disabled={carouselPosition[gameIndex] === 0}
            >
              <Icon
                style={{ width: "100%", height: "100%" }}
                icon={
                  carouselPosition[gameIndex] !== 0
                    ? "carbon:previous-filled"
                    : "carbon:previous-outline"
                }
              />
            </PrevButton>
            <NextButton
              aria-label={`next button for ${title} images`}
              onClick={() => handleClick(gameIndex, "next")}
              disabled={
                images?.length === 0 ||
                carouselPosition[gameIndex] === images.length - 1
              }
            >
              <Icon
                style={{ width: "100%", height: "100%" }}
                icon={
                  images?.length !== 0 &&
                  carouselPosition[gameIndex] !== images.length - 1
                    ? "carbon:next-filled"
                    : "carbon:next-outline"
                }
              />
            </NextButton>
          </>
        )}
        <GameImage>
          {images.length > 0 ? (
            images.map(
              (image, imageIndex) =>
                imageIndex === carouselPosition[gameIndex] && (
                  <GameCarouselImage
                    key={imageIndex}
                    src={image}
                    alt={`${title} image ${gameIndex + 1}`}
                  />
                )
            )
          ) : (
            <Sorry>
              Sorry! 😔
              <Sorry>There are no images to share for this design yet...</Sorry>
            </Sorry>
          )}
        </GameImage>
      </GameImageContainer>
    </Game>
  );
};

export default TabletopGame;

const Game = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(56px * 12);

  @media (min-width: 400px) {
    width: 400px;
  }
  @media (min-width: 1120px) {
    width: 100%;
    flex-direction: row;
    height: calc(56px * 6);
  }
`;
const GameTitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  padding: 0;
  @media (min-width: 400px) {
    padding: 28px;
  }
  @media (min-width: 1120px) {
    padding: 56px;
    width: 50%;
    height: 100%;
  }
`;
const GameArt = styled.div`
  position: absolute;
  top: -150px;
  left: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1120px) {
    width: auto;
    top: calc(50% - 100px);
    left: 0;
  }
`;
const GameArtImage = styled.img`
  height: 200px;
  box-shadow: -5px 24px 24px rgba(0, 0, 0, 0.5);
  border: 2px solid ${color.charcoal};
  border-radius: 4px;
`;
const StatusBadge = styled.span`
  padding: 4px 8px;
  margin-top: -24px;
  border-radius: 4px;
  color: ${color.charcoal};
  box-shadow: -5px 12px 24px rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid ${color.white};
`;
const GameTitle = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  background: ${color.charcoal};
  border: 1px solid ${color.white};
  clip-path: polygon(50% 15%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0% 0%);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (min-width: 400px) {
    left: 10%;
    width: 80%;
    padding: 0px 28px;
  }
  @media (min-width: 1120px) {
    justify-content: center;
    width: 100%;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 56px 100%);
    left: 56px;
  }
`;
const GameTitleTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
  @media (min-width: 1120px) {
    margin-top: 0;
  }
`;
const GameTitleText = styled.h1`
  text-align: center;
  padding: 0 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  background: ${color.white};
  color: ${color.charcoal};
  box-shadow: -5px 24px 24px rgba(0, 0, 0, 0.5);
`;
const GameTitleInfo = styled.p`
  color: ${color.white};
  width: 100%;
  text-align: center;
  width: auto;
  padding: 4px 8px;
  border-radius: 4px;
`;
const GameTitleDescription = styled.p`
  width: 258px;
  margin: 16px auto;
  color: ${color.black};
  background: ${color.white};
  padding: 16px;
  box-shadow: -5px 24px 24px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`;
const GameImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  position: relative;
  @media (min-width: 1120px) {
    width: 50%;
    height: 100%;
  }
`;
const PrevButton = styled.button`
  position: absolute;
  color: ${color.charcoal};
  background: ${color.orange};
  height: 56px;
  width: 56px;
  bottom: -28px;
  left: 16px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  @media (min-width: 470px) {
    bottom: calc(50% - 28px);
    left: -28px;
  }
  @media (min-width: 1120px) {
    bottom: -28px;
    left: -84px;
  }
`;
const NextButton = styled.button`
  position: absolute;
  color: ${color.charcoal};
  background: ${color.orange};
  height: 56px;
  width: 56px;
  bottom: -28px;
  right: 16px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  @media (min-width: 470px) {
    right: -28px;
    bottom: calc(50% - 28px);
  }
  @media (min-width: 1120px) {
    bottom: -28px;
    right: 76px;
  }
`;
const GameImage = styled.div`
  position: static;
  top: 56px;
  left: -56px;
  width: 100%;
  height: 100%;
  border: 1px solid ${color.white};
  background: ${color.charcoal};
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 85%, 0 100%, 0% 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (min-width: 1120px) {
    clip-path: polygon(0 0, 100% 0%, calc(100% - 56px) 100%, 0% 100%);
    position: absolute;
    top: 56px;
    left: -56px;
  }
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: 500px;
  }
`;
const GameCarouselImage = styled.img`
  height: 100%;
  width: auto;
  position: relative;
  margin-left: 0;
  animation-name: ${fade};
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  @media (min-width: 1090px) {
    height: auto;
    width: 110%;
    margin-left: -36px;
  }
`;
const Sorry = styled.p`
  width: 100%;
  text-align: center;
`;
const RibbonTriange = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: -56px;
  height: 56px;
  width: 112px;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background-image: linear-gradient(155deg, ${color.white} 50%, lightgrey 100%);
  @media (min-width: 1120px) {
    display: block;
  }
`;
