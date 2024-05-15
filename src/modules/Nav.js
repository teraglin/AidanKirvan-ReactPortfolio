import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { color } from "../styles/colourScheme";
import ScrollIntoView from "react-scroll-into-view";

const Nav = () => {
  return (
    <NavContainer>
      {/* TOP */}
      <ScrollIntoView selector="#top">
        <HomeButton aria-label="Home button">
          <Icon
            style={{ width: "100%", height: "100%" }}
            icon="ant-design:home-filled"
          />
        </HomeButton>
      </ScrollIntoView>
      {/* ABOUT */}
      <ScrollIntoView selector="#about">
        <Button>ABOUT</Button>
      </ScrollIntoView>
      {/* PROJECTS */}
      <ScrollIntoView selector="#projects">
        <Button>PROJECTS</Button>
      </ScrollIntoView>
      {/* CONTACT */}
      <ScrollIntoView selector="#contact">
        <Button>CONTACT</Button>
      </ScrollIntoView>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  width: 100vw;
  height: 48px;
  display: flex;
  justify-content: space-evenly;
  background: ${color.black};
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;
const Button = styled.button`
  height: 100%;
  color: ${color.white};
  font-weight: bold;
  padding: 0 16px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const HomeButton = styled(Button)`
  padding: 0;
  margin: 0 16px;
  width: 24px;
`;
