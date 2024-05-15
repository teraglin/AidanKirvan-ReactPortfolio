import React from "react";
import styled from "styled-components";
import { techIcons } from "../data/tech-icons";
import { Icon } from "@iconify/react";
import { color } from "../styles/colourScheme";

const Hero = () => {
  return (
    <Container id="top">
      <HeadingContainer>
        <Headings>
          <Heading>Aidan Kirvan</Heading>
          <SubHeading>Frontend Developer</SubHeading>
        </Headings>
      </HeadingContainer>
      <TechIcons>
        {techIcons.map((icon, index) => (
          <IconContainer key={index}>
            <Icon
              icon={icon.icon}
              style={{
                width: "100%",
                height: "100%"
              }}
            ></Icon>
          </IconContainer>
        ))}
      </TechIcons>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  scroll-margin-top: 64px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (min-width: 780px) {
    justify-content: space-between;
    gap: 0;
    flex-direction: row;
  }
`;
const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  @media (min-width: 780px) {
    width: 50%;
  }
`;
const Headings = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 780px) {
    margin: 0;
  }
`;
const Heading = styled.h1`
  display: inline-block;
  border: 2px solid ${color.white};
  padding: 8px;
  text-transform: uppercase;
  margin: 0 auto;
  font-size: 32px;
  @media (min-width: 900px) {
    font-size: 42px;
  }
  @media (max-height: 699px) {
    margin-top: 68px;
  }
`;
const SubHeading = styled.span`
  display: inline-block;
  background: ${color.white};
  color: ${color.charcoal};
  padding: 8px;
  text-transform: uppercase;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
const TechIcons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 24px;
  height: fit-content;
  max-width: 300px;
  @media (min-width: 780px) {
    width: 50%;
    justify-content: end;
    max-width: 500px;
  }
`;
const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 25%;
  padding: 8px;
  aspect-ratio: 1/1;
  box-shadow: 0 4px 24px rgb(0, 0, 0, 0.5);
  background-color: ${color.black};
  border: 2px solid ${color.white};
`;
