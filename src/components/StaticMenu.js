import React, { useState } from "react";

import { Box, Button } from "@mui/material";

import ScrollIntoView from "react-scroll-into-view";

import Close from "@mui/icons-material/CloseOutlined"
import Menu from "@mui/icons-material/MenuOutlined"

const MenuComponent = () => {
  return (
    <Box>
      <ScrollIntoView selector="#top" className="mb-2" >
        <Button
          variant="contained"
          color="primary"
          style={{ minWidth: '100%' }}
        >
          Top
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#projects" className="mb-2" >
        <Button
          variant="contained"
          color="primary"
          style={{ minWidth: '100%' }}
        >
          Projects
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#about" className="mb-2" >
        <Button
          variant="contained"
          color="primary"
          style={{ minWidth: '100%' }}
        >
          About
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
      class="
      fixed
      top=0
      right-0
      flex-1
      m-2
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
          sx={{ borderRadius: '100px' }}
        >
          {hidden ? <Menu /> : <Close />}
        </Button>
      </Box>
      {!hidden && <MenuComponent />}
    </Box>
  )

}