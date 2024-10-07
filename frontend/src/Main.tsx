import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import framesxTheme from './framesx-web-block/theme';
import HeroLeft01 from './framesx-web-block/blocks/HeroLeft01';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './sign-in-side/SignIn';
import SignUpPage from './sign-up-side/SignUp';

const App: React.FC = () => {
  return (
  <CssVarsProvider theme={framesxTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        <HeroLeft01 />

      </Box>
          } />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
      </Router>
    </CssVarsProvider>
  );

};

export default App;
