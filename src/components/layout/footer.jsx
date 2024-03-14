import { Box, Container, List, ListItem, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import theme from "../../theme/theme"


const Footer = ()=>{
    return (
        <Box   
        component='footer'
        sx={{backgroundColor:'primary.main', 
             width:'100%', 
             height:{xs:'auto', lg:'25vh'}, 
             position:'relative', 
             bottom:0, p:'20px 0 20px 0', 
             overflowY:'hidden',
             }}>
            <Container maxWidth='lg'> 
            <Box sx={{display:'flex', flexDirection:{md:'row', xs:'column'}, justifyContent:'space-around'}}>
            <img width='80px' height='80px' alt='logo-company' src='../assets/img/logo-white.png'></img>
          
                <Box>
                    <Typography 
                        sx={{
                            borderTop:`6px solid ${theme.palette.tertiary.main}`,
                            lineHeight:'2'

                        }}
                        color='white' 
                        variant="h5">Social Media</Typography>
                    <List sx={{color:'white', listStyleType:'none'}}>
                        <ListItem><a style={{color:'white'}} href="https://www.linkedin.com/company/theoffensivezone"><LinkedInIcon fontSize="large"/></a></ListItem>
                        <ListItem><a style={{color:'white'}} href="https://www.instagram.com/theoffebsivezone/"><InstagramIcon fontSize="large"/></a></ListItem>
                    </List>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            borderTop:`6px solid ${theme.palette.tertiary.main}`,
                            lineHeight:'2'
                        }} 
                        color='white' 
                        component="h3" 
                        variant="h5">Contact info</Typography>
                    <List sx={{color:'white', listStyleType:'none'}}>
                    <ListItem><a style={{color:'white'}} href="mailto:info@offensivesecurityservices.com"><EmailOutlinedIcon fontSize="large"/></a></ListItem>
                    <ListItem>Santander,Colombia</ListItem>
                    <ListItem>Calle 143, Bucaramanga</ListItem>
                    <ListItem>Tel: +573046777135</ListItem>
                    </List>
                </Box>
            </Box>

          
            </Container>
        </Box>
    )
}




export default Footer