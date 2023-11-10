import { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';

import { Container, IconWrapper, StyledLink } from './styles';
import { RxHamburgerMenu } from 'react-icons/rx';
import { palette } from '../../../assets/misc/vars';
import Logo from '../hero/Logo';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const isMobile = useMediaQuery('(max-width:736px)');
  const isTablet = useMediaQuery('(max-width:1000px)');

  const linkSettings = {
    smooth: true,
    duration: 700,
    horizontal: isMobile ? false : true,
    offset: isTablet ? 0 : isMobile ? 0 : -200,
  };
  return (
    <Container $isMobile={isMobile}>
      {isMobile ? (
        <>
          <IconWrapper>
            <IconButton color="secondary" size="medium" onClick={toggleDrawer}>
              <RxHamburgerMenu />
            </IconButton>
          </IconWrapper>
          <Drawer
            open={open}
            onClose={toggleDrawer}
            anchor="right"
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: `${palette.darkAccent2}`,
              },
            }}
          >
            <Box role="presentation" sx={{ width: '30vmax' }}>
              <List>
                {[
                  { section: 'Обо мне', to: 'about' },
                  { section: 'Портфолио', to: 'portfolio' },
                  { section: 'Цены', to: 'prices' },
                  { section: 'Контакты', to: 'contacts' },
                  { section: <Logo section="drawer" />, to: 'hero' },
                ].map((text, index) => {
                  return (
                    <ListItem key={index} disablePadding>
                      <StyledLink to={text.to} {...linkSettings}>
                        <ListItemButton color="primary" onClick={toggleDrawer}>
                          <ListItemText primary={text.section} />
                        </ListItemButton>
                      </StyledLink>
                    </ListItem>
                  );
                })}
              </List>
              {/* <Logo section="drawer" /> */}
            </Box>
          </Drawer>
        </>
      ) : (
        <>
          <StyledLink to="about" {...linkSettings}>
            <Button variant="contained">Обо мне</Button>
          </StyledLink>
          <StyledLink to="portfolio" {...linkSettings}>
            <Button variant="contained">Портфолио</Button>
          </StyledLink>
          <StyledLink to="prices" {...linkSettings}>
            <Button variant="contained">Цены</Button>
          </StyledLink>
          <StyledLink to="contacts" {...linkSettings}>
            <Button variant="contained">Контакты</Button>
          </StyledLink>
        </>
      )}
    </Container>
  );
};
export default NavBar;
