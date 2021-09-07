import { blueGrey } from '@material-ui/core/colors'
import { createTheme, PaletteColorOptions } from '@material-ui/core/styles'

export const blue: PaletteColorOptions = {
  dark: '#000D8B',
  light: '#000DCD',
  main: '#000D8B',
  100: '#1E90DD',
  200: '#000DCD',
  300: '#000D8B'
}

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: blueGrey
  }
})

export default theme
