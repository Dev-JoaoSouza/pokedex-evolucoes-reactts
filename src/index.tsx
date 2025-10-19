import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/styles';
import { AppRouter } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>
);
