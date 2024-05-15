import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";

const ProjectsCard = (props) => {
  const { projectName, image, description, link } = props;

  return (
    <Card>
      <Title>{">_" + projectName}</Title>
      <Content>
        <Image src={image} alt={projectName} />
        <Copy>
          <Text>{description}</Text>

          <Link href={link} target="_blank" rel="noreferrer noopener">
            <Button>
              CLICK HERE TO CHECK IT OUT{" "}
              <Icon
                icon="fluent:window-new-20-filled"
                style={{ height: 24, width: 24 }}
              />
            </Button>
          </Link>
        </Copy>
      </Content>
    </Card>
  );
};

export default ProjectsCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: ${color.white};
  box-shadow: 0px 1px 20px rgb(0, 0, 0, 0.5);
  overflow: hidden;
  padding: 2px;
  gap: 2px;
`;
const Title = styled.div`
  color: ${color.white};
  background-color: ${color.black};
  padding: 4px 8px;
  font-weight: bold;
  font-family: "Source Code Pro", monospace;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
  @media (min-width: 780px) {
    flex-direction: row;
  }
`;
const Image = styled.img`
  width: auto;
  min-height: 235.48px;
  @media (min-width: 780px) {
    width: 50%;
    min-width: 50%;
  }
`;
const Copy = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 2px;
  padding: 2px;
`;
const Text = styled.p`
  padding: 16px;
  background: black;
  height: 100%;
  width: 100%;
  font-family: "Source Code Pro", monospace;
`;
const Link = styled.a`
  color: cyan;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  background-image: linear-gradient(to right, ${color.green}, ${color.purple});
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  padding: 8px;
  color: ${color.purple};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 2px;
  background: ${color.black};
  transition: background 0.2s linear;
  a:hover & {
    color: ${color.white};
    background: none;
  }
`;
