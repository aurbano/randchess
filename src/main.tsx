import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Board from './components/Board';
import Github from './components/Github';
import theme from './theme';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript />
      <Board />
      <Github />
    </ChakraProvider>
  </React.StrictMode>,
);
