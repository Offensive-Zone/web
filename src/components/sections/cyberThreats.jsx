import Subtittle from "../subtittle";
import backGround2 from "../../assets/img/whoWeAre.jpg"
import { Box, Typography, Container } from "@mui/material";

const Section2 = () => {
    return (
        <Box sx={{
            width:'100%',
            minHeight:'700px',
            backgroundImage:`linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backGround2})`, 
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            position: 'relative',
            textAlign:'center',
            display:'flex',
            alignItems:'center',
            overflowY:'hidden',
            boxShadow:'10px -5px 20px black'
          }}>
            <Container maxWidth='lg'>
              <Subtittle>Elevating the Fight Against Cyber Threats</Subtittle>
              <Typography color='white'>At Offensive Security Services, we take the battle against cyber threats to the next level. In an era where data breaches and cyberattacks are becoming increasingly sophisticated, our mission is clear: to safeguard your digital assets and protect your business from the ever-evolving landscape of cyber threats.</Typography><br />
              <Typography color='white'>Partner with Offensive Security Services and fortify your defenses against cyber threats. In an age where cybersecurity is non-negotiable, choose the experts who are dedicated to your protection and peace of mind.</Typography>
            </Container>
          </Box>
    )
}

export default Section2