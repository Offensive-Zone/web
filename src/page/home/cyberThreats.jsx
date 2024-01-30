import Subtittle from "../../components/subtittle";
import backGround2 from "../../assets/img/whoWeAre.jpg"
import { Box, Typography, Container } from "@mui/material";

const Section2 = () => {
    return (
        <Box 
        id='threats'
        sx={{
          margin:0,
          padding:0,
            width:'100%',
            minHeight:'750px',
            backgroundImage:`url(${backGround2})`, 
            // backgroundAttachment:'fixed',
            backgroundSize: 'cover', 
            position: 'relative',
            textAlign:'center',
            display:'flex',
            alignItems:'center',
            overflowY:'hidden',
            boxShadow:'10px -5px 20px black'
          }}>
            <Container maxWidth='lg'>
              <Box sx={{
                backgroundColor:'rgba(0,0,0,0.7)',
                padding:'5%',
                border:'3px solid black',
              }}>
                <Subtittle>Elevating the Fight Against Cyber Threats</Subtittle>
                <Typography color='white' style={{marginTop:'20px'}}>At Offensive Security Services, we take the battle against cyber threats to the next level. In an era where data breaches and cyberattacks are becoming increasingly sophisticated, our mission is clear: to safeguard your digital assets and protect your business from the ever-evolving landscape of cyber threats.</Typography><br />
                <Typography color='white'>Partner with Offensive Security Services and fortify your defenses against cyber threats. In an age where cybersecurity is non-negotiable, choose the experts who are dedicated to your protection and peace of mind.</Typography>
              </Box>
            </Container>
          </Box>
    )
}

export default Section2