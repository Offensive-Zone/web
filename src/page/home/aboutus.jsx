import { Box, Container, Typography, Avatar } from "@mui/material"
import expertise from '../../assets/img/expertise.png';

const AboutUs = () => {
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
                            <h2>Acerca de Nosotros</h2>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                En The Offensive Zone, nos especializamos en llevar la seguridad de tu mundo digital al siguiente nivel. Con un enfoque audaz y proactivo, estamos aquí para defender tus activos digitales contra las amenazas cibernéticas más sofisticadas.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                Nuestra Visión
                                En The Offensive Zone, nuestra visión es liderar el cambio en la industria de la ciberseguridad, ofreciendo soluciones innovadoras y efectivas que superen las expectativas de nuestros clientes y establezcan nuevos estándares de excelencia.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                Nuestra Misión
                                Nos comprometemos a proteger activamente tus sistemas y datos mediante la identificación y mitigación proactiva de riesgos de seguridad cibernética. Nuestra misión es brindarte la tranquilidad y la confianza para que puedas concentrarte en lo que más importa: hacer crecer tu negocio.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                Nuestros Valores
                                En The Offensive Zone, nos guiamos por valores sólidos que reflejan nuestra dedicación a la excelencia, la integridad y la innovación. Nos comprometemos a trabajar con honestidad, transparencia y respeto en todo lo que hacemos.
                            </Typography>
                            <Typography sx={{ textAlign: 'justify', marginBottom: '10px' }}>
                                ¿Quiénes Somos?
                                Somos un equipo apasionado de expertos en seguridad cibernética, con una vasta experiencia en la protección de organizaciones de todos los tamaños y sectores. Estamos aquí para ser tu socio de confianza en la defensa de tus activos digitales contra las amenazas más avanzadas.
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
