import React from "react";
import styled from "styled-components";
import { color } from "../styles/colourScheme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  /* justify-content: center; */
  /* align-items: center; */
  /* padding: 4, */
  /* paddingTop: 95, */
`;
const Heading = styled.h2`
  display: inline-block;
  border-bottom: 2px solid ${color.white};
  padding: 8px;
  text-transform: uppercase;
`;
const TitleTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 780px) {
    flex-direction: row;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  @media (min-width: 780px) {
    width: 25%;
    margin-left: 64px;
  }
`;
const Image = styled.img`
  border-radius: 500px;
  width: 100%;
`;
const TitleTableContent = styled.div`
  padding: 4px 0; // was margin-y and sm:mt-0
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 750px) {
    width: 70%; //was 8/12
  }
  @media (min-width: 1150px) {
    width: 80%; //was 9/12
    // good luck
  }
`;
const Job = styled.h5`
width: calc(100% - 14px);
padding: 8px;
font-weight: bold;
background: ${color.black};
/* color: ${color.white}; */
text-align: center;
@media (min-width: 780px) {
  width: 83%;
}
`;
const TitleTableTableIDGAF = styled.table`
  width: 100%;
  height: 100px;
  text-align: center;
  margin: 8px 0;
  border-spacing: 10px;
  border-collapse: separate;
  @media (min-width: 780px) {
    width: 85%;
  }
`;
const Subheading = styled.h4`
  display: inline-block;
  /* border-bottom: 2px solid ${color.white}; */
  padding: 8px;
  text-transform: uppercase;
`;
const SummaryTableCell = styled.td`
  color: ${color.white};
  width: 50% !important;
  padding: 10px;
  border: 2px solid ${color.white};
  /* background: ${color.black}; */
  background: #222;
  border-radius: 4px;
  font-weight: bold;
  box-shadow: 0px 1px 20px rgb(0, 0, 0, 0.5);
`;
const SubtableContainer = styled.table`
  width: 100%;
  height: 100px;
  text-align: center;
  margin: 10px 0;
  border-spacing: 10px;
  border-collapse: separate;
`;
const SkillsTableCell = styled.td`
    color: ${color.white};
    /* color: ${color.black}; */
    width: 50% !important;
    padding: 15px;
    /* background: ${color.black}; */
    background: #222;
    /* background-image: linear-gradient(to right, transparent 20%, ${color.white} 80%, transparent 100%); */
    border: 1px solid ${color.white};
    border-radius: 4px;
    margin: 4;
    box-shadow: 0px 1px 20px rgb(0, 0, 0, 0.5);
  `;
const InterestsTableCell = styled.td`
    color: ${color.white};
    /* color: ${color.black}; */
    width: 100%;
    padding: 15px;
    /* background: ${color.black}; */
    background: #222;
    /* background-image: linear-gradient(to right, transparent 20%, ${color.white} 80%, transparent 100%); */
    border: 1px solid ${color.white};
    border-radius: 4px;
    margin: 4;
    box-shadow: 0px 1px 20px rgb(0, 0, 0, 0.5);
  `;

const About = () => {
  return (
    <Container>
      <Heading>ABOUT ME</Heading>
      <TitleTable>
        <ImageContainer>
          <Image
            alt="profile"
            src="https://avatars.githubusercontent.com/u/67266954?v=4"
          />
        </ImageContainer>
        <TitleTableContent>
          <Job>FRONTEND DEVELOPER</Job>
          <TitleTableTableIDGAF>
            <tbody>
              <tr>
                <SummaryTableCell>Artist</SummaryTableCell>
                <SummaryTableCell>Musician</SummaryTableCell>
              </tr>
              <tr>
                <SummaryTableCell>Writer</SummaryTableCell>
                <SummaryTableCell>DM / GM</SummaryTableCell>
              </tr>
              <tr>
                <SummaryTableCell>Lizard Dad</SummaryTableCell>
                <SummaryTableCell>Cat Servant</SummaryTableCell>
              </tr>
            </tbody>
          </TitleTableTableIDGAF>
        </TitleTableContent>
      </TitleTable>

      {/* OTHER SKILLS  */}
      <Subheading>OTHER SKILLS</Subheading>
      <SubtableContainer>
        <tbody>
          <tr>
            <SkillsTableCell>Illustration</SkillsTableCell>
            <SkillsTableCell>Writing</SkillsTableCell>
          </tr>

          <tr>
            <SkillsTableCell>Sound Engineering</SkillsTableCell>
            <SkillsTableCell>Image Editing</SkillsTableCell>
          </tr>

          <tr>
            <SkillsTableCell>Logic X</SkillsTableCell>
            <SkillsTableCell>Ableton Live</SkillsTableCell>
          </tr>

          <tr>
            <SkillsTableCell>Procreate</SkillsTableCell>
            <SkillsTableCell>Photoshop</SkillsTableCell>
          </tr>

          <tr>
            <SkillsTableCell>Saxophone</SkillsTableCell>
            <SkillsTableCell>Guitar</SkillsTableCell>
          </tr>
        </tbody>
      </SubtableContainer>

      {/* INTERESTS  */}
      <Subheading>INTERESTS</Subheading>
      <SubtableContainer>
        <tbody>
          <tr>
            <InterestsTableCell>Tabletop Gaming</InterestsTableCell>
          </tr>
          <tr>
            <InterestsTableCell>Roleplay Gaming</InterestsTableCell>
          </tr>
          <tr>
            <InterestsTableCell>
              Web and App Integration for Tabletop Gaming
            </InterestsTableCell>
          </tr>
          <tr>
            <InterestsTableCell>Videogames</InterestsTableCell>
          </tr>

          <tr>
            <InterestsTableCell>Music</InterestsTableCell>
          </tr>

          <tr>
            <InterestsTableCell>
              Sound Recording and Production
            </InterestsTableCell>
          </tr>
        </tbody>
      </SubtableContainer>
    </Container>
  );
};

export default About;
