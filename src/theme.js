import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import chroma from "chroma-js"

const PrimaryOrange = `#fa6900`
const SecondaryTeal = `#19857b`
const ErrorRed = "#f44336"
const InfoBlue = `#00acc1`
const WarningYellow = "#ff9800"
const SuccessGreen = "#4caf50"
const Black = "#111111"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: chroma(PrimaryOrange)
        .brighten(0.7)
        .css(),
      main: PrimaryOrange,
      dark: chroma(PrimaryOrange)
        .darken(0.7)
        .css(),
    },
    secondary: {
      light: chroma(SecondaryTeal)
        .brighten(0.7)
        .css(),
      main: SecondaryTeal,
      dark: chroma(SecondaryTeal)
        .darken(0.7)
        .css(),
    },
    error: {
      light: chroma(ErrorRed)
        .brighten(0.7)
        .css(),
      main: ErrorRed,
      dark: chroma(ErrorRed)
        .darken(0.7)
        .css(),
    },
    info: {
      light: chroma(InfoBlue)
        .brighten(0.7)
        .css(),
      main: InfoBlue,
      dark: chroma(InfoBlue)
        .darken(0.7)
        .css(),
    },
    warning: {
      light: chroma(WarningYellow)
        .brighten(0.7)
        .css(),
      main: WarningYellow,
      dark: chroma(WarningYellow)
        .darken(0.7)
        .css(),
    },
    success: {
      light: chroma(SuccessGreen)
        .brighten(0.7)
        .css(),
      main: SuccessGreen,
      dark: chroma(SuccessGreen)
        .darken(0.7)
        .css(),
    },
    black: {
      light: chroma(Black)
        .brighten(0.7)
        .css(),
      main: Black,
      dark: chroma(Black)
        .darken(0.7)
        .css(),
    },
    background: {
      default: `#fff`,
    },
  },
})

export default responsiveFontSizes(theme)
