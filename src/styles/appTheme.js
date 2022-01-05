
import { createTheme } from "@mui/material"

import { colourScheme } from "./colourScheme"

const {
  primary,
  secondary,
  black,
  gray,
  white
} = colourScheme

export const appTheme = createTheme({
  palette: {
    primary: {
      // light: calculated from primary main,
      main: primary,
      // dark: calculated,
      // contrastText: calculated,
    },
    secondary: {
      // light: calculated,
      main: secondary,
      // dark: calculated,
      // contrastText: calculated,
    },
    text: {
      primary: white,
      secondary: black,
      disabled: gray
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Lora, serif',
  },
})