import { Box, Typography } from "@mui/material";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Subtittle from "./subtittle";
import CardExpertise from "./cards/cardExpertise";
import SubtittleCard from "./subtittle/subtitleCards";
import CardChoose from "./cards/cardChoose";
import { seccion2 } from "../common/data.js"
import backGround from "../assets/img/fondo.jpg"



const MainPage = () =>{
    return (
      <>
        <Box sx={{
                  backgroundColor:'primary.light', 
                  width:'100%', 
                  minHeight:'900px',
                  height:'auto', 
                  p:'50px 0'
                  }}>
            <Box sx={{height:'100%', textAlign:'center'}} >
            <Subtittle id='expertise'>Our Expertise</Subtittle>
              <Box sx={{display:'flex', 
                        gap:6,
                        justifyContent:'center',
                        flexWrap:'wrap',
                        marginTop:'50px'
                        }}>

                  <CardExpertise>
                    <SecurityOutlinedIcon color="secondary" sx={{fontSize:'200px'}}/>
                    <SubtittleCard>Penetration Testing</SubtittleCard>
                    <Typography color={'text.main'} component='p'>Uncover Vulnerabilities Before the Attackers Do
Our team of highly skilled ethical hackers conducts comprehensive penetration tests to identify weaknesses in your systems and networks. By simulating real-world cyberattacks, we help you proactively address vulnerabilities before malicious actors can exploit them.</Typography>
                  </CardExpertise>
   

                  <CardExpertise>
                    <LanguageOutlinedIcon color="secondary" sx={{fontSize:'200px'}}/>
                    <SubtittleCard>Web Penetration Testing</SubtittleCard>
                    <Typography color={'text.main'} component='p'>Securing Your Online Presence
In the digital age, your web applications and online assets are prime targets for cybercriminals. Our web penetration testing services ensure that your web applications are fortified against a wide range of threats, including SQL injection, cross-site scripting (XSS), and more.</Typography>
                  </CardExpertise>
 
                  <CardExpertise>
                    <LockOutlinedIcon color="secondary" sx={{fontSize:'200px'}}/>
                    <SubtittleCard>Security Consultation</SubtittleCard>
                    <Typography color={'text.main'} component='p'>Tailored Solutions for Your Unique Needs
Every business is unique, and so are its security requirements. Our security consultation services provide you with personalized strategies and solutions to address your specific cybersecurity challenges. We work closely with your team to develop a robust and resilient security posture.</Typography>
                  </CardExpertise>

              </Box>
            </Box>
        </Box>


        <Box sx={{ 
                  margin:'120px 0px',
                  backgroundColor:'primary.light', 
                  width:'100%', 
                  height:'auto', 
                  display:'flex',
                  justifyContent:'center',
                  }}>
            <Box sx={{           
                      height:'100%', 
                      width:{xs:'100%',
                             md:'100%',
                             lg:'100%',
                             xl:'80%'},
                      textAlign:'center', 
                      display:'flex',              
                      flexDirection:{xs:'column',
                                     md:'column',
                                     lg:'column',
                                     xl:'row'} ,
                      border:'2px solid grey',
                      alignItems:{md:'center',xl:'inherit',xs:'center'},
                    }} 
                      >
              <Box sx={{
                      width:{xl:'50%', lg:'100%'}, 
                      backgroundImage:`url(${backGround})`, 
                      backgroundPosition: 'center', 
                      backgroundSize: 'cover', 
                      backgroundAttachment: 'fixed'}}>
                  <Subtittle id='expertise'>Why Choose Offensive Security Services?</Subtittle>
                  <Box sx={{}}>

                  </Box>
              </Box>
              <Box sx={{display:'flex', 
                        p:'20px 0',
                        gap:1,
                        flexDirection:{xs:'column',md:'row', xl:'row', lg:'row'},
                        justifyContent:{xl:'space-evenly',lg:'center',md:'center'},
                        flexWrap:'wrap',
                        width:'80%',
                        alignItems:{md:'center',xl:'inherit',xs:'center'},
                        }}>
                  {
                   seccion2.map((data, index) => {
                    return (   <CardChoose key={index} title={data.title} url={data.url} description={data.description}/> )
                   }) 
                  }
              </Box>
            </Box>
        </Box>
      </>

    )
}

export default MainPage