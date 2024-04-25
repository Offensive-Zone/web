import { Box, Typography } from "@mui/material";
import Subtittle from "../../components/subtittle";
import CardExpertise from "../../components/cards/cardExpertise";
import SubtittleCard from "../../components/subtittle/subtitleCards";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTranslation } from "react-i18next";
const Expertise = () =>{
  const {t} = useTranslation();
    return (
        <Box 
        id='expertise'
        sx={{
            backgroundColor:'primary.light',
            backgroundImage:'url("../../../public/assets/img/elementRight.png")', 
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            backgroundPosition:' top right',
            width:'100%', 
            minHeight:'900px',
            height:'auto', 
            p:'50px 0',
            overflowY:'hidden',
            position:'relative'
            }}>
      <Box sx={{height:'100%', textAlign:'center'}} >
      <Subtittle>{t("our-expertice.title")}</Subtittle>
        <Box sx={{display:'flex', 
                  gap:6,
                  justifyContent:'center',
                  flexWrap:'wrap',
                  marginTop:'60px'
                  }}>

            <CardExpertise>
              <SecurityOutlinedIcon color="secondary" sx={{fontSize:'200px'}}/>
              <SubtittleCard>{t("our-expertice.penetration-testing.title")}</SubtittleCard>
              <Typography textAlign={'justify'} color={'text.main'} component='p'>{t("our-expertice.penetration-testing.description")}</Typography>
            </CardExpertise>


            <CardExpertise>
              <LanguageOutlinedIcon color="secondary" sx={{fontSize:'200px'}}/>
              <SubtittleCard>{t("our-expertice.web-penetration-testing.title")}</SubtittleCard>
              <Typography textAlign={'justify'} color={'text.main'} component='p'>{t("our-expertice.web-penetration-testing.description")}</Typography>
            </CardExpertise>

            <CardExpertise>
              <LockOutlinedIcon color="secondary" sx={{fontSize:'200px'}}/>
              <SubtittleCard>{t("our-expertice.security-consultation.title")}</SubtittleCard>
              <Typography textAlign={'justify'} color={'text.main'} component='p'>{t("our-expertice.security-consultation.description")}</Typography>
            </CardExpertise>

        </Box>
      </Box>
  </Box>
    )
}

export default Expertise