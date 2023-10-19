import { Box, Container, List, ListItem, Typography } from "@mui/material"

const Footer = ()=>{
    return (
        <Box  sx={{backgroundColor:'primary.main', width:'100%', height:{xs:'25vh', lg:'25vh'}, position:'relative', bottom:0, p:'20px 0 20px 0'}}>
            <Container maxWidth='lg'>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <Box>
                    <Typography color='white' variant="h5">Redes Sociales</Typography>
                    <List sx={{color:'white', listStyleType:'none'}}>
                        <ListItem>facebook</ListItem>
                        <ListItem>gmail</ListItem>
                        <ListItem>instagram</ListItem>
                    </List>
                </Box>
                <Box>
                <Typography color='white' component="h3" variant="h5">Acerca de</Typography>
                    <List sx={{color:'white', listStyleType:'none'}}>
                    <ListItem>nfo@misitio.com</ListItem>
                    <ListItem>44100 Guad., Jal., México</ListItem>
                    <ListItem>Av. Fray Antonio Alcalde 10</ListItem>
                    <ListItem>Tel: +52-1-33-12345678</ListItem>
                    <ListItem>info@misitio.com</ListItem>
                              
                    </List>
                </Box>
            </Box>
            </Container>
        </Box>
    )
}

export default Footer