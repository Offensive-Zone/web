import { Box, Container, List, ListItem, Typography } from "@mui/material"

const Footer = ()=>{
    return (
        <Box  sx={{backgroundColor:'primary.main', width:'100%', height:{xs:'25vh', lg:'25vh'}, position:'relative', bottom:0, p:'20px 0 20px 0'}}>
            <Container maxWidth='lg'>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <Box>
                    <Typography color='white' variant="h5">Redes Sociales</Typography>
                    <List sx={{color:'white', listStyleType:'none'}}>
                        <ListItem>https://www.linkedin.com/company/offensive-security-services</ListItem>
                        <ListItem>https://www.instagram.com/offensivesecurityservices/</ListItem>
                    </List>
                </Box>
                <Box>
                <Typography color='white' component="h3" variant="h5">Contacto</Typography>
                    <List sx={{color:'white', listStyleType:'none'}}>
                    <ListItem>info@offensivesecurityservices.com</ListItem>
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