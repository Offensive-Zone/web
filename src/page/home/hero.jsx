import { Box, Container, Typography, IconButton, Fade, Slide } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosOutlined';
import theme from "../../theme/theme";
import { useTranslation } from "react-i18next";

 const scrollToExperience = () => {

     const experienceSection = document.getElementById('expertise');
     if (experienceSection) {
       experienceSection.scrollIntoView({behavior:'smooth'});
     }
   };
const Hero = ()=>{
  const {t} = useTranslation()
    return (
        <Box sx={{width:'100%',
                  height:'100vh', 
                  textAlign:{xs:'initial', 
                             lg:'initial'}}}>
            <video style={{zIndex:'-1',position:'absolute',width:'100%', height:'100vh', objectFit:'cover'}} autoPlay loop muted  src='../../assets/videoHero2.mp4'/>
            <Container maxWidth='lg' 
                       sx={{
                       zIndex:'20',
                       display:'flex', 
                       padding:'350px 50px',
                       flexDirection:'column', 
                       gap:3}}>
                <Fade in={true} 
                      timeout={1200}>     
                  <Typography component="h1" 
                              fontSize={{lg:'100px',
                                         md:'100px',
                                         sm:'100px',
                                         xs:'50px'}} 
                              sx={{fontWeight:900, 
                                   color:'text.main', 
                                   lineHeight:1}}>
                      The Offensive Zone
                  </Typography>
                </Fade>    
                <Slide in={true} direction="right" timeout={800}>
                  <Typography color={theme.palette.tertiary.main} 
                              component='p' 
                              fontSize={{xs:20, 
                                         lg:'30px'}}>
                    {t("hero.subtitle")}
                  </Typography>
                </Slide>                        
                <IconButton onClick={scrollToExperience} sx={{color:'white', 
                                                              transform: 'rotate(-0.25turn)', 
                                                              width:'170px', 
                                                              margin:'auto',
                                                              marginTop:'100px'
                                                              }}><ArrowBackIosNewIcon sx={{fontSize:'150px'}}/></IconButton>
            </Container>
        </Box>
            )
}

export default Hero