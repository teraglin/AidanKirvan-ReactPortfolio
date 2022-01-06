import React, { useState } from 'react'
import linkedinContactIcon from '../images/icon-contact-linkedin.png'
import twitterContactIcon from '../images/icon-contact-twitter.png'
import octocat from '../images/Octocat.jpg'

import {
  Box,
  Typography,
  Link,
} from "@mui/material";

import { colourScheme } from '../styles/colourScheme';

const linkedInLink = "https://www.linkedin.com/in/aidan-kirvan/"
const twitterLink = "https://twitter.com/kakaposaur"
const githubLink = "https://github.com/teraglin"

const Contact = (props) => {
  const { mobileView } = props;

  const [hoverStatus, setHoverStatus] = useState({
    linkedIn: false,
    twitter: false,
    gitHub: false
  })

  const contactStyles = {
    imageStyle: {
      borderRadius: '10px',
      width: '100px',
      height: '100px',
    }
  }

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
        CONTACT ME
      </Typography>

      {/* twitter  */}
      <Box
        style={{
          display: 'flex',
          width: '90%',
          justifyContent: 'center',
          margin: 20,
          background: hoverStatus.gitHub ? colourScheme.primary : colourScheme.black,
          borderRadius: '15px',
        }}
      >
        <img
        src={octocat}
        alt="github-contact"
        style={contactStyles.imageStyle}
        />
        <Link
          href={githubLink}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: hoverStatus.gitHub ? colourScheme.white : colourScheme.primary,
            margin: '5px 0',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          underline='none'
          onMouseEnter={() => setHoverStatus({
            ...hoverStatus,
            gitHub: true
          })}
          onMouseLeave={() => setHoverStatus({
            ...hoverStatus,
            gitHub: false
          })}
        >
          <Typography
            variant="h4"
            style={{ fontWeight: 'bold' }}
          >
            teraglin
          </Typography>
        </Link>
      </Box>

      {/* linkedin  */}
      <Box
        style={{
          display: 'flex',
          width: '90%',
          justifyContent: 'center',
          margin: 20,
          background: hoverStatus.linkedIn ? colourScheme.primary : colourScheme.black,
          borderRadius: '15px',
        }}
      >
        <img
        src={linkedinContactIcon}
        alt="linkedin-contact"
        style={contactStyles.imageStyle}
        />
        <Link
          href={linkedInLink}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: hoverStatus.linkedIn ? colourScheme.white : colourScheme.primary,
            margin: '5px 0',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          underline='none'
          onMouseEnter={() => setHoverStatus({
            ...hoverStatus,
            linkedIn: true
          })}
          onMouseLeave={() => setHoverStatus({
            ...hoverStatus,
            linkedIn: false
          })}
        >
          <Typography
            variant="h4"
            style={{ fontWeight: 'bold' }}
          >
            /aidan-kirvan/
          </Typography>
        </Link>
      </Box>

      {/* twitter  */}
      <Box
        style={{
          display: 'flex',
          width: '90%',
          justifyContent: 'center',
          margin: 20,
          background: hoverStatus.twitter ? colourScheme.primary : colourScheme.black,
          borderRadius: '15px',
        }}
      >
        <img
        src={twitterContactIcon}
        alt="twitter-contact"
        style={contactStyles.imageStyle}
        />
        <Link
          href={twitterLink}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: hoverStatus.twitter ? colourScheme.white : colourScheme.primary,
            margin: '5px 0',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          underline='none'
          onMouseEnter={() => setHoverStatus({
            ...hoverStatus,
            twitter: true
          })}
          onMouseLeave={() => setHoverStatus({
            ...hoverStatus,
            twitter: false
          })}
        >
          <Typography
            variant="h4"
            style={{ fontWeight: 'bold' }}
          >
            @kakaposaur
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default Contact