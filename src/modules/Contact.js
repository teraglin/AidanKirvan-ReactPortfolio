import React, { useState } from 'react'

import linkedinContactIcon from '../images/icon-contact-linkedin.png'
import twitterContactIcon from '../images/icon-contact-twitter.png'
import octocat from '../images/Octocat.jpg'

import {
  Box,
  Typography,
} from "@mui/material";

import { colourScheme } from '../styles/colourScheme';

import { ContactLink } from '../services/contact/ContactLink';

const linkedInLink = "https://www.linkedin.com/in/aidan-kirvan/";
const twitterLink = "https://twitter.com/kakaposaur";
const githubLink = "https://github.com/teraglin";

const Contact = (props) => {
  const { mobileView } = props;

  const [hoverStatus, setHoverStatus] = useState({
    linkedIn: false,
    twitter: false,
    gitHub: false
  });

  return (
    <Box id="contact"
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
      }}
      sx={{
        backgroundImage: `linear-gradient(to bottom,  ${colourScheme.black}, ${colourScheme.gray})`
      }}
    >
      <Typography
        color="text.primary"
        variant={mobileView ? 'h4' : 'h3'}
        width="100%"
        textAlign={mobileView ? "center" : "left"}
        padding={mobileView ? 1 : '64px 0 15px 64px'}
      >
        FOLLOW OR CONTACT ME
      </Typography>

      {/* github  */}
      <ContactLink
        contactTitle="teraglin"
        contactImage={octocat}
        contactLink={githubLink}
        hoverStatusRef={hoverStatus.gitHub}
        mobileView={mobileView}
        onMouseEnter={() => setHoverStatus({
          ...hoverStatus,
          gitHub: true
        })}
        onMouseLeave={() => setHoverStatus({
          ...hoverStatus,
          gitHub: false
        })}
      />

      {/* linkedIn  */}
      <ContactLink
        contactTitle="/aidan-kirvan/"
        contactImage={linkedinContactIcon}
        contactLink={linkedInLink}
        hoverStatusRef={hoverStatus.linkedIn}
        mobileView={mobileView}
        onMouseEnter={() => setHoverStatus({
          ...hoverStatus,
          linkedIn: true
        })}
        onMouseLeave={() => setHoverStatus({
          ...hoverStatus,
          linkedIn: false
        })}
      />

      {/* twitter  */}
      <ContactLink
        contactTitle="@kakposaur"
        contactImage={twitterContactIcon}
        contactLink={twitterLink}
        hoverStatusRef={hoverStatus.twitter}
        mobileView={mobileView}
        onMouseEnter={() => setHoverStatus({
          ...hoverStatus,
          twitter: true
        })}
        onMouseLeave={() => setHoverStatus({
          ...hoverStatus,
          twitter: false
        })}
      />
    </Box>
  )
}

export default Contact