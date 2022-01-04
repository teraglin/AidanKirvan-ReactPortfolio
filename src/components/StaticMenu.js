import React from "react";

import { Box, Button } from "@mui/material";

import ScrollIntoView from "react-scroll-into-view";

export const StaticMenu = () => {
  return (
    <nav>
      <ScrollIntoView selector="#techicons" >
        <Button>
          Top
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#projects" >
        <Button>
          Projects
        </Button>
      </ScrollIntoView>
      <ScrollIntoView selector="#about" >
        <Button>
          About
        </Button>
      </ScrollIntoView>
    </nav>
  )
}