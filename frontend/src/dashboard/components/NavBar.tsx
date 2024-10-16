/*import * as React from 'react';
import { Box, IconButton, Avatar, Menu, MenuItem } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ChatIcon from '@mui/icons-material/Chat';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox'; // For listing icon
import ColorSchemeToggle from './ColorSchemeToggle';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <Box component ='nav'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        top: 0,
        px: 1.5,
        py: 1,
        zIndex: 10000,
        backgroundColor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
      }}
      
    >
      {
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <IconButton size="sm" variant="soft">
          <MapsHomeWorkIcon />
        </IconButton>
        <Typography component="h1" sx={{ fontWeight: 'xl' }}>
          DwellingDirect
        </Typography>
        
        <Link to="/listing/Listing" style={{ textDecoration: 'none', color: 'inherit' }}>
        <IconButton size="sm" variant="soft"> 
          <AddBoxIcon />
        </IconButton>
        </Link>
      </Box>

     
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        
        <IconButton size="sm" variant="soft" onClick={() => console.log('Open chat')}>
          <ChatIcon />
        </IconButton>

       
        <Box sx={{ gap: 1, alignItems: 'center', display: { xs: 'none', sm: 'flex' } }}>
          <Avatar
            variant="outlined"
            size="sm"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            onClick={handleProfileClick}
            sx={{ cursor: 'pointer' }} // Make it clickable
          />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-sm">Afolabi P.O</Typography>
            <Typography level="body-xs">officialpryz@test.com</Typography>
          </Box>
        </Box>
        <ColorSchemeToggle sx={{ alignSelf: 'center' }} />

        
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ mt: 1.5 }}
          placement="bottom-end"
        >
          <MenuItem onClick={() => console.log('View profile')}>View Profile</MenuItem>
          <MenuItem onClick={() => console.log('Settings')}>Settings</MenuItem>
          <MenuItem onClick={() => console.log('Logout')}>Logout</MenuItem>
        </Menu>
      </Box>

      
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <IconButton size="sm" variant="soft" onClick={() => console.log('Open mobile nav')}>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};*/



import * as React from 'react';
import {
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  Typography,
  List,
  ListItem,
} from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Link, useNavigate } from 'react-router-dom';
import ColorSchemeToggle from './ColorSchemeToggle';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false); // Close drawer on navigation
  };

  const drawerContent = (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <List>
        <ListItem>
          <Typography
            level="body-md"
            onClick={() => handleNavigate('/listing')}
            sx={{ cursor: 'pointer' }}
          >
            Listing
          </Typography>
        </ListItem>

        <ListItem>
          <Typography
            level="body-md"
            onClick={() => handleNavigate('/profile')}
            sx={{ cursor: 'pointer' }}
          >
            View Profile
          </Typography>
        </ListItem>

        <ListItem>
          <Typography
            level="body-md"
            onClick={() => handleNavigate('')}
            sx={{ cursor: 'pointer' }}
          >
            Logout
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        px: 1.5,
        py: 1,
        backgroundColor: 'background.body',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 10000,
      }}
    >
      {/* Left Section with Logo and Listing Text */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <IconButton size="sm" variant="soft">
          <MapsHomeWorkIcon />
        </IconButton>
        <Typography component="h1" sx={{ fontWeight: 'xl' }}>
          DwellingDirect
        </Typography>
        <Link to="/listing/Listing" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography level="body-lg" sx={{ ml: 1 }}>
            Listing
          </Typography>
        </Link>
      </Box>

      {/* Right Section with Profile and Color Scheme Toggle */}
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center' }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          onClick={handleProfileClick}
          sx={{ cursor: 'pointer' }}
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Afolabi P.O</Typography>
          <Typography level="body-xs">officialpryz@test.com</Typography>
        </Box>
        <ColorSchemeToggle />

        {/* Profile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ mt: 1.5 }}
          placement="bottom-end"
        >
          <MenuItem onClick={() => handleNavigate('/profile')}>View Profile</MenuItem>
          <MenuItem onClick={() => console.log('/Settings')}>Settings</MenuItem>
          <MenuItem onClick={() => handleNavigate('/framesx-web-block/blocks/HeroLeft01')}>Logout</MenuItem>
        </Menu>
      </Box>

      {/* Mobile Hamburger Menu */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <IconButton size="sm" variant="soft" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
