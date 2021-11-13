import { createTheme, PaletteColorOptions } from "@mui/material"
import { red } from "@mui/material/colors"


export const blue: PaletteColorOptions = {
  dark: '#000D8B',
  light: '#000DCD',
  main: '#000D8B',
  100: '#1E90DD',
  200: '#000DCD',
  300: '#000D8B',
  contrastText: '#ffffff'
}

export const redWarning: PaletteColorOptions = {
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000',
  dark: '#d50000',
  light: '#ef5350',
  main: '#e53935',
  contrastText: '#ffffff'
}

export const white: PaletteColorOptions = {
  dark: '#ffffff',
  light: '#fafafa',
  main: '#ffffff',
  contrastText: '#0a0a0a'
}

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: white,
    error: red,
    warning: redWarning
  }
})

export default theme
