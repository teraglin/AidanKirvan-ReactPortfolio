import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { color } from "../styles/colourScheme";

import ScrollIntoView from "react-scroll-into-view";

const NavContainer = styled.nav`
  width: 100vw;
  height: 48px;
  display: flex;
  justify-content: space-evenly;
  /* background-image: linear-gradient(to right, ${color.green}, ${color.purple}); */
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
  padding: 0 16px 0 16px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Nav = () => {
  return (
    <NavContainer>
      {/* TOP */}
      <ScrollIntoView selector="#top">
        <Button>
          <Icon icon="ant-design:home-filled" />
        </Button>
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
