import Subtittle from "../../components/subtittle";
import backGround2 from "../../assets/img/whoWeAre.jpg"
import { Box, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const {t} = useTranslation();

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
                <Subtittle>{t("cyber-threats.title")}</Subtittle>
                <Typography color='white' style={{marginTop:'20px'}}>
                {t("cyber-threats.description1")} <br/> <br/>
                </Typography>
                <Typography color='white'>
                {t("cyber-threats.description2")}
                </Typography>
              </Box>
            </Container>
          </Box>
    )
}

export default Section2