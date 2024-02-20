import React from 'react';
import theme from '../../theme/theme';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [t, i18n] = useTranslation()
  const [lng, setLng] = React.useState(i18n.language);

  const menu = [
     {page:t("header.expertise"), to:'expertise'},
     {page:t("header.about-us"), to:'about'},
     {page:t("header.threats"), to:'threats'},
     {page:t("header.why-us"), to:'whyus'},
     {page:t("header.contact"), to:'contact'},
  ]

  const handleChange = (event) => {
    setLng(event.target.value);
  };

  const [anchorElNav, setAnchorElNav] = React.useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  window.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    header.classList.toggle('down', window.scrollY > 200)
    console.log(navigator.language)
  })

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
      backgroundColor: 'rgba(0,0,0,0.3)',
      p: '10px 0',
      position:'absolute',
      transition:'all 0.4s linear',
    }}>

        <Toolbar variant="dense" sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <img style={{ backgroundColor: 'white' }} width='80px' height='80px' alt='hacker logo' src='hacker.png'></img>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  position:'absolute',
                  right:'0',
                  alignSelf:'center'
                }}
              >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menu.map((menu) => (
                <MenuItem key={menu.page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{menu.page}</Typography>
                </MenuItem>
              ))}

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
            </Menu>
          </Box>

          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' }, 
            gap:{ md:'20px', lg:'30px' }, 
            justifyContent:'center' 
            }}>
            {menu.map((menu) => (
              <Button
                
                href={`#${menu.to}`}
                key={menu.page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  color: 'white', 
                  '&:hover': {
                    background:theme.palette.secondary.light,
                    color:'#000',
                    borderRadius:'0px'
                  }
                 }}
                 className='link'
              >
                {menu.page}
              </Button>
            ))}

            <Box sx={{
              display: 'flex',
              gap: 1,
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
          </Box>

          <FormControl sx={{ m: 1, minWidth:'150px'}}>
            <Select
              id="demo-simple-select-standard"
              value={lng}
              onChange={handleChange}
              sx={{
                color:'#fff',
                border:'1px solid #fff',
              }}
            >
              <MenuItem value='es' onClick={()=>i18n.changeLanguage('es')}> <img width='25px' src="../assets/img/es.png" alt="flag"style={{marginRight:'4px'}} />   spanish</MenuItem>
              <MenuItem value='en' onClick={()=>i18n.changeLanguage('en')}> <img width='25px' src="../assets/img/en.png" alt="flag"style={{marginRight:'4px'}} />   english</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>

    </AppBar>
  )
}

export default NavBar
