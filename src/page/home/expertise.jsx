import { Box, Typography } from "@mui/material";
import Subtittle from "../../components/subtittle";
import CardExpertise from "../../components/cards/cardExpertise";
import SubtittleCard from "../../components/subtittle/subtitleCards";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "security-awareness",
    icon: <SecurityOutlinedIcon color="secondary" sx={{ fontSize: '120px' }} />,
  },
  {
    key: "ai-implementation",
    icon: <SmartToyOutlinedIcon color="secondary" sx={{ fontSize: '120px' }} />,
  },
  {
    key: "secure-software-development",
    icon: <CodeOutlinedIcon color="secondary" sx={{ fontSize: '120px' }} />,
  },
  {
    key: "iso-soc2-compliance",
    icon: <VerifiedOutlinedIcon color="secondary" sx={{ fontSize: '120px' }} />,
  },
  {
    key: "ssdlc",
    icon: <SyncOutlinedIcon color="secondary" sx={{ fontSize: '120px' }} />,
  },
];

const Expertise = () => {
  const { t } = useTranslation();
  return (
    <Box
      id='expertise'
      sx={{
        backgroundColor: 'primary.light',
        backgroundImage: 'url("../../../public/assets/img/elementRight.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        width: '100%',
        minHeight: '900px',
        height: 'auto',
        p: '50px 0',
        overflowY: 'hidden',
        position: 'relative'
      }}>
      <Box sx={{ height: '100%', textAlign: 'center' }} >
        <Subtittle>{t("our-expertice.title")}</Subtittle>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 6,
          marginTop: '60px',
          px: { xs: 2, md: 4 },
          mx: 'auto',
          maxWidth: '1800px',
        }}>
          {services.map((service) => (
            <CardExpertise key={service.key}>
              {service.icon}
              <SubtittleCard>{t(`our-expertice.${service.key}.title`)}</SubtittleCard>
              <Typography textAlign={'justify'} color={'text.main'} component='p'>
                {t(`our-expertice.${service.key}.description`)}
              </Typography>
              <Typography
                sx={{ fontStyle: 'italic', fontWeight: 600, color: 'tertiary.main' }}
                component='p'
              >
                {t(`our-expertice.${service.key}.tagline`)}
              </Typography>
            </CardExpertise>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Expertise
