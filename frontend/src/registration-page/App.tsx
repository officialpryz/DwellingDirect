/*import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form'; // For form validation
import axios from 'axios'; // For backend communication
import { useLocation } from 'react-router-dom';

interface RegistrationData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  location: string;
}

const RegistrationForm = ({ userEmail }: { userEmail: string }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<RegistrationData>();
  const [userLocation, setUserLocation] = useState<string>('');
  const [coords, setCoords] = useState<{ lat: number, long: number } | null>(null);

  useEffect(() => {
    // Pre-fill email with the one passed from signup
    setValue('email', userEmail);
  }, [userEmail, setValue]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, long: longitude });
        reverseGeocode(latitude, longitude); // Get address from coordinates
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const reverseGeocode = async (latitude: number, longitude: number) => {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Use your own Google API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    try {
      const response = await axios.get(url);
      const location = response.data.results[0]?.formatted_address || '';
      setUserLocation(location);
      setValue('location', location);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const onSubmit = (data: RegistrationData) => {
    // Submit form data
    console.log('Form Data:', data);
    // You can make a request to your backend here
    axios.post('/api/register', data)
      .then((response) => console.log('User Registered:', response.data))
      .catch((error) => console.error('Error:', error));
  };

const RegistrationPage = () => {
  const location = useLocation();
  const email = location.state?.email || '';
  return (
    <Box sx={{ mx: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Complete Your Registration
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              fullWidth
              {...register('firstName', { required: 'First name is required' })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              fullWidth
              {...register('lastName', { required: 'Last name is required' })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              fullWidth
              {...register('phone', { required: 'Phone number is required' })}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              defaultValue={userEmail}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              fullWidth
              {...register('country', { required: 'Country is required' })}
              error={!!errors.country}
              helperText={errors.country?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Exact Location"
              fullWidth
              value={userLocation}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={getLocation} fullWidth>
              Fetch Real-Time Location
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
};

export default RegistrationForm; */


/*import * as React from 'react';
import {
  CssVarsProvider,
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Divider,
} from '@mui/joy';
import { useLocation } from 'react-router-dom';
import ColorSchemeToggle from './ColorSchemeToggle'; // Import your color scheme toggle component
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded'; // Import company logo icon

const RegistrationPage = () => {
  const location = useLocation();
  const email = location.state?.email || '';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const firstName = formElements.firstName.value;
    const lastName = formElements.lastName.value;
    const phoneNumber = formElements.phoneNumber.value;
    const countryLocation = formElements.countryLocation.value;

    console.log('Registration details:', { firstName, lastName, phoneNumber, email, countryLocation });
    // Perform registration logic here
  };

  return (
    <CssVarsProvider>
      <Box
        sx={(theme) => ({
          width: { xs: '100%', md: '50vw' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: 400,
            maxWidth: '100%',
            p: 3,
            borderRadius: 'sm',
            background: 'background.body',
            boxShadow: 'sm',
          }}
        >
          <Box component="header" sx={{ py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <BadgeRoundedIcon fontSize="large" />
              <Typography level="title-lg">Company Logo</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Typography component="h1" level="h3" sx={{ mb: 2 }}>
            Register
          </Typography>
          <FormControl required>
            <FormLabel>First Name</FormLabel>
            <Input type="text" name="firstName" required />
          </FormControl>
          <FormControl required>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" name="lastName" required />
          </FormControl>
          <FormControl required>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" name="phoneNumber" required />
          </FormControl>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={email} readOnly />
          </FormControl>
          <FormControl required>
            <FormLabel>Country Location</FormLabel>
            <Input type="text" name="countryLocation" required />
          </FormControl>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Register
          </Button>
          <Divider sx={{ my: 2 }}>or</Divider>
        </Box>
        <Box component="footer" sx={{ py: 3 }}>
          <Typography level="body-xs" sx={{ textAlign: 'center' }}>
            © Your Company {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default RegistrationPage; */


