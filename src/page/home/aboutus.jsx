import { Box, Container, Typography, Avatar } from "@mui/material"
import expertise from '../../assets/img/expertise.jpg';



const AboutUs = () =>{
    return (
        <>
            <Box id='about' sx={{
                margin:0,
                padding:0,
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
                                <h2>About Us</h2>
                                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio saepe reiciendis enim, laudantium accusantium explicabo repudiandae mollitia recusandae ex nisi. Deserunt voluptatibus consequuntur quam tempora debitis saepe voluptates, animi voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel rerum accusamus. Tenetur explicabo optio consequatur, odio quasi autem nisi veritatis aspernatur, facilis et ratione, quod iste nam? Sunt, vel  Loer</Typography> <br />
                                <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio saepe reiciendis enim, laudantium accusantium explicabo repudiandae mollitia recusandae ex nisi. Deserunt voluptatibus consequuntur quam tempora debitis saepe voluptates</Typography>
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
                            <Box sx={{
                                display:'flex',
                                alignItems:'center',
                                gap:'15px'
                            }}>
                                <Avatar sx={{width:'80px', height:'80px'}}/>
                                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam libero perspiciatis dolorum! Nostrum similique, possimus impedit nemo necessitatibus corrupti! Iusto tempore incidunt quo exercitationem, maiores sunt! Impedit, quod repudiandae.</Typography>
                            </Box>
                            <Box sx={{
                                display:'flex',
                                alignItems:'center',
                                gap:'15px'
                            }}>   
                                <Avatar sx={{width:'80px', height:'80px'}}/>
                                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam libero perspiciatis dolorum! Nostrum similique, possimus impedit nemo necessitatibus corrupti! Iusto tempore incidunt quo exercitationem, maiores sunt! Impedit, quod repudiandae.</Typography>
                            </Box>
                        </Box>
                </Container>
            </Box>
        </>
    )
}

export default AboutUs