import React, { useEffect, useState } from 'react';
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
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState(i18n.language || 'en'); // Idioma predeterminado: inglés

  const handleChange = (event) => {
    const newLang = event.target.value;
    setLng(newLang);
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    setLng(i18n.language || 'en');
  }, [i18n.language]);

  const menu = [
    { page: t("header.services"), to: 'expertise' },
    { page: t("header.about-us"), to: 'about' },
    { page: t("header.threats"), to: 'threats' },
    { page: t("header.why-us"), to: 'whyus' },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle('down', window.scrollY > 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (i) => {
    switch (i) {
      case 1:
        window.open("https://www.linkedin.com/company/theoffensivezone", "_blank");
        break;
      case 2:
        window.open("https://www.instagram.com/offensivezone/", "_blank");
        break;
      case 3:
        window.open("mailto:info@offensive-zone.com", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <AppBar position="static" sx={{
      zIndex: 10,
      height: 'auto',
      maxHeight: '80px',
      backgroundColor: 'rgba(0,0,0,0.3)',
      p: '10px 0',
      position: 'absolute',
      transition: 'all 0.4s linear',
    }}>
      <Toolbar variant="dense" sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <a href="https://offensive-zone.com">
          <img width='80px' height='80px' alt='hacker logo' src='../assets/img/logo-white.png' />
        </a>

        {/* Menú para móviles */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ position: 'absolute', right: '0', alignSelf: 'center' }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { md: 'block', lg: 'none' } }}
          >
            {menu.map((menuItem) => (
              <MenuItem key={menuItem.page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{menuItem.page}</Typography>
              </MenuItem>
            ))}

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={() => navigateTo(1)} size='small' color='inherit'>
                <LinkedInIcon fontSize='large' />
              </IconButton>
              <IconButton onClick={() => navigateTo(2)} size='small' color='inherit'>
                <InstagramIcon fontSize='large' />
              </IconButton>
              <IconButton onClick={() => navigateTo(3)} size='small' color='inherit'>
                <EmailOutlinedIcon fontSize='large' />
              </IconButton>
            </Box>

            {/* Selector de idioma */}
            <FormControl sx={{ m: 1, minWidth: '150px' }}>
              <Select
                value={lng}
                onChange={handleChange}
                sx={{ color: '#000', border: '1px solid #fff' }}
              >
                <MenuItem value='en'>
                  <img width='20px' src="../assets/img/en.png" alt="flag" style={{ marginRight: '4px' }} /> English
                </MenuItem>
                <MenuItem value='es'>
                  <img width='20px' src="../assets/img/es.png" alt="flag" style={{ marginRight: '4px' }} /> Spanish
                </MenuItem>
              </Select>
            </FormControl>
          </Menu>
        </Box>

        {/* Menú de escritorio */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, gap: '30px', justifyContent: 'center' }}>
          {menu.map((menuItem) => (
            <Button
              href={`#${menuItem.to}`}
              key={menuItem.page}
              onClick={handleCloseNavMenu}
              sx={{
                color: 'white',
                '&:hover': {
                  background: theme.palette.secondary.light,
                  color: '#000',
                }
              }}
            >
              {menuItem.page}
            </Button>
          ))}

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton onClick={() => navigateTo(1)} size='small' color='inherit'>
              <LinkedInIcon fontSize='large' />
            </IconButton>
            <IconButton onClick={() => navigateTo(2)} size='small' color='inherit'>
              <InstagramIcon fontSize='large' />
            </IconButton>
            <IconButton onClick={() => navigateTo(3)} size='small' color='inherit'>
              <EmailOutlinedIcon fontSize='large' />
            </IconButton>
          </Box>

          {/* Selector de idioma */}
          <FormControl sx={{ m: 1, minWidth: '150px' }}>
            <Select
              value={lng}
              onChange={handleChange}
              sx={{ color: '#fff', border: '1px solid #fff' }}
            >
              <MenuItem value='en'>
                <img width='20px' src="../assets/img/en.png" alt="flag" style={{ marginRight: '4px' }} /> English
              </MenuItem>
              <MenuItem value='es'>
                <img width='20px' src="../assets/img/es.png" alt="flag" style={{ marginRight: '4px' }} /> Spanish
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
