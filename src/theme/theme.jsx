import { createTheme } from "@mui/material";
import { lime, grey, blue } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          light: grey[900],
          main: '#000000',
        },
        secondary: {
          light: blue[100],
          main: blue[900],
        },
        tertiary: {
          light: lime[200],
          main: lime[400],
          dark: lime[900],
        },
        text: {
          main: "#ffffff",
          secondary:''
        },
        common: {
          black: '#4D4D4D'
        }
      },
    // typography: {
    //   h2: {
    //     lg:'80px',
    //     md:'80px',
    //     sm:'80px',
    //     xs:'40px'
    //   },
    //   h3: 12,
    // },
  });
  

  export default theme