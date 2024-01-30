
import { ThemeProvider} from '@mui/material/styles';
import theme from "./theme/theme";
import Layout from "./page/layout";


function App() {
  return (

    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
