import { Box, Container, Typography, IconButton, Fade, Slide } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { NavBar } from "./navBar.jsx";
const scrollToExperience = () => {
    const experienceSection = document.getElementById('expertise');
    if (experienceSection) {
      experienceSection.scrollIntoView({behavior:'smooth'});
    }
  };
const Header = ()=>{
    return (
        <Box sx={{position:'absolute', 
                  top:0, width:'100%', 
                  textAlign:{xs:'initial', 
                             lg:'initial'}}}>
            <NavBar/>
            <Container maxWidth='lg' 
                       sx={{marginTop:'100px',
                         display:'flex', 
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
                      Offensive Security Services
                  </Typography>
                </Fade>    
                <Slide in={true} direction="right" timeout={800}>
                  <Typography color='secondary' 
                              component='p' 
                              fontSize={{xs:20, 
                                         lg:'30px'}}>
                    Your Premium Partner in Cybersecurity Excellence
                  </Typography>
                </Slide>                        
                <IconButton onClick={scrollToExperience} sx={{color:'white', 
                                                              transform: 'rotate(-0.25turn)', 
                                                              width:'170px', 
                                                              margin:{xl:'150px auto', xs:'100px auto'}}}><ArrowBackIosNewIcon sx={{fontSize:'150px'}}/></IconButton>
            </Container>
        </Box>
            )
}

export default Header