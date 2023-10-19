import Header from "./components/header";
import bgImage from "./assets/videoHero.mp4";
import { Container } from "@mui/material";
import Footer from "./components/footer";
import { ThemeProvider} from '@mui/material/styles';
import theme from "./theme/theme";
import MainPage from "./components/main";

function App() {
  return (

    <ThemeProvider theme={theme}>
    <Container maxWidth='false' disableGutters sx={{position:'relative',overflow:'auto',width:'100vw', height:'100vh', backgroundColor:'primary.light'}}>
        <video style={{position:'abosulte', width:'100%', height:'100%', objectFit:'cover'}} autoPlay loop muted  src={bgImage}/>
        
          <Header/> 
          <MainPage/>
          <Footer/>   
       
    </Container>
    </ThemeProvider>
  );
}

export default App;
