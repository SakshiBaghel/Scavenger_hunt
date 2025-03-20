import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext.js';
import App from './App.js';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
      <AppContextProvider>
        <App />
      </AppContextProvider>
  </StrictMode>
);
