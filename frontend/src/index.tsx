/*import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/joy/styles';
import App from './Main';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);*/


import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import App from './Main';



ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <CssVarsProvider>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
