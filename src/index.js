import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './config/firebase'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
