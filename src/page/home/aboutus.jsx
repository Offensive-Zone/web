import { Box, Container, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <Box id='about' sx={{
            margin: 0,
            backgroundColor: '#0d1117',
            padding: '150px 0',
            color: '#fff'
        }}>
            <Container maxWidth='lg'>
                <Box sx={{
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 900,
                            fontSize: { lg: '80px', md: '80px', sm: '80px', xs: '40px' },
                            borderBottom: '10px solid #58a6ff',
                            display: 'inline-block',
                            marginBottom: '40px',
                            color: '#fff'
                        }}
                    >
                        {t("about-us.title")}
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontSize: { lg: '22px', xs: '18px' },
                            lineHeight: 1.8,
                            color: '#c9d1d9'
                        }}
                    >
                        {t("about-us.content")}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default AboutUs