/*import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  MenuItem,
  IconButton,
} from '@mui/joy';
import DarkModeToggle from '@mui/icons-material/LightMode'; // Adjust import based on your dark mode icon
import LightModeToggle from '@mui/icons-material/DarkMode'; // Adjust import based on your light mode icon

const countryOptions = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  // Add more countries as needed
];

const RegistrationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || ''; // Pre-filled from signup and set as read-only
  const [country, setCountry] = useState('');
  const [locationCoords, setLocationCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Registration details:', {
      firstName,
      lastName,
      phoneNumber,
      email,
      country,
      locationCoords,
    });
    // Implement registration logic here
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
      
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <img src="/path/to/your/logo.png" alt="Company Logo" style={{ width: '150px' }} />
      </Box>

      <IconButton onClick={toggleColorMode} sx={{ position: 'absolute', top: 16, right: 16 }}>
        {colorMode === 'light' ? <LightModeToggle /> : <DarkModeToggle />}
      </IconButton>

      <Typography level="h4" gutterBottom>
        Registration
      </Typography>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input 
            id="firstName" 
            name="firstName" 
            required 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input 
            id="lastName" 
            name="lastName" 
            required 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
          <Input 
            id="phoneNumber" 
            name="phoneNumber" 
            required 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" value={email} readOnly />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="country">Country</FormLabel>
          <Select
            id="country"
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            {countryOptions.map((option) => (
              <MenuItem key={option.code} value={option.code}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Button type="submit" variant="solid" sx={{ mt: 2 }}>
        Register
      </Button>
      <Box sx={{ mt: 3 }}>
        <Typography level="body2" align="center">
          © 2024 Your Company Name
        </Typography>
      </Box>
    </Box>
  );
};

export default RegistrationPage; */




import * as React from 'react';
import {
  CssVarsProvider,
  extendTheme,
  useColorScheme,
} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
//import Stack from '@mui/joy/Stack';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Function for light/dark mode toggle
function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, ...other } = props;
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <IconButton
      aria-label="toggle light/dark mode"
      size="sm"
      variant="outlined"
      disabled={!mounted}
      onClick={(event) => {
        setMode(mode === 'light' ? 'dark' : 'light');
        onClick?.(event);
      }}
      {...other}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

// Real-time geolocation
const useGeoLocation = () => {
  const [location, setLocation] = React.useState({ latitude: '', longitude: '' });

  React.useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        });
      });
    }
  }, []);

  return location;
};

// Theme setup
const customTheme = extendTheme({});

export default function RegistrationPage() {
  const { latitude, longitude } = useGeoLocation();
  const [country, setCountry] = React.useState('');
  const [email] = React.useState('example@example.com'); // Prefilled email
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: email,
      country,
      latitude,
      longitude,
    };

    console.log('Form Data:', userData);
    
    // Navigate to the next page (e.g., dashboard) after successful submission
    navigate('/dashboard');  // Change '/dashboard' to the actual route
  };

  return (
    <CssVarsProvider theme={customTheme} disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', backdropFilter: 'blur(12px)', backgroundColor: 'rgba(255 255 255 / 0.2)', width: { xs: '100%', md: '50vw' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', width: '100%', px: 2 }}>
          <Box component="header" sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton variant="soft" color="primary" size="sm">
                <BadgeRoundedIcon />
              </IconButton>
              <Typography level="title-lg">Company logo</Typography>
            </Box>
            <ColorSchemeToggle />
          </Box>
          <Box component="main" sx={{ my: 'auto', py: 2, pb: 5, display: 'flex', flexDirection: 'column', gap: 2, width: 400, maxWidth: '100%', mx: 'auto', borderRadius: 'sm' }}>
            <Typography component="h1" level="h3">Register</Typography>
            <Divider />
            <form onSubmit={handleSubmit}>
              <FormControl required>
                <FormLabel>First Name</FormLabel>
                <Input type="text" name="firstName" />
              </FormControl>
              <FormControl required>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" name="lastName" />
              </FormControl>
              <FormControl required>
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" name="phone" />
              </FormControl>
              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input type="email" /*value={email} readOnly*/ />
              </FormControl>
              <FormControl required>
                <FormLabel>Country</FormLabel>
                <Input type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
              </FormControl>
              <FormControl required>
                <FormLabel>Location</FormLabel>
                <Typography level="body-sm">Location: {latitude}, {longitude}</Typography>
              </FormControl>
             

              <Button type="submit" fullWidth>
                Register
              </Button>
            </form>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" sx={{ textAlign: 'center' }}>
              © Your company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
