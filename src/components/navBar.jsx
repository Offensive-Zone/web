import * as React from 'react';
import { Container, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import theme from '../theme/theme';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


export const NavBar = () => {

  const navigateTo = (i) => {
    switch (i) {
      case 1:
        window.open("https://www.linkedin.com/company/offensive-security-services", "_blank")
        break
      case 2:
        window.open("https://www.instagram.com/offensivesecurityservices/", "_blank")
        break
      case 3:
        window.open("mailto:info@offensivesecurityservices.com", "_blank")
        break
    }
  }

  return (
    <AppBar position="static" sx={{
      zIndex: 10,
      height: 'auto',
      backgroundColor: theme.palette.primary.main,
      p: '10px 0'
    }}>
      <Container maxWidth='lg'>
        <Toolbar variant="dense" sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <img style={{ backgroundColor: 'white' }} width='80px' height='80px' alt='hacker logo' src='hacker.png'></img>
          <Box sx={{
            display: 'flex',
            gap: 1
          }}>
            <IconButton onClick={() => navigateTo(1)} size='small' color='inherit'>
              <LinkedInIcon fontSize='large' sx={{ '&:hover': { transform: 'scale(1.2)' } }} />
            </IconButton>
            <IconButton onClick={() => navigateTo(2)} size='small' color='inherit'>
              <InstagramIcon fontSize='large' sx={{ '&:hover': { transform: 'scale(1.2)' } }} />
            </IconButton>
            <IconButton onClick={() => navigateTo(3)} size='small' color='inherit'>
              <EmailOutlinedIcon fontSize='large' sx={{ '&:hover': { transform: 'scale(1.2)' } }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
