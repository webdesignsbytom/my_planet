import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Context
import ToggleContextProvider from './context/ToggleContext';
import MapContextProvider from './context/MapContext';
import UserProvider from './context/UserContext';
// Styles
import './styles/index.css';
import './styles/backgrounds.css';
import './styles/components.css';
import './styles/animations.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <MapContextProvider>
        <ToggleContextProvider>
          <App />
        </ToggleContextProvider>
      </MapContextProvider>
    </UserProvider>
  </BrowserRouter>
);
