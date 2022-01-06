import React from 'react'

import {
  Box,
  Button,
  Typography
} from "@mui/material";

import { colourScheme } from '../styles/colourScheme';

const About = (props) => {
  const { mobileView } = props;

  const profileStyles = {
    summaryTableCell: {
      color: colourScheme.black,
      width: '50%',
      padding: '10px',
      border: `1px solid ${colourScheme.primary}`,
      background: colourScheme.white,
      borderRadius: '5px',
      fontWeight: 'bold',
    },
    subtableContainer: {
      width: '90%',
      height: '100px',
      textAlign: 'center',
      margin: '10px 0',
      borderSpacing: '10px',
      borderCollapse: 'separate',
    },
    otherSkillsTableCell: {
      color: colourScheme.white,
      width: '50%',
      padding: '15px',
      background: colourScheme.black,
      borderRadius: '5px',
      margin: 5,
    },
    interestsTableCell: {
      color: colourScheme.white,
      width: '100%',
      padding: '15px',
      background: colourScheme.black,
      borderRadius: '5px',
      margin: 5,
    }
  }

  return (
    <Box id="about"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        paddingTop: 95,
      }}
      sx={{
        backgroundImage: `linear-gradient(to bottom,  ${colourScheme.gray}, ${colourScheme.black})`
      }}
    >
      <Typography
        color="text.primary"
        variant={mobileView ? 'h4' : 'h3'}
        width="100%"
        textAlign={mobileView ? "center" : "left"}
        padding={mobileView ? 1 : '64px 0 15px 64px'}
      >
        ABOUT ME
      </Typography>
      <Box
        style={{
          width: mobileView ? '100%' : '100%',
          display: 'flex',
          flexDirection: mobileView ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // margin: 5,
        }}
      >
        <Box
          // className="profile-portrait-container flex justify-center items-center w-11/12 sm:w-4/12 xl:w-3/12"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: mobileView ? '75%' : '25%',
            marginLeft: mobileView ? undefined : '64px'
          }}
        >
          <img
            alt={'profile'}
            src={"https://avatars.githubusercontent.com/u/67266954?v=4"}
            // className="profile-portrait"
            style={{
              borderRadius: '500px'
            }}
          />
        </Box>

        <Box className="profile-info my-5 sm:mt-0 w-full sm:w-8/12 xl:w-9/12 h-3/6 flex flex-col items-center justify-center">
          <Typography
            variant="h5"
            style={{
              width: mobileView ? '85%' : '83%',
              padding: '10px',
              borderRadius: '5px',
              fontWeight: 'bold',
              background: colourScheme.primary,
              textAlign: 'center',
            }}
          >
            FULL STACK DEVELOPER
          </Typography>
          <table
            style={{
              width: mobileView ? '90%' : '85%',
              height: '100px',
              textAlign: 'center',
              margin: '10px 0',
              borderSpacing: '10px',
              borderCollapse: 'separate',
            }}
          >
            <tbody>
              <tr>
                <td style={profileStyles.summaryTableCell}>Artist</td>
                <td style={profileStyles.summaryTableCell}>Musician</td>
              </tr>
              <tr>
                <td style={profileStyles.summaryTableCell}>Writer</td>
                <td style={profileStyles.summaryTableCell}>DM / GM</td>
              </tr>
              <tr>
                <td style={profileStyles.summaryTableCell}>Lizard Dad</td>
                <td style={profileStyles.summaryTableCell}>Cat Servant</td>
              </tr>
            </tbody>
          </table>
        </Box>

      </Box>

      {/* OTHER SKILLS  */}
      <Typography
        variant="h4"
        color="text.primary"
      >
        OTHER SKILLS
      </Typography>
      <table style={profileStyles.subtableContainer}>
        <tbody>
          <tr>
            <td style={profileStyles.otherSkillsTableCell}>Illustration</td>
            <td style={profileStyles.otherSkillsTableCell}>Writing</td>
          </tr>

          <tr>
            <td style={profileStyles.otherSkillsTableCell}>Sound Engineering</td>
            <td style={profileStyles.otherSkillsTableCell}>Images/Graphics</td>
          </tr>

          <tr>
            <td style={profileStyles.otherSkillsTableCell}>Logic X</td>
            <td style={profileStyles.otherSkillsTableCell}>Ableton Live</td>
          </tr>

          <tr>
            <td style={profileStyles.otherSkillsTableCell}>Procreate</td>
            <td style={profileStyles.otherSkillsTableCell}>Photoshop</td>
          </tr>

          <tr>
            <td style={profileStyles.otherSkillsTableCell}>Saxophone</td>
            <td style={profileStyles.otherSkillsTableCell}>Guitar</td>
          </tr>
        </tbody>

      </table>

      {/* INTERESTS  */}
      <Typography
        variant="h4"
        color="text.primary"
      >
        INTERESTS
      </Typography>
      <table style={profileStyles.subtableContainer}>
        <tbody>
          <tr>
            <td style={profileStyles.interestsTableCell}>Tabletop Gaming</td>
          </tr>

          <tr>
            <td style={profileStyles.interestsTableCell}>Roleplay Gaming</td>
          </tr>

          <tr>
            <td style={profileStyles.interestsTableCell}>Web and App Integration for Tabletop Gaming</td>
          </tr>

          <tr>
            <td style={profileStyles.interestsTableCell}>Videogames</td>
          </tr>

          <tr>
            <td style={profileStyles.interestsTableCell}>Music</td>
          </tr>

          <tr>
            <td style={profileStyles.interestsTableCell}>Sound Recording and Production</td>
          </tr>
        </tbody>
      </table>
    </Box>
  )
}

export default About