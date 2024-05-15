import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const PageLink = (props) => {
  const { href, alignment, color, background, avoidNav, children } = props;

  const alignmentProps = {
    left: {
      a: {
        left: 0,
        borderRadius: "0 0 4px 0"
      },
      icon: {
        marginRight: "8px"
      }
    },
    right: {
      a: {
        right: 0,
        borderRadius: "0 0 0 4px"
      },
      icon: {
        marginLeft: "8px"
      }
    }
  };

  const linkProps = {
    top: avoidNav ? "48px" : "0",
    ...alignmentProps[alignment || "right"].a,
    color: color || "black"
  };
  const buttonProps = {
    background: background || "white",
    color: color || "black"
  };
  const iconProps = alignmentProps[alignment || "right"].icon;

  return (
    <TabletopPageLink
      href={href || "/"}
      rel="noopener noreferrer"
      style={{ ...linkProps }}
    >
      <TabletopPageButton style={{ ...buttonProps }}>
        {!alignment ? children : alignment === "right" && children}
        <Icon
          style={{ height: "10px", ...iconProps }}
          icon={`line-md:arrow-${alignment || "right"}`}
        />
        {alignment === "left" && children}
      </TabletopPageButton>
    </TabletopPageLink>
  );
};

export default PageLink;

const TabletopPageLink = styled.a`
  text-decoration: none;
  position: absolute;
  top: 48px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  z-index: 9;
  overflow: hidden;
`;
const TabletopPageButton = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
