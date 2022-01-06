import React, { useState } from "react";

import {
  Box,
  Button,
} from "@mui/material";

import { colourScheme } from "../styles/colourScheme";

import ScrollIntoView from "react-scroll-into-view";

import Close from "@mui/icons-material/CloseOutlined"
import Menu from "@mui/icons-material/MenuOutlined"

const MenuComponent = (props) => {
  const { handleHidden } = props;

  return (
    <Box>
      <ScrollIntoView selector="#top" className="mb-2" >
        <Button
          variant="contained"
          color="primary"
          style={{
            minWidth: '100%',
            fontWeight: 'bold',
            border: `1px solid ${colourScheme.white}`,
            boxShadow: `3px 3px 3px ${colourScheme.black}`
          }}
          onClick={handleHidden}
        >
          Top
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#projects" className="mb-2" >
        <Button
          variant="contained"
          color="primary"
          style={{
            minWidth: '100%',
            fontWeight: 'bold',
            border: `1px solid ${colourScheme.white}`,
            boxShadow: `3px 3px 3px ${colourScheme.black}`
          }}
          onClick={handleHidden}
        >
          Projects
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#about" className="mb-2" >
        <Button
          variant="contained"
          color="primary"
          style={{
            minWidth: '100%',
            fontWeight: 'bold',
            border: `1px solid ${colourScheme.white}`,
            boxShadow: `3px 3px 3px ${colourScheme.black}`
          }}
          onClick={handleHidden}
        >
          About
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#contact" className="mb-2" >
        <Button
          variant="contained"
          color="primary"
          style={{
            minWidth: '100%',
            fontWeight: 'bold',
            border: `1px solid ${colourScheme.white}`,
            boxShadow: `3px 3px 3px ${colourScheme.black}`
          }}
          onClick={handleHidden}
        >
          Contact
        </Button>
      </ScrollIntoView>
    </Box>
  )
}

export const StaticMenu = () => {
  const [hidden, setHidden] = useState(true)

  const handleHidden = () => {
    if (hidden) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  }

  return (
    <Box
      className="
      fixed
      top=0
      right-0
      flex-1
      m-2
      z-10
      "
    >
      <Box
        className="
        flex
        justify-end
        mb-2
        "
      >
        <Button
          onClick={handleHidden}
          variant="contained"
          color="primary"
          sx={{ borderRadius: '200px' }}
          style={{boxShadow: `3px 3px 3px ${colourScheme.black}`}}
        >
          {hidden ? <Menu /> : <Close />}
        </Button>
      </Box>
      {!hidden && <MenuComponent handleHidden={handleHidden} />}
    </Box>
  )

}