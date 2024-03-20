import { Box, Container, Typography, Avatar } from "@mui/material"
import expertise from '../../assets/img/expertise.png';
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation();
    return (
        <>
            <Box id='about' sx={{
                margin:0,
                backgroundImage: `url('../../assets/img/bkg-about.jpg')`,
                backgroundSize:'cover',
                backgroundAttachment:'fixed',
                padding:'150px 0',
                color:'#fff'
            }}>
                <Container>
                    <Box sx={{
                        display:'flex',
                        flexDirection:{xs:'column', md:'row'},
                        gap:5
                    }}>
                        <Box sx={{
                            flex:1,
                            alignSelf:'center'
                        }}>
                            <h2>{t("about-us.title")}</h2>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                {t("about-us.first")}   
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                {t("about-us.second")} 
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                {t("about-us.third")} 
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                {t("about-us.fourth")} 
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                {t("about-us.fifth")} 
                            </Typography>
                        </Box>
                        <img
                            style={{
                                flex:1,
                                width:'50%',
                                margin:'auto'
                            }}
                            src={expertise} 
                            alt="sass"/>
                    </Box>
                    <Box
                        sx={{
                            display:'flex',
                            flexWrap:{xs:'wrap',md:'nowrap'},
                            gap:'15px',
                            marginTop:'25px'
                        }}
                    >
                        {/* <Box sx={{
                            display:'flex',
                            alignItems:'center',
                            gap:'15px'
                        }}>
                            <Avatar sx={{width:'80px', height:'80px'}}/>
                            <Typography sx={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam libero perspiciatis dolorum! Nostrum similique, possimus impedit nemo necessitatibus corrupti! Iusto tempore incidunt quo exercitationem, maiores sunt! Impedit, quod repudiandae.</Typography>
                        </Box>
                        <Box sx={{
                            display:'flex',
                            alignItems:'center',
                            gap:'15px'
                        }}>   
                            <Avatar sx={{width:'80px', height:'80px'}}/>
                            <Typography sx={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam libero perspiciatis dolorum! Nostrum similique, possimus impedit nemo necessitatibus corrupti! Iusto tempore incidunt quo exercitationem, maiores sunt! Impedit, quod repudiandae.</Typography>
                        </Box> */}
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default AboutUs
