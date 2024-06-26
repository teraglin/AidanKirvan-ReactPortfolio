import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { color } from "../styles/colourScheme";

const ContactLink = ({ icon, link, title }) => {
  return (
    <ContactLinkContainer href={link} target="_blank" rel="noreferrer noopener">
      <Icon
        style={{
          borderRadius: 10,
          width: 100,
          height: 100,
          minWidth: 100,
          padding: 8
        }}
        icon={icon}
      />
      <LinkText>
        {title}{" "}
        <Icon
          icon="fluent:window-new-20-filled"
          style={{ height: 24, width: 24 }}
        />
      </LinkText>
    </ContactLinkContainer>
  );
};

export default ContactLink;

const ContactLinkContainer = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;
  background-image: linear-gradient(to right, ${color.green}, ${color.purple});
  text-decoration: none;
  box-shadow: 0px 1px 20px rgb(0, 0, 0, 0.5);
`;
const LinkText = styled.span`
  color: ${color.purple};
  margin: 5px 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  padding: 8px;
  margin: 2px;
  background: ${color.black};
  gap: 8px;
  transition: background 0.2s linear;
  a:hover & {
    padding: 10px;
    color: ${color.white};
    background: none;
  }
  @media (min-width: 780x) {
    font-size: 32px;
    line-height: 38px;
  }
`;
