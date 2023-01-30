import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Board from './components/Board';
import Editor from './components/Editor';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <Editor />
      <Board />
    </ChakraProvider>
  </React.StrictMode>,
);
