import { Box, Typography } from "@mui/material";
import Subtittle from "../subtittle/index";
import CardExpertise from "../cards/cardExpertise";
import SubtittleCard from "../subtittle/subtitleCards";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Section1 = () =>{
    return (
        <Box sx={{
            backgroundColor:'primary.light', 
            width:'100%', 
            minHeight:'900px',
            height:'auto', 
            p:'50px 0',
            overflowY:'hidden'
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
    )
}

export default Section1