import * as React from 'react';
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
      {/* Left Section with Logo and Listing Icon */}
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
        <IconButton size="sm" variant="soft"> {/* Link to the listing page */}
          <AddBoxIcon />
        </IconButton>
        </Link>
      </Box>

      {/* Right Section with Profile, Chat, and Color Scheme Toggle */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        {/* Chat Icon */}
        <IconButton size="sm" variant="soft" onClick={() => console.log('Open chat')}>
          <ChatIcon />
        </IconButton>

        {/* Profile Section */}
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

        {/* Profile Dropdown Menu */}
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

      {/* Mobile Hamburger Menu */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <IconButton size="sm" variant="soft" onClick={() => console.log('Open mobile nav')}>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

