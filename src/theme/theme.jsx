import { createTheme } from "@mui/material";
import { lime, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
          light: grey[900],
          main: '#000000',
        },
        secondary: {
          light: lime[900],
          main: lime[400],
        },
        text: {
          main: "#ffffff",
          secondary:''
        },
        common: {
          black: '#4D4D4D'
        }
      },
  });
  

  export default theme